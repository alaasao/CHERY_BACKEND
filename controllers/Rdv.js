const Rdv = require("../models/Rdv");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const getAllRdvs = async (req, res) => {
  const rdvs = await Rdv.find({}).populate("car").populate("piece"); 
  res.status(StatusCodes.OK).json({ rdvs });
};
const getRdv = async(req, res) => {
  const rdv = await Rdv.findById(req.params.rdvId).populate("car").populate("piece")
  if (!rdv) {
    throw new NotFoundError(`No rdv with id ${req.params.rdvId}`);
  }
  res.status(StatusCodes.OK).json(rdv)
};
const createRdv = async (req, res) => {

  const rdv = await Rdv.create({ ...req.body })
  res.status(StatusCodes.CREATED).json(rdv)
};
const updateRdv = async(req, res) => {
  const rdv=await Rdv.findByIdAndUpdate(req.params.rdvId, req.body, {
    new: true,
    runValidators: true,
  }).populate("car").populate("piece")
  if (!rdv) {
    throw new NotFoundError(`No rdv with id ${req.params.rdvId}`);
  }
  res.status(StatusCodes.OK).json(rdv)
};
const deleteRdv = async(req, res) => {
  const rdv = await Rdv.findByIdAndDelete(req.params.rdvId)
  res.status(StatusCodes.OK).json({"success":`rdv deleted`})
};
module.exports = { getAllRdvs, getRdv, updateRdv, deleteRdv, createRdv };
