import { NextRequest, NextResponse } from "next/server";
import Device from "@/models/Device";
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

    // Fetch devices for the user's device IDs
    const devices = await Device.findAll({
      where: { DEVICE_ID: deviceIds },
    });

    return NextResponse.json(devices.map((item) => item.get({ plain: true })));
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
