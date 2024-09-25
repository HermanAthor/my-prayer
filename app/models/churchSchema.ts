import mongoose, { Schema } from "mongoose";

const churchSchema = new Schema(
  {
    church_name: { type: String },
    churchId: { type: String },
    email_address: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    website: { type: String },
  },
  { timestamps: true }
);

export const Churches =
  mongoose.models.Churches || mongoose.model("Churches", churchSchema);
