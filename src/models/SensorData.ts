import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";
import Device from "@/models/Device";

class SensorData extends Model {
  declare SENSORDEVICE_ID: number;
  declare TAKEN_DATETIME: Date;
  declare TEMP: number;
  declare HUMIDITY: number;
  declare LIGHT: number;
  declare PIR: boolean;
  declare AIRQUALITY: number;
  declare DEVICE_ID: number;
}

SensorData.init(
  {
    SENSORDEVICE_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    TAKEN_DATETIME: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    TEMP: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    HUMIDITY: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    LIGHT: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    PIR: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    AIRQUALITY: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    DEVICE_ID: {
      type: DataTypes.INTEGER,
      references: {
        model: Device,
        key: "DEVICE_ID",
      },
      allowNull: false,
    },
  },
  {
    tableName: "SENSORDATA",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default SensorData;