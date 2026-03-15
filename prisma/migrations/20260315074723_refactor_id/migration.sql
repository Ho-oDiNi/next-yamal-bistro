/*
  Warnings:

  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `parent_id` on the `categories` table. All the data in the column will be lost.
  - The `id` column on the `categories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `dishes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `dishes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `tags` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `_DishToTag` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `dishes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `dishes` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category_id` on the `dishes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."_DishToTag" DROP CONSTRAINT "_DishToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_DishToTag" DROP CONSTRAINT "_DishToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."categories" DROP CONSTRAINT "categories_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."dishes" DROP CONSTRAINT "dishes_category_id_fkey";

-- DropIndex
DROP INDEX "public"."categories_parent_id_idx";

-- DropIndex
DROP INDEX "public"."dishes_category_id_idx";

-- AlterTable
ALTER TABLE "categories" DROP CONSTRAINT "categories_pkey",
DROP COLUMN "parent_id",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "dishes" DROP CONSTRAINT "dishes_pkey",
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "tag_id" INTEGER,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD CONSTRAINT "dishes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tags" DROP CONSTRAINT "tags_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "image_url" DROP NOT NULL,
ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "public"."_DishToTag";

-- CreateIndex
CREATE UNIQUE INDEX "dishes_slug_key" ON "dishes"("slug");

-- CreateIndex
CREATE INDEX "dishes_category_id_tag_id_idx" ON "dishes"("category_id", "tag_id");

-- AddForeignKey
ALTER TABLE "dishes" ADD CONSTRAINT "dishes_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dishes" ADD CONSTRAINT "dishes_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;
