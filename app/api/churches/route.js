import { NextResponse } from "next/server";
import { connectDb } from "@/app/db/connectDb";
import { Churches } from "@/app/models/churchSchema";

export async function POST(req) {
  const {
    church_name,
    churchId,
    email_address,
    phoneNumber,
    address,
    website,
  } = await req.json();
  try {
    await connectDb();
    const churchList = await new Churches({
      church_name,
      churchId,
      email_address,
      phoneNumber,
      address,
      website,
    });
    await churchList.save();

    return NextResponse.json({
      status: 200,
      message:
        "Church created successfully! you can accept prayers for your church",
      results: null,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
      results: null,
      success: false,
    });
  }
}

export async function GET() {
  try {
    await connectDb();
    const churchesList = await Churches.find({});

    return NextResponse.json({
      status: 200,
      message: "Churches fetched successfully",
      results: churchesList,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
      results: null,
      success: false,
    });
  }
}
