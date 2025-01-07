import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";

class User extends Model {
  declare USER_ID: number;
  declare USER_NAME: string;
  declare EMAIL: string;
  declare PASSWORD_HASH: string;
  declare CREATE_DATE: Date;
}

User.init(
  {
    USER_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    USER_NAME: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    PASSWORD_HASH: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    CREATE_DATE: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    tableName: "USERS",
    timestamps: false,
    sequelize: sequelize,
  }
);

export default User;
