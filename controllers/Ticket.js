const { NotFoundError } = require("../errors");
const Ticket = require("../models/Ticket");
const { StatusCodes } = require("http-status-codes");
const getAllTickets = async (req, res) => {
  const tickets = await Ticket.find({}); 
  res.status(StatusCodes.OK).json({ tickets });
};
const getTicket = async(req, res) => {
  const ticket = await Ticket.findById(req.params.ticketId)
  if (!ticket) {
    throw new NotFoundError(`No ticket with id ${req.params.ticketId}`);
  }
  res.status(StatusCodes.OK).json(ticket)
};
const createTicket = async (req, res) => {
    console.log(new Date())
  const ticket = await Ticket.create({ ...req.body })
  res.status(StatusCodes.CREATED).json(ticket)
};
const updateTicket = async(req, res) => {
  const ticket=await Ticket.findByIdAndUpdate(req.params.ticketId, req.body, {
    new: true,
    runValidators: true,
  })
  if (!ticket) {
    throw new NotFoundError(`No ticket with id ${req.params.ticketId}`);
  }
  res.status(StatusCodes.OK).json(ticket)
};
const deleteTicket = async(req, res) => {
  const ticket = await Ticket.findByIdAndDelete(req.params.ticketId)
  res.status(StatusCodes.OK).json({"success":`ticket deleted`})
};
module.exports = { getAllTickets, getTicket, updateTicket, deleteTicket, createTicket };
