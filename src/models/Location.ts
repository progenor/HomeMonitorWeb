import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";
import Device from "@/models/Device";

class Location extends Model {
  declare LOCATION_ID: number;
  declare DEVICE_ID: number;
  declare GENERAL_LOCATION: string;
  declare HOME_LOCATION: string;
}

Location.init(
  {
    LOCATION_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    GENERAL_LOCATION: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    HOME_LOCATION: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "LOCATION",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default Location;
