import { Model, DataTypes } from "sequelize";
import sequelize from "@/db_connection";

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare created_at: Date;
  declare updated_at: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at",
    sequelize: sequelize,
    modelName: "User",
  }
);

export default User;
