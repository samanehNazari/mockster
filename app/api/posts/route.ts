import { NextResponse } from "next/server";
import { posts } from '@package/mock-data';

export async function GET() {
  return NextResponse.json(posts)
}