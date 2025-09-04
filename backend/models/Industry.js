const mongoose = require("mongoose");

const industrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "Building2",
    },
    color: {
      type: String,
      default: "#3B82F6",
    },
    image: {
      type: String,
      default: "",
    },
    benefits: [{
      type: String,
      trim: true,
    }],
    services: [{
      type: String,
      trim: true,
    }],
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Create index for better search performance
industrySchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("Industry", industrySchema);
