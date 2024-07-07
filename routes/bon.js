const express = require("express");
const bonRouter = express.Router();

const {
  getBon,
  getAllBons,
  updateBon,
  deleteBon,
  createBon,
} = require("../controllers/Bon");
const auth = require("../middleware/authentication");
bonRouter.route("/").get(getAllBons).post(createBon);
bonRouter.route("/:bonId").get(getBon).delete(auth,deleteBon).put(auth,updateBon);
module.exports=bonRouter