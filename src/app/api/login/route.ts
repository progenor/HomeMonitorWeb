import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcrypt";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const user = await User.findOne({ where: { EMAIL: email } });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // const isPasswordValid = await bcrypt.compare(password, user.PASSWORD_HASH);
    const isPasswordValid = password === user.PASSWORD_HASH;

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Add your session handling logic here (e.g., JWT, cookies, etc.)

    return NextResponse.json({
      message: "Login successful",
      user: user.get({ plain: true }),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
