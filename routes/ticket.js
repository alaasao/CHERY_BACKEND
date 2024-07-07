const express = require("express");
const ticketRouter = express.Router();

const {
  getTicket,
  getAllTickets,
  updateTicket,
  deleteTicket,
  createTicket,
} = require("../controllers/Ticket");
const auth = require("../middleware/authentication");
ticketRouter.route("/").get(getAllTickets).post(createTicket);
ticketRouter.route("/:ticketId").get(getTicket).delete(auth,deleteTicket).put(auth,updateTicket);
module.exports=ticketRouter