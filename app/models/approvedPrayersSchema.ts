import mongoose from "mongoose";

const PrayerSchema = new mongoose.Schema(
  {
    prayer: { type: String, required: true },
    user_name: { type: String },
    church: { type: String },
    churchID: { type: String },
    isNotAnonymous: { type: Boolean },
    email: { type: String },
    phoneNumber: { type: String },
  },
  { timestamps: true }
);

export const ApprovedPrayers =
  mongoose.models.Approved_prayers ||
  mongoose.model("Approved_prayers", PrayerSchema);

export const Follow_up_prayers =
  mongoose.models.Follow_up_prayers ||
  mongoose.model("Follow_up_prayers", PrayerSchema);
export const Declined_prayers =
  mongoose.models.Declined_prayers ||
  mongoose.model("Declined_prayers", PrayerSchema);
