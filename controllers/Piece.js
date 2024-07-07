const Piece = require("../models/Piece");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const getAllPieces = async (req, res) => {
  const pieces = await Piece.find({}); 
  res.status(StatusCodes.OK).json({ pieces });
};
const getPiece = async(req, res) => {
  const piece = await Piece.findById(req.params.pieceId)
  if (!piece) {
    throw new NotFoundError(`No piece with id ${req.params.pieceId}`);
  }
  res.status(StatusCodes.OK).json(piece)
};
const createPiece = async (req, res) => {
    console.log(new Date())
  const piece = await Piece.create({ ...req.body })
  res.status(StatusCodes.CREATED).json(piece)
};
const updatePiece = async(req, res) => {
  const piece=await Piece.findByIdAndUpdate(req.params.pieceId, req.body, {
    new: true,
    runValidators: true,
  })
  if (!piece) {
    throw new NotFoundError(`No piece with id ${req.params.pieceId}`);
  }
  res.status(StatusCodes.OK).json(piece)
};
const deletePiece = async(req, res) => {
  const piece = await Piece.findByIdAndDelete(req.params.pieceId)
  res.status(StatusCodes.OK).json({"success":`${piece.name} deleted`})
};
module.exports = { getAllPieces, getPiece, updatePiece, deletePiece, createPiece };
