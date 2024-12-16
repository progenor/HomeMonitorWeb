import { Sequelize } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";
import { options } from "@/../../database/config/config.mjs";

const dbOptions = <SequelizeOptions>options;
dbOptions.dialectModule = require("oracledb");
const SequelizeInstance = new Sequelize(dbOptions);

export default SequelizeInstance;
