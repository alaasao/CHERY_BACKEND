const mongoose = require("mongoose");
const PieceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "you must provide a name for the piece"],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "you must provide a price"],
    },
    quantity: {
      type: Number,
      default: 1,
    },
    images: {
        type: [{ type: String }],
        
    },
  },
  {
    timestamps: true,
  }
);
module.exports=mongoose.model("Piece",PieceSchema)