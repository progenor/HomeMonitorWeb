import { NextRequest, NextResponse } from "next/server";
import UserDeviceRights from "@/models/UserDeviceRights";

export async function POST(req: NextRequest) {
  try {
    const { userId, deviceId } = await req.json();

    // Add device rights for the user
    const newUserDeviceRight = await UserDeviceRights.create({
      USER_ID: userId,
      DEVICE_ID: deviceId,
      PERMISSIONS: "read", // Default permissions
    });

    return NextResponse.json({
      message: "UserDeviceRight added successfully",
      userDeviceRight: newUserDeviceRight.get({ plain: true }),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
