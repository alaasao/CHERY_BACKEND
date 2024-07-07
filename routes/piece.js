const express = require("express");
const pieceRouter = express.Router();

const {
  getPiece,
  getAllPieces,
  updatePiece,
  deletePiece,
  createPiece,
} = require("../controllers/Piece");
const auth = require("../middleware/authentication");
pieceRouter.route("/").get(getAllPieces).post(auth,createPiece);
pieceRouter.route("/:pieceId").get(getPiece).delete(auth,deletePiece).put(auth,updatePiece);
module.exports=pieceRouter