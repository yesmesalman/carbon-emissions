import { NextResponse } from "next/server";

export function ApiResponse(
  success: any,
  message: any,
  data: any,
  validation: Boolean = false
) {
  let statusResponse = {
    status: 400,
  };

  if (success) {
    statusResponse = {
      status: 200,
    };
  }

  if (validation) {
    statusResponse = {
      status: 403,
    };
  }

  return NextResponse.json({ success, message, data }, statusResponse);
}