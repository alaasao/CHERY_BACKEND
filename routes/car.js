const express = require("express");
const carRouter = express.Router();

const {
  getCar,
  getAllCars,
  updateCar,
  deleteCar,
  createCar,
} = require("../controllers/Car");
const auth = require("../middleware/authentication");
carRouter.route("/").get(getAllCars).post(auth,createCar);
carRouter.route("/:carId").get(getCar).delete(auth,deleteCar).put(auth,updateCar);
module.exports=carRouter