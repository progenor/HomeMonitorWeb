import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";

class Device extends Model {
  declare DEVICE_ID: number;
  declare DEVICE_NAME: string;
  declare CURRENT_STATE: boolean;
  declare CHANGED_STATES: object;
}

Device.init(
  {
    DEVICE_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    DEVICE_NAME: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    CURRENT_STATE: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    CHANGED_STATES: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        isValidState(value: object) {
          const state = value["state"];
          const dateTime = value["dateTime"];
          if (!["on", "off"].includes(state) || isNaN(Date.parse(dateTime))) {
            throw new Error("Invalid CHANGED_STATES value");
          }
        },
      },
    },
  },
  {
    tableName: "DEVICE",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default Device;
