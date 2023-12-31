import { ApiResponse, generateRandomString } from "@/helpers";
import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_S3_USER_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_USER_ACCESS_SECRET,
  region: process.env.AWS_S3_USER_REGION,
});

const s3 = new AWS.S3();

export const GetFileExtension = (file: any) => {
  const exArr = file.name.split(".");
  const ex = exArr[exArr.length - 1];

  return ex;
};

export const UploadMediaToS3 = async (file: any) => {
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
    return uploadResponse.Location;
  } catch (error) {
    throw new Error("Error uploading to S3 " + error);
  }
};

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.formData();
    const files: File[] | null = data.getAll("files[]") as File[] | null;

    if (!files || files.length === 0) {
      return ApiResponse(false, "No files", []);
    }

    const urls = await Promise.all(
      files.map(async (file: File) => await UploadMediaToS3(file))
    );

    return ApiResponse(true, "Files uploaded successfully", { urls });
  } catch (error) {
    console.error("Error:", error);
    return ApiResponse(false, "Error uploading files", []);
  }
}
