import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";
import Component from "@/models/Component";

class ComponentsPriceTag extends Model {
  declare PRICE_TAG_ID: number;
  declare COMPONENT_ID: number;
  declare COMPONENT_NUMBER: string;
  declare PRICE_SINGLE: number;
}

ComponentsPriceTag.init(
  {
    PRICE_TAG_ID: {
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
    COMPONENT_NUMBER: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    PRICE_SINGLE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "COMPONENTSPRICETAG",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default ComponentsPriceTag;
