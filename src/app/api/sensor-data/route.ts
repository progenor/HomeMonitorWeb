import { NextRequest, NextResponse } from "next/server";
import SensorData from "@/models/SensorData";
import UserDeviceRights from "@/models/UserDeviceRights";

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("user_id");
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Fetch device IDs associated with the user
    const userDevices = await UserDeviceRights.findAll({
      where: { USER_ID: userId },
      attributes: ["DEVICE_ID"],
    });

    const deviceIds = userDevices.map((device) => device.DEVICE_ID);

    // Fetch sensor data for the user's devices
    const sensorData = await SensorData.findAll({
      where: { SENSORDEVICE_ID: deviceIds },
      order: [["TAKEN_DATETIME", "DESC"]],
    });

    return NextResponse.json(
      sensorData.map((item) => item.get({ plain: true }))
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
