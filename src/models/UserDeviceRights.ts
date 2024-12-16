import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";
import User from "@/models/User";
import Device from "@/models/Device";

class UserDeviceRights extends Model {
  declare RIGHT_ID: number;
  declare USER_ID: number;
  declare DEVICE_ID: number;
  declare PERMISSIONS: string;
}

UserDeviceRights.init(
  {
    RIGHT_ID: {
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
    DEVICE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Device,
        key: "DEVICE_ID",
      },
    },
    PERMISSIONS: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    tableName: "USERDEVICERIGHTS",
    timestamps: false,
    sequelize: sequelize,
    indexes: [
      {
        unique: true,
        fields: ["USER_ID", "DEVICE_ID"],
      },
    ],
  }
);

export default UserDeviceRights;
