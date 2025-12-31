import mongoose from "mongoose";

const pujaSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Puja = mongoose.model("Puja", pujaSchema);
