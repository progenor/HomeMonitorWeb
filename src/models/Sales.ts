import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";
import User from "@/models/User";
import Device from "@/models/Device";

class Sales extends Model {
  declare SALES_ID: number;
  declare USER_ID: number;
  declare ORDER_ID: number;
  declare COMPONENT_NUMBER: string;
  declare DELIVERED: boolean;
  declare DEVICE_ID: number;
  declare ORDER_PRICE: number;
}

Sales.init(
  {
    SALES_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "USER_ID",
      },
    },
    ORDER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    COMPONENT_NUMBER: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    DELIVERED: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    DEVICE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Device,
        key: "DEVICE_ID",
      },
    },
    ORDER_PRICE: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "SALES",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default Sales;
