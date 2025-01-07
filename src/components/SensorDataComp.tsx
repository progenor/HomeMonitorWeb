"use client";
import React from "react";
import useSWR from "swr";
import DataTableSensorData from "@/components/DataTableSensorData";
import { useAuth } from "@/context/AuthContext";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SensorDataComp = () => {
  //FIXME: for some reason the user_id is not saved in the context/ cant get it for some reason
  // const { userId } = useAuth();
  // if (!userId) {
  //   console.log(userId);

  //   return <div>Not logged in</div>;
  // }
  const userId = 2;
  const { data, error } = useSWR(
    userId ? `/api/sensor-data?user_id=${userId}` : null,
    fetcher
  );

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
