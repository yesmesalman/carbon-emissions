/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `createdAt`,
    ADD COLUMN `datetime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
