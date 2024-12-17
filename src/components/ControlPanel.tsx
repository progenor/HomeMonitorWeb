import React from "react";
import SensorCard from "./SensorCard";

type Props = {};

const data = [
  { sensorId: 1, sensorName: "Sensor 1", currentState: true },
  { sensorId: 2, sensorName: "Sensor 2", currentState: false },
  { sensorId: 3, sensorName: "Sensor 3", currentState: true },
  { sensorId: 4, sensorName: "Sensor 4", currentState: false },
];

const ControlPanel = (props: Props) => {
  return (
    <div className="p-2 flex flex-col">
      <h1 className="font-bold text-2xl">Control Panel</h1>
      <div className="flex flex-wrap space-x-2">
        {data.map((sensor) => (
          <SensorCard key={sensor.sensorId} sensor={sensor} />
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
