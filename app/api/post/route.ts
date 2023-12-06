import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const { title, id, description } = body;

  if (!title) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  let post;

  if (id) {
    post = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
  } else {
    post = await prisma.post.create({
      data: {
        title,
        description,
      },
    });
  }

  return NextResponse.json(post);
}
