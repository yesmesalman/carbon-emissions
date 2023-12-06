-- CreateTable
CREATE TABLE `pin_benefits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pin_id` INTEGER NOT NULL,
    `section_name` VARCHAR(191) NOT NULL,
    `development_goal_id` INTEGER NOT NULL,
    `development_goal_target_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pin_benefit_indicators` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pin_benefit_id` INTEGER NOT NULL,
    `indicator_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
