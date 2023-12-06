-- CreateTable
CREATE TABLE `pin_viabilities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pin_id` INTEGER NOT NULL,
    `leakage` TEXT NOT NULL,
    `permanence` TEXT NOT NULL,
    `quantifiable` TEXT NOT NULL,
    `data_collection_method` TEXT NOT NULL,
    `ownership` VARCHAR(191) NOT NULL,
    `demonstration_ownership` VARCHAR(191) NOT NULL,
    `recognition` VARCHAR(191) NOT NULL,
    `baseline_scenario` TEXT NOT NULL,
    `baseline_scenario_result` TEXT NOT NULL,
    `additionality` TEXT NOT NULL,
    `financial` TEXT NOT NULL,
    `technological` TEXT NOT NULL,
    `social` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pin_viability_seasurements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pin_viability_id` INTEGER NOT NULL,
    `key_measurement_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
