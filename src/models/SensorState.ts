import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";
import Device from "@/models/Device";

class SensorState extends Model {
  declare SENSOR_ID: number;
  declare SENSOR_NAME: string;
  declare DEVICE_ID: number;
  declare COMPONENT_ID: number;
  declare CURRENT_STATE: boolean;
  declare CHANGED_STATE: object;
  declare CALIBRATE_OFFSET: number;
}

SensorState.init(
  {
    SENSOR_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    SENSOR_NAME: {
      type: DataTypes.STRING(30),
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
    COMPONENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CURRENT_STATE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    CHANGED_STATE: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        isValidState(value: object) {
          const state = value["state"];
          const dateTime = value["dateTime"];
          if (!["on", "off"].includes(state) || isNaN(Date.parse(dateTime))) {
            throw new Error("Invalid CHANGED_STATE value");
          }
        },
      },
    },
    CALIBRATE_OFFSET: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    tableName: "SENSORSTATE",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default SensorState;
