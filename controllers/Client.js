const { BadRequestError } = require("../errors");
const Client = require("../models/Client");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const getAllClients = async (req, res) => {
  const clients = await Client.find({}); 
  res.status(StatusCodes.OK).json({ clients });
};
const getClient = async(req, res) => {
  const client = await Client.findById(req.params.clientId)
  if (!client) {
    throw new NotFoundError(`No client with id ${req.params.clientId}`);
  }
  res.status(StatusCodes.OK).json(client)
};
const createClient = async (req, res) => {
//     if (!req.body.email && !req.body.phone) {
//       throw new BadRequestError("you must provide a phone or an email")
//   }
  const client = await Client.create({ ...req.body })
  res.status(StatusCodes.CREATED).json(client)
};
const updateClient = async (req, res) => {
    
  const client=await Client.findByIdAndUpdate(req.params.clientId, req.body, {
    new: true,
    runValidators: true,
  })
  if (!client) {
    throw new NotFoundError(`No client with id ${req.params.clientId}`);
  }
  res.status(StatusCodes.OK).json(client)
};
const deleteClient = async(req, res) => {
  const client = await Client.findByIdAndDelete(req.params.clientId)
  res.status(StatusCodes.OK).json({"success":`${client.name} deleted`})
};
module.exports = { getAllClients, getClient, updateClient, deleteClient, createClient };
