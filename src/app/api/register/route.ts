import { NextRequest, NextResponse } from "next/server";
// import bcrypt from 'bcrypt';
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const { email, username, password } = await req.json();
    // const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = password;
    const newUser = await User.create({
      EMAIL: email,
      USER_NAME: username,
      PASSWORD_HASH: hashedPassword,
    });

    return NextResponse.json({
      message: "User created successfully",
      user: newUser.get({ plain: true }),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
