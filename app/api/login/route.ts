import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

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

  const SECRET = process.env.JWT_SECRET || "DEV";

  const token = sign(
    { accountId: user.id, userEmail: user.email },
    SECRET,
    { expiresIn: "1h" } // Adjust expiration as needed
  );

  const result = await prisma.user.update({
    where: { id: user.id },
    data: { token },
  });

  return NextResponse.json(result, { status: 200 });
}
