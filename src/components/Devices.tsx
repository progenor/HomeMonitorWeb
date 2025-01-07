"use client";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Device = {
  DEVICE_ID: number;
  DEVICE_NAME: string;
  CURRENT_STATE: boolean;
};

const Devices = () => {
  // const { userId } = useAuth();
  const userId = 2;
  const { data, error } = useSWR(
    userId ? `/api/devices?user_id=${userId}` : null,
    fetcher
  );

  const [newDeviceId, setNewDeviceId] = useState("");

  const handleAddDevice = async () => {
    if (!newDeviceId) return;

    const response = await fetch("/api/add-device", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, deviceId: newDeviceId }),
    });

    if (response.ok) {
      const newUserDeviceRight = await response.json();
      mutate(`/api/devices?user_id=${userId}`); // Revalidate the devices data
      setNewDeviceId(""); // Clear the input field
    } else {
      console.error("Failed to add user device right");
    }
  };

  const handleRemoveDevice = async (deviceId: number) => {
    const response = await fetch("/api/remove-device", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ deviceId }),
    });

    if (response.ok) {
      mutate(`/api/devices?user_id=${userId}`); // Revalidate the devices data
    } else {
      console.error("Failed to remove device");
    }
  };

  if (error) {
    return <div>Error loading devices</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <Button
                variant="destructive"
                onClick={() => handleRemoveDevice(device.DEVICE_ID)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Input
          placeholder="Existing Device ID"
          value={newDeviceId}
          onChange={(e) => setNewDeviceId(e.target.value)}
        />
        <Button onClick={handleAddDevice}>Add Device</Button>
      </div>
    </div>
  );
};

export default Devices;
