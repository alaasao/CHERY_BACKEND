const mongoose = require("mongoose");
const { BadRequestError } = require("../errors");
const rdvTypes = ["RDV_VENTE_VOITURE", "RDV_VENTE_PIECE", "RDV_VIDENGE"];
const RdvSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    phone: {
      type: String,
      match: [
        /^(\+213|0)(5|6|7)[0-9]{8}$/,
        "Please provide a valid phone number ",
      ],
    },
    address: {
      type: String,
    },
    car: {
      type: mongoose.Schema.ObjectId,
      ref: "Car",
    },
    piece: {
      type: mongoose.Schema.ObjectId,
      ref: "Piece",
    },
    rdvType: {
      type: String,
      default: "RDV_VENTE_VOITURE",
      validate: {
        validator: (value) => rdvTypes.includes(value),
        message:
          "rdv type must be RDV_VENTE_VOITURE,RDV_VENTE_PIECE,RDV_VIDENGE",
      },
    },
  },
  {
    timestamps: true,
  }
);

RdvSchema.pre("save", function () {
  if (!this.piece && !this.car) {
    throw new BadRequestError("Please provide a car or a piece");
  }
  if (!this.phone && !this.email) {
    throw new BadRequestError("Please provide a phone or a email");
  }
});

module.exports = mongoose.model("Rdv", RdvSchema);
