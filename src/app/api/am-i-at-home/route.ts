import { NextRequest, NextResponse } from "next/server";
import AmIAtHome from "@/models/AmIAtHome";

export async function GET(req: NextRequest) {
  try {
    const result = await AmIAtHome.findOne({ where: { DEVICE_ID: 1 } });
    return NextResponse.json(result ? result.get({ plain: true }) : null);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
