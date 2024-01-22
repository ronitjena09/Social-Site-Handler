import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../../database/dbConnection";
import User from "../../../../../models/userModel";
import bcryptjs from "bcryptjs";

connect();
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { companyName, url, email, password, phone } = body;
    console.log(companyName, url, email, password, phone);
    //const data = { companyName, url, email, password, phone };
    //console.log(data);
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser)
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );

    const salt = await bcryptjs.genSalt(10);
    console.log(salt);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log(hashedPassword);
    const newuser = await User.create({
      companyName,
      url,
      email,
      password: hashedPassword,
      phone,
    });
    console.log("newuser", newuser);
    const x = await newuser.save();
    console.log(x);
    return NextResponse.json(
      { message: "user registered successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
