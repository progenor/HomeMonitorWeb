import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";
import Device from "@/models/Device";

class AmIAtHome extends Model {
  declare ENTRY_ID: number;
  declare DEVICE_ID: number;
  declare AT_HOME: boolean;
  declare LAST_CHANGED_DATETIME: Date;
  declare WCHANGES: object;
}

AmIAtHome.init(
  {
    ENTRY_ID: {
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
    AT_HOME: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    LAST_CHANGED_DATETIME: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    WCHANGES: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    tableName: "AMIATHOME",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default AmIAtHome;
