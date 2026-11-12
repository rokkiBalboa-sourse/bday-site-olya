import { NextRequest, NextResponse } from "next/server";
import { SECRET_ACCESS_CODE } from "@/config/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code } = body;

    if (code === SECRET_ACCESS_CODE) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid code" }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, error: "Bad request" }, { status: 400 });
  }
}
