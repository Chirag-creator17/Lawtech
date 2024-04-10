import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const token = jwt.sign({ username: body.username }, "secret");
  const response = NextResponse.json({ success: true }, { status: 200 });
  response.cookies.set("token", token, {
    // httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
  });
  return response;
}
