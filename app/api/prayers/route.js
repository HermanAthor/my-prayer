import { NextResponse } from "next/server";
import { connectDb } from "@/app/db/connectDb";
import { Prayers } from "@/app/models/PrayerSchema";

export async function POST(req) {
  const {
    churchID,
    prayer,
    church,
    isNotAnonymous,
    user_name,
    email,
    phoneNumber,
  } = await req.json();
  try {
    await connectDb();
    const prayersList = await new Prayers({
      churchID,
      prayer,
      church,
      isNotAnonymous,
      user_name,
      email,
      phoneNumber,
    });
    await prayersList.save();

    return NextResponse.json({
      status: 200,
      message: "Prayer request submitted successfully",
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
