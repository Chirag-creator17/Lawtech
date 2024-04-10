import { NextRequest } from "next/server";
import pool from "@/lib/db";

export async function GET(request: NextRequest) {
  const client = await pool.connect();
  const res = await client.query('SELECT * FROM users');
  return new Response(res.rows[0].fullname, { status: 200 });
}