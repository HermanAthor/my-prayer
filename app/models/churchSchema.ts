import { Schema } from "mongoose";

const churchSchema = new Schema({
  name: String,
  id: String,
  email: String,
  phone: String,
  address: String,
  website: String,
  prayers: [{ type: Schema.Types.ObjectId, ref: "Prayers" }],
});
