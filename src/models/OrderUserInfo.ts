import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";
import User from "@/models/User";

class OrderUserInfo extends Model {
  declare ORDER_USER_INFO_ID: number;
  declare USER_ID: number;
  declare LOCATION: string;
  declare FULL_NAME: string;
  declare PHONE_NUMBER: string;
  declare EMAIL: string;
}

OrderUserInfo.init(
  {
    ORDER_USER_INFO_ID: {
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
    LOCATION: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    FULL_NAME: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    PHONE_NUMBER: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "ORDERUSERINFO",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default OrderUserInfo;
