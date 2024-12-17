import React from "react";
import DataTableSensorData from "@/components/dataTableSensorData";
import SensorData from "@/models/SensorData";

type Props = {};

async function getData() {
  const data = await SensorData.findAll({
    order: [["TAKEN_DATETIME", "DESC"]],
    limit: 20,
  });
  // console.log(data);

  return data.map((item) => item.get({ plain: true }));
}

const SensorDataComp = async (props: Props) => {
  const data = await getData();

  return (
    <div className="p-2 flex flex-col">
      <h1 className="font-bold text-2xl">Sensor Data</h1>
      <DataTableSensorData data={data} />
    </div>
  );
};

export default SensorDataComp;
