import mongoose, { Mongoose } from "mongoose";

const placeSchema = mongoose.Schema({
  owner:{type:mongoose.Schema.Types.ObjectId ,  ref:'User'},
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
});

export const PlaceModel = mongoose.model("place", placeSchema);
