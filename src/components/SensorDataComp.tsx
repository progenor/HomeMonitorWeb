"use client";
import React from "react";
import useSWR from "swr";
import DataTableSensorData from "@/components/DataTableSensorData";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SensorDataComp = () => {
  const { data, error } = useSWR("/api/sensor-data", fetcher);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2 flex flex-col">
      <h1 className="font-bold text-2xl">Sensor Data</h1>
      <DataTableSensorData data={data} />
    </div>
  );
};

export default SensorDataComp;
