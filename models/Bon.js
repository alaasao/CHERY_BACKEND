const mongoose = require("mongoose");
const { BadRequestError } = require("../errors");
const BonSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
    required: [true, "Please provide the client"],
  },
  car: {
    type: mongoose.Schema.ObjectId,
    ref: "Car",
  },
  piece: {
    type: mongoose.Schema.ObjectId,
    ref: "Piece",
  },
  contract: {
    type: String,
  },
  facture: {
    type: String,
  },
}, {
    timestamps:true
});


BonSchema.pre("save", function () {
    if (!this.piece && !this.car) {
        throw new BadRequestError("Please provide a car or a piece")
    }
})
module.exports=mongoose.model("Bon",BonSchema)