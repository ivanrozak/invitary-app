import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPost = async ({ title }: { title: string }) => {
  const post = await prisma.post.create({
    data: {
      title,
    },
  });
  return post;
};

export const allPost = async () => {
  const post = await prisma.post.findRaw();
  return post;
};
