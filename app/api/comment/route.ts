import { prisma } from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('id')
  if (!userId) {
    return new NextResponse('User Not Found', { status: 404 })
  }
  const comment = await prisma.comment.findMany({
    where: {
      userId: userId || '',
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return NextResponse.json(comment)
}

export async function POST(req: Request) {
  const body = await req.json()
  const { name, content, confirmation, totalGuest, userId } = body

  if (!userId || !name || !content || !confirmation || !totalGuest) {
    return new NextResponse('Missing Fields', { status: 400 })
  }

  const exist = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!exist) {
    return new NextResponse('User Not Found', { status: 404 })
  }

  const comment = await prisma.comment.create({
    data: {
      userId,
      name,
      content,
      confirmation,
      totalGuest,
    },
  })

  if (!comment) {
    return new NextResponse('Bad Request', { status: 400 })
  }

  return NextResponse.json(comment, { status: 200 })
}

export async function DELETE(req: Request) {
  const body = await req.json()
  const { id } = body

  if (!id) {
    return new NextResponse('Missing Fields', { status: 400 })
  }

  const exist = await prisma.comment.findUnique({
    where: {
      id,
    },
  })

  let comment = null

  if (exist) {
    comment = await prisma.comment.delete({
      where: {
        id,
      },
    })
  } else {
    return new NextResponse('User Not Found', { status: 404 })
  }

  return NextResponse.json(null, { status: 200 })
}
