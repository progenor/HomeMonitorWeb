import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";

class Component extends Model {
  declare COMPONENT_ID: number;
  declare COMPONENT_NAME: string;
  declare COMPONENT_NUMBER: string;
  declare DESCRIPTION: string;
  declare NOTES: string;
}

Component.init(
  {
    COMPONENT_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    COMPONENT_NAME: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    COMPONENT_NUMBER: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    DESCRIPTION: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    NOTES: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    tableName: "COMPONENT",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default Component;
