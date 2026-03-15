/*
  Warnings:

  - You are about to alter the column `weight_value` on the `dishes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.
  - You are about to alter the column `price` on the `dishes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.
  - Made the column `image_url` on table `tags` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "dishes" ALTER COLUMN "weight_value" SET DATA TYPE INTEGER,
ALTER COLUMN "price" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "tags" ALTER COLUMN "image_url" SET NOT NULL;
