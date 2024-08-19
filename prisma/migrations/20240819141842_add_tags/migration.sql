/*
  Warnings:

  - Added the required column `tags` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "tags" VARCHAR NOT NULL;
