import { NextRequest, NextResponse } from "next/server";
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

export async function GET(req) {
  const churchId = await req.nextUrl.searchParams.get("church");

  if (!churchId) {
    return NextResponse.json({
      status: 400,
      message: "Church ID is required",
      results: null,
      success: false,
    });
  }

  try {
    await connectDb();
    const prayersList = await Prayers.find({ church: churchId });
    console.log("PRAYERS: ", prayersList);

    return NextResponse.json({
      status: 200,
      message: "Prayers fetched successfully",
      results: prayersList,
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
