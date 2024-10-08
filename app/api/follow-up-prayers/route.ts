import { Follow_up_prayers } from "@/app/models/approvedPrayersSchema";
import { connectDb } from "./../../db/connectDb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const {
    prayer,
    user_name,
    church,
    churchID,
    isNotAnonymous,
    email,
    phoneNumber,
  } = body;

  try {
    await connectDb();
    const newApprovedPrayer = await new Follow_up_prayers({
      prayer,
      user_name,
      church,
      churchID,
      isNotAnonymous,
      email,
      phoneNumber,
    });
    await newApprovedPrayer.save();
    return NextResponse.json({
      status: 200,
      body: JSON.stringify({ message: "Prayer submitted successfully" }),
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      body: JSON.stringify({ error: error?.message }),
    });
  }
};
