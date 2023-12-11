import { NextResponse } from "next/server";
import verifyToken from "@/lib/verifyToken";
import { prisma } from "@/lib/prismadb";

interface User {
  accountId: string;
  userEmail: string;
}

export async function GET(req: Request) {
  const user = (await verifyToken(req)) as User;

  if (!user) {
    return NextResponse.json("Unauthorized User!", { status: 401 });
  }

  const result = await prisma.user.findUnique({
    where: {
      id: user.accountId,
    },
    select: {
      username: true,
      email: true,
      token: true,
    },
  });
  if (!result) {
    return NextResponse.json("Unauthorized User!", { status: 401 });
  }

  return NextResponse.json(result);
}
