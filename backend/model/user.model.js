import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    danDate: {
      type: Date,
      default: Date.now,
    },
    paymentPhoto: {
      type: String,
      resumeOriginalName: { type: String },
      default:""
      // required: true,
    },
   
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
