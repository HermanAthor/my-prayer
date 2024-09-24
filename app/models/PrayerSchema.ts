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

export const Prayers =
  mongoose.models.Prayers || mongoose.model("Prayers", PrayerSchema);
