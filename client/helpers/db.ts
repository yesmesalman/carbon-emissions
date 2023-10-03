import { Sequelize } from "sequelize";

const MYSQL_DATABASE: string = process.env.MYSQL_DATABASE ?? "";
const MYSQL_USER: string = process.env.MYSQL_USER ?? "";
const MYSQL_PASSWORD: string = process.env.MYSQL_PASSWORD ?? "";
const MYSQL_HOST: string = process.env.MYSQL_HOST ?? "";

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

export default sequelize;