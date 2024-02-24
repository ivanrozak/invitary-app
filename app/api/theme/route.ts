import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prismadb'

export async function POST(req: Request) {
  const body = await req.json()
  const { id, userId, name, isTemplate, menus, couple, event } = body

  if (!name) {
    return new NextResponse('Missing Fields', { status: 400 })
  }

  let theme

  if (id) {
    theme = await prisma.theme.update({
      where: {
        id,
      },
      data: {
        userId,
        name,
        isTemplate,
        menus,
        couple,
        event,
      },
    })
  } else {
    theme = await prisma.theme.create({
      data: {
        userId,
        name,
        isTemplate,
        menus,
        couple,
        event,
      },
    })
  }

  return NextResponse.json(theme)
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const themeId = searchParams.get('themeId')
  if (themeId) {
    const theme = await prisma.theme.findUnique({
      where: {
        id: themeId,
      },
    })
    return NextResponse.json(theme)
  }
  const theme = await prisma.theme.findMany()
  return NextResponse.json(theme)
}
