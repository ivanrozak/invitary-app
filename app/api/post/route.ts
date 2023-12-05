import { NextResponse } from "next/server";
import { allPost, createPost } from "@/prisma/post";

export async function POST(req: Request) {
  const body = await req.json();
  const { title } = body;

  if (!title) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const post = await allPost();

  return NextResponse.json(post);
}
