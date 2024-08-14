import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {

    const client = new PrismaClient()

    const request = await req.json()

    const i = parseInt(request.i) ?? null

    if (i) {
        const resp = await client.posts.delete({where: {id: i}})

        return new Response(JSON.stringify({status: true}),
        { headers: { "Content-Type": "application/json" } }
      );
    } else {
        return new Response(JSON.stringify({status: false}),
        { headers: { "Content-Type": "application/json" } }
      );
    }
 
};
