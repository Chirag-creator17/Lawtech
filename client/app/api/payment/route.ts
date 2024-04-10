import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const user_id = body.user_id;
    const lawyer_id = body.lawyer_id;
    const payment_recieved = body.payment_recieved;
    const response = NextResponse.json({ success: true }, { status: 200 });
    return response;
}
