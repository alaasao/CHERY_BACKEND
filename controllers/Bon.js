const Bon = require("../models/Bon");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const getAllBons = async (req, res) => {
  const bons = await Bon.find({}).populate("client").populate("car"); 
  res.status(StatusCodes.OK).json({ bons });
};
const getBon = async(req, res) => {
  const bon = await Bon.findById(req.params.bonId).populate("client").populate("car")
  if (!bon) {
    throw new NotFoundError(`No bon with id ${req.params.bonId}`);
  }
  res.status(StatusCodes.OK).json(bon)
};
const createBon = async (req, res) => {

  const bon = await Bon.create({ ...req.body })
  res.status(StatusCodes.CREATED).json(bon)
};
const updateBon = async(req, res) => {
  const bon=await Bon.findByIdAndUpdate(req.params.bonId, req.body, {
    new: true,
    runValidators: true,
  }).populate("client").populate("car")
  if (!bon) {
    throw new NotFoundError(`No bon with id ${req.params.bonId}`);
  }
  res.status(StatusCodes.OK).json(bon)
};
const deleteBon = async(req, res) => {
  const bon = await Bon.findByIdAndDelete(req.params.bonId)
  res.status(StatusCodes.OK).json({"success":`bon deleted`})
};
module.exports = { getAllBons, getBon, updateBon, deleteBon, createBon };
