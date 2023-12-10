-- CreateTable
CREATE TABLE `project_pdds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_id` INTEGER NOT NULL,
    `standard_id` INTEGER NOT NULL,
    `methodology_id` INTEGER NOT NULL,
    `quarter` VARCHAR(191) NOT NULL,
    `design_document` VARCHAR(191) NOT NULL,
    `validation` VARCHAR(191) NOT NULL,
    `validation_statement` VARCHAR(191) NOT NULL,
    `validation_date` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
