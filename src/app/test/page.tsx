import React from "react";
import User from "@/models/User";

type Props = {};

async function getData() {
  const users = await User.findAll();
  console.log(users);
  return { users };
}

const page = async (props: Props) => {
  const { users } = await getData();
  return (
    <div>
      <h1>Sziaaaa</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
