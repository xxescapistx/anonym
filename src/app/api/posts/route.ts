import { PrismaClient } from "@prisma/client";

export const revalidate = 0;

export const GET = async () => {

    const client = new PrismaClient()

    const posts = await client.posts.findMany();

  return new Response(
    JSON.stringify({
      posts: posts,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
