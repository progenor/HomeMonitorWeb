"use client";
import React from "react";
import useSWR from "swr";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Device = {
  DEVICE_ID: number;
  DEVICE_NAME: string;
  CURRENT_STATE: boolean;
};

const Devices = () => {
  //FIXME: for some reason the user_id is not saved in the context/ cant get it for some reason
  //   const { userId } = useAuth();
  const userId = 2;
  const { data, error } = useSWR(
    userId ? `/api/devices?user_id=${userId}` : null,
    fetcher
  );

  if (error) {
    return <div>Error loading devices</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((device: Device) => (
        <Card
          key={device.DEVICE_ID}
          className={device.CURRENT_STATE ? "bg-green-400" : "bg-red-400"}
        >
          <CardHeader>
            <CardTitle>{device.DEVICE_NAME}</CardTitle>
            <CardDescription className="text-black">
              {device.CURRENT_STATE ? "Active" : "Inactive"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Device ID: {device.DEVICE_ID}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Devices;
