import { NextRequest, NextResponse } from "next/server";
import AmIAtHome from "@/models/AmIAtHome";

export async function POST(req: NextRequest) {
  try {
    const { DEVICE_ID, AT_HOME } = await req.json();
    const result = await AmIAtHome.findOne({ where: { DEVICE_ID } });

    if (result) {
      result.AT_HOME = AT_HOME;
      result.LAST_CHANGED_DATETIME = new Date();
      await result.save();
      return NextResponse.json(result.get({ plain: true }));
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
