-- AlterTable
ALTER TABLE "dishes" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tags" ALTER COLUMN "image_url" DROP NOT NULL;
