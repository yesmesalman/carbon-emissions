-- CreateTable
CREATE TABLE `project_registrations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_id` INTEGER NOT NULL,
    `start_year` VARCHAR(191) NOT NULL,
    `end_year` VARCHAR(191) NOT NULL,
    `carbon_amount` INTEGER NOT NULL,
    `registration_date` VARCHAR(191) NOT NULL,
    `proof_of_registration` VARCHAR(191) NOT NULL,
    `registry_url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
