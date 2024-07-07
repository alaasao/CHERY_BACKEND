const express = require("express");
const eventRouter = express.Router();

const {
  getEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
  createEvent,
} = require("../controllers/Event");
const auth = require("../middleware/authentication");
eventRouter.route("/").get(getAllEvents).post(auth,createEvent);
eventRouter.route("/:eventId").get(getEvent).delete(auth,deleteEvent).put(auth,updateEvent);
module.exports=eventRouter