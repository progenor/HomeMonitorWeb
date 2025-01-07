"use client";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, { method: "GET" }).then((res) => res.json());

const CheckCard = () => {
  const { data, error, mutate } = useSWR("/api/am-i-at-home", fetcher);

  const router = useRouter();

  const handleClick = async () => {
    if (data) {
      const updatedState = !data.AT_HOME;
      const response = await fetch("/api/update-state", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          DEVICE_ID: data.DEVICE_ID,
          AT_HOME: updatedState,
        }),
      });

      if (response.ok) {
        const updatedData = await response.json();
        mutate(updatedData, false); // Update local data without revalidation
      } else {
        console.error("Failed to update state");
      }
    }
  };

  if (error) {
    return (
      <Button size={"card"} variant={"ghost"}>
        Error
      </Button>
    );
  }

  if (!data) {
    return (
      <Button size={"card"} variant={"ghost"}>
        Loading...
      </Button>
    );
  }

  return (
    <Button
      size={"card"}
      className={cn(data?.AT_HOME ? "bg-green-500" : "bg-red-500")}
      onClick={handleClick}
    >
      {new Date(data?.LAST_CHANGED_DATETIME).toDateString()}
      <br />
      {new Date(data?.LAST_CHANGED_DATETIME).toLocaleTimeString()}
    </Button>
  );
};

export default CheckCard;
