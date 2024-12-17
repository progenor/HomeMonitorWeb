import React from "react";
import User from "@/models/User";
import sequelize from "@/db_connection";
import { Sequelize } from "sequelize";
type Props = {};

async function getData() {
  const users = await User.findAll();
  // console.log(users);
  return { users };
}

const page = async (props: Props) => {
  const { users } = await getData();
  // sequelize
  //   .query("SELECT * FROM USERS", {
  //     raw: true,
  //     logging: console.log,
  //   })
  //   .then((results) => console.log(results))
  //   .catch((err) => console.error(err));
  return (
    <div>
      <h1>Sziaaaa</h1>
      {users.map((user) => (
        <div key={user.USER_ID}>
          <p>{user.USER_NAME}</p>
          <p>{user.EMAIL}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
