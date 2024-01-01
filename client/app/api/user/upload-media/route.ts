import { ApiResponse, generateRandomString } from "@/helpers";
import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";
import db from "../../../../helpers/db";

AWS.config.update({
  accessKeyId: process.env.AWS_S3_USER_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_USER_ACCESS_SECRET,
  region: process.env.AWS_S3_USER_REGION,
});

const s3 = new AWS.S3();

const GetFileExtension = (file: any) => {
  const exArr = file.name.split(".");
  const ex = exArr[exArr.length - 1];

  return ex;
};

const UploadMediaToS3 = async (file: any, model: any, model_id: any) => {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME || "",
      Key: `${process.env.AWS_S3_DIR_NAME}/${generateRandomString(
        20
      )}.${GetFileExtension(file)}`,
      Body: buffer,
    };

    const uploadResponse = await s3.upload(params).promise();

    await db.media.create({
      data: {
        etag: uploadResponse.ETag,
        // @ts-ignore
        server_side_encryption: uploadResponse.ServerSideEncryption,
        location: uploadResponse.Location,
        // @ts-ignore
        key: uploadResponse.key,
        bucket: uploadResponse.Bucket,
        model: model,
        model_id: Number(model_id),
      },
    });

    return uploadResponse.Location;
  } catch (error) {
    throw new Error("Error uploading to S3 " + error);
  }
};

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.formData();
    const files: File[] | null = data.getAll("files[]") as File[] | null;
    const model = data.get("model");
    const model_id = data.get("model_id");

    if (!files || files.length === 0) {
      return ApiResponse(false, "No files", []);
    }

    const urls = await Promise.all(
      files.map(
        async (file: File) => await UploadMediaToS3(file, model, model_id)
      )
    );

    return ApiResponse(true, "Files uploaded successfully", { urls });
  } catch (error) {
    console.log("Error: ", error);
    return ApiResponse(false, "Error uploading files", []);
  }
}
