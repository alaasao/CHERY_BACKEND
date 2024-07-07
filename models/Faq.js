const mongoose = require("mongoose");
const FaqSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please provide a question"],
    },
    answer: {
      type: String,
      required: [true, "Please provide an answer"],
    },
  },
  { timestamps: true }
);
module.exports=mongoose.model("Faq",FaqSchema)