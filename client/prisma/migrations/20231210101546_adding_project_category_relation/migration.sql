-- AddForeignKey
ALTER TABLE `project_overview_categories` ADD CONSTRAINT `project_overview_categories_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
