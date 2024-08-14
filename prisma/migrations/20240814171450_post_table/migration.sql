-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "user" VARCHAR(40) NOT NULL,
    "message" VARCHAR NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
