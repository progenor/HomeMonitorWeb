import React from "react";
import CheckCard from "./CheckCard";

type Props = {};

const ControlPanel = async (props: Props) => {
  return (
    <div className="p-2 flex flex-col">
      <h1 className="font-bold text-2xl">Am I at Home?</h1>
      <div className="flex flex-wrap space-x-2">
        <CheckCard />
      </div>
    </div>
  );
};

export default ControlPanel;
