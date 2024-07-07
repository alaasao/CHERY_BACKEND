const mongoose = require("mongoose");
const { BadRequestError } = require("../errors");
const ClientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requried: [true, "Please provide a name"],
    },
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
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
  },
  { timestamps: true }
);
ClientSchema.pre("save", function () {
    if (!this.email && !this.phone) {
        throw new BadRequestError("you must provide either a phone or an email")
         
    }
})
ClientSchema.pre("findOneAndUpdate", function () {
    if (!this.email && !this.phone) {
        throw new BadRequestError("you must provide either  a phone or an email")
         
    }
})
module.exports = mongoose.model("Client", ClientSchema);
