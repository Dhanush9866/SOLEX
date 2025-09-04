const mongoose = require("mongoose");

const TrainingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, default: "Beginner" },
    price: { type: String, default: "$0" },
    image: { type: String, default: "" },
    status: { type: String, enum: ["Active", "Draft", "New"], default: "Active" },
    studentsCount: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    weeks: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Training", TrainingSchema);


