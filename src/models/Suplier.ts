import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";
import Component from "@/models/Component";

class Supplier extends Model {
  declare SUPPLIER_ID: number;
  declare COMPONENT_ID: number;
  declare COMPANY_NAME: string;
  declare COMPANY_LINK: string;
  declare EMAIL: string;
}

Supplier.init(
  {
    SUPPLIER_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    COMPONENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Component,
        key: "COMPONENT_ID",
      },
    },
    COMPANY_NAME: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    COMPANY_LINK: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    tableName: "SUPPLIER",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default Supplier;
