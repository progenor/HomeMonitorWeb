import React from "react";
import SensorDataComp from "@/components/SensorDataComp";
import ControlPanel from "@/components/ControlPanel";
import Devices from "@/components/Devices";

type Props = {};

const page = async (props: Props) => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <Devices />
      <ControlPanel />
      <SensorDataComp />
    </div>
  );
};

export default page;
