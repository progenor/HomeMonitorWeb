import { NextRequest, NextResponse } from "next/server";
import SensorData from "@/models/SensorData";

export async function GET(req: NextRequest) {
  try {
    const data = await SensorData.findAll({
      order: [["TAKEN_DATETIME", "DESC"]],
      limit: 20,
    });
    return NextResponse.json(data.map((item) => item.get({ plain: true })));
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
