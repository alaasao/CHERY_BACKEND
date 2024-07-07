const mongoose = require("mongoose")
const etats = ['pending', 'accepted', 'refused'];
const TicketSchema = mongoose.Schema({
    subject: {
        type: String,
        required:[true,"Please provide a subject"]
    },
    description: {
        type: String,
        required:[true,"Please provide a discreption"]
    },
    phone: {
        type: String,
        match: [
          /^(\+213|0)(5|6|7)[0-9]{8}$/,
          "Please provide a valid phone number",
        ],
        required:[true,"Please provide a phone number"]
    },
    etat: {
        type: String,
        default:"pending",
        validate: {
            validator: (value) => etats.includes(value),
            message: 'etat must be pending,accepted,refused',
          },
      
    }
}, {
    timestamps:true
})
module.exports=mongoose.model("Ticket",TicketSchema)