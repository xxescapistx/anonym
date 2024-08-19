import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {

    const client = new PrismaClient()

    const request = await req.json()
    const u = request.u ?? null
    const m = request.m ?? null
    const t = request.t ?? null

    if (u && m) {
        const resp = await client.posts.create({data: {user: u, message: m, tags: t}})

        return new Response(JSON.stringify({status: true}),
        { headers: { "Content-Type": "application/json" } }
      );
    } else {
        return new Response(JSON.stringify({status: false}),
        { headers: { "Content-Type": "application/json" } }
      );
    }

};
