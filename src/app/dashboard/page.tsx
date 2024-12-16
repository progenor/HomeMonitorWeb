import DataTableSensorData from "@/components/dataTableSensorData";
import React from "react";
import SensorData from "@/models/SensorData";

type Props = {};

async function getData() {
  const data = await SensorData.findAll();
  console.log(data);

  const formattedData = data.map((item) => ({
    ...item,
    TAKEN_DATETIME: item.TAKEN_DATETIME.toISOString(),
  }));

  return { data: formattedData };
}

const page = async (props: Props) => {
  const { data } = await getData();
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <DataTableSensorData data={data} />
    </div>
  );
};

export default page;
