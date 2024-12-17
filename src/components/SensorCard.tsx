import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export type sensorStateButton = {
  sensorId: number;
  sensorName: string;
  currentState: boolean;
};

type Props = {
  sensor: sensorStateButton;
};

const SensorCard = ({ sensor }: Props) => {
  return (
    <Button
      size={"card"}
      className={cn(sensor.currentState ? "bg-green-500" : "bg-red-500")}
    >
      {sensor.sensorName}
    </Button>
  );
};

export default SensorCard;
