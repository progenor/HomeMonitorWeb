import { NextRequest, NextResponse } from "next/server";
import UserDeviceRights from "@/models/UserDeviceRights";

export async function POST(req: NextRequest) {
  try {
    const { deviceId } = await req.json();

    // Mark the device as deleted
    const device = await UserDeviceRights.findOne({
      where: { DEVICE_ID: deviceId },
    });
    if (device) {
      await device.destroy(); // Assuming you have a DELETED column in your Device table
      await device.save();
      return NextResponse.json({
        message: "Device  deleted successfully",
      });
    } else {
      return NextResponse.json({ error: "Device not found" }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
