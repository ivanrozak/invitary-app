import { NextResponse } from "next/server";
import { allPost, createPost } from "@/prisma/post";

export async function POST(req: Request) {
  const body = await req.json();
  const { title } = body;

  if (!title) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  // const exist = await prisma.user.findUnique({
  //   where: {
  //     title,
  //   },
  // });

  // if (exist) {
  //   throw new Error("Email already exists");
  // } else {
  //   console.log("not exist");
  // }

  // const post = await createPost({ title });
  const post = await allPost();

  return NextResponse.json(post);
}

export async function GET(req: Request) {
  // const
}
