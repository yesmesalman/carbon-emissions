-- AddForeignKey
ALTER TABLE `project_overview_categories` ADD CONSTRAINT `project_overview_categories_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `project_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
