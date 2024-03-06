import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get("token") ?? null;
    // console.log("Token from cookies:", token);
    try {
        if (token) {
            const decodedUser = jwt.verify(token.value, "secret") // Typecast decodedUser to JwtPayload
            console.log("Decoded user:", decodedUser);
            return new Response("ok", { status: 200 });
        } else {
            // console.log("No token found");
            return new Response(null, { status: 400 });
        }
    } catch (err) {
        // console.error("Error decoding token:", err);
        return new Response(null, { status: 400 });
    }
}
