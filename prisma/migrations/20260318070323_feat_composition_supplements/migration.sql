/*
  Warnings:

  - The `weight_unit` column on the `dishes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "WeightUnit" AS ENUM ('KG', 'G', 'PCS', 'ML', 'L');

-- AlterTable
ALTER TABLE "dishes" ADD COLUMN     "composition" TEXT,
DROP COLUMN "weight_unit",
ADD COLUMN     "weight_unit" "WeightUnit";

-- CreateTable
CREATE TABLE "supplements" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "dish_id" INTEGER NOT NULL,

    CONSTRAINT "supplements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "supplements_dish_id_idx" ON "supplements"("dish_id");

-- AddForeignKey
ALTER TABLE "supplements" ADD CONSTRAINT "supplements_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "dishes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
