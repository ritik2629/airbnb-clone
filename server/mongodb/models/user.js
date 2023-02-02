import mongoose from "mongoose";

const user = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const userSchema = mongoose.model("user", user);
