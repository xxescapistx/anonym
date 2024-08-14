import { PrismaClient } from "@prisma/client";

export const GET = async () => {

    const client = new PrismaClient()

    const posts = await client.posts.findMany()

  return new Response(
    JSON.stringify({
      posts: posts,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
