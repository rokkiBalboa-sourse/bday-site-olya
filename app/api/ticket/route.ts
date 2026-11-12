import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { SECRET_ACCESS_CODE } from "@/config/auth";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (code !== SECRET_ACCESS_CODE) {
    return new NextResponse(
      JSON.stringify({ error: "Access denied" }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    let filePath = path.join(process.cwd(), "private", "ticket.pdf");
    
    if (!fs.existsSync(filePath)) {
      filePath = path.join(process.cwd(), "public", "ticket.pdf");
    }

    if (!fs.existsSync(filePath)) {
      return new NextResponse("File not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="affinage-ticket.pdf"',
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  } catch {
    return new NextResponse("Error reading ticket", { status: 500 });
  }
}
