/*
  Warnings:

  - Added the required column `model` to the `medias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model_id` to the `medias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `medias` ADD COLUMN `model` VARCHAR(191) NOT NULL,
    ADD COLUMN `model_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `profile_picture` VARCHAR(191) NOT NULL DEFAULT '';
