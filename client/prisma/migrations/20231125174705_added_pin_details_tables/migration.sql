-- CreateTable
CREATE TABLE `pin_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pin_id` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `innovation` TEXT NOT NULL,
    `funding_status` TEXT NOT NULL,
    `assumptions` TEXT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `organization` TEXT NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,
    `description_of_organization` TEXT NOT NULL,
    `experience_with_carbon_markets` TEXT NOT NULL,
    `experience_with_this_project_type` TEXT NOT NULL,
    `developer_name` VARCHAR(191) NOT NULL,
    `developer_organization` VARCHAR(191) NOT NULL,
    `developer_address` VARCHAR(191) NOT NULL,
    `developer_phone` VARCHAR(191) NOT NULL,
    `developer_email` VARCHAR(191) NOT NULL,
    `developer_website` VARCHAR(191) NOT NULL,
    `developer_description_of_organization` TEXT NOT NULL,
    `developer_experience_with_carbon_markets` TEXT NOT NULL,
    `developer_experience_with_this_project_type` TEXT NOT NULL,
    `current_status_of_project` TEXT NOT NULL,
    `project_start_date` VARCHAR(191) NOT NULL,
    `year_offset_delivery` VARCHAR(191) NOT NULL,
    `project_end_date` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pin_detail_source_of_finances` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pin_detail_id` INTEGER NOT NULL,
    `source_of_finance_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pin_detail_risks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pin_detail_id` INTEGER NOT NULL,
    `risk_type_id` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `mitigation` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
