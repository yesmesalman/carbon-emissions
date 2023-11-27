-- CreateTable
CREATE TABLE `pin_emissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pin_id` INTEGER NOT NULL,
    `project_scale` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `calculation_method` TEXT NOT NULL,
    `baseline_scenario` TEXT NOT NULL,
    `additionality` TEXT NOT NULL,
    `monitoring` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
