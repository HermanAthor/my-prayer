import { ApprovedPrayers } from "@/app/models/approvedPrayersSchema";
import { connectDb } from "./../../db/connectDb";
import { NextRequest, NextResponse } from "next/server";
import { Prayers } from "@/app/models/PrayerSchema";

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
    _id,
  } = body;

  try {
    await connectDb();
    const newApprovedPrayer = await new ApprovedPrayers({
      prayer,
      user_name,
      church,
      churchID,
      isNotAnonymous,
      email,
      phoneNumber,
    });
    await newApprovedPrayer.save(); // Save the prayer to ApprovedPrayer collection
    await Prayers.findByIdAndDelete(_id); //Delete the prayer from the database
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
