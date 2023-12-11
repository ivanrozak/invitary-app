import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// register user
export async function POST(req: Request) {
  const body = await req.json();
  const { username, email, password } = body;

  if (!username || !email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    return new NextResponse("User already registered", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { email } = body;

  if (!email) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  let user = null;

  if (exist) {
    user = await prisma.user.delete({
      where: {
        email,
      },
    });
  } else {
    return new NextResponse("User Not Found", { status: 404 });
  }

  return NextResponse.json(user);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  let user = null;
  if (email) {
    user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } else {
    user = await prisma.user.findMany();
  }
  return NextResponse.json(user);
}
