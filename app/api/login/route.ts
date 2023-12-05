import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";

// login user
export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return new NextResponse("Invalid email or password", { status: 401 });
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    return new NextResponse("Invalid email or password", { status: 401 });
  }

  return NextResponse.json(user, { status: 200 });
}
