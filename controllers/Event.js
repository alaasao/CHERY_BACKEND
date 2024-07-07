const Event = require("../models/Event");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const getAllEvents = async (req, res) => {
  const events = await Event.find({});
  res.status(StatusCodes.OK).json({ events });
};
const getEvent = async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  if (!event) {
    throw new NotFoundError(`No event with id ${req.params.eventId}`);
  }
  res.status(StatusCodes.OK).json(event);
};
const createEvent = async (req, res) => {
  const event = await Event.create({ ...req.body });
  res.status(StatusCodes.CREATED).json(event);
};
const updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.eventId, req.body, {
    new: true,
    runValidators: true,
  });
  if (!event) {
    throw new NotFoundError(`No event with id ${req.params.eventId}`);
  }
  res.status(StatusCodes.OK).json(event);
};
const deleteEvent = async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.eventId);
  res.status(StatusCodes.OK).json({ success: `${event.title} deleted` });
};
module.exports = {
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  createEvent,
};
