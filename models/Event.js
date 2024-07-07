const mongoose = require("mongoose");
const EventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      requried: [true, "Please provide a title"],
    },
    description: {
      type: String,
    },
    eventDate: {
      type: Date,
      required: [true, "Please provide a eventDate"],
    },
    images: {
      type: { type: String },
    },
  },
  { timestamps: true }
);

module.exports=mongoose.model("Event",EventSchema)