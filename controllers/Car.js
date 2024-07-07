const Car = require("../models/Car");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const getAllCars = async (req, res) => {
  const cars = await Car.find({});
  res.status(StatusCodes.OK).json({ cars });
};
const getCar = async(req, res) => {
  const car = await Car.findById(req.params.carId)
  if (!car) {
    throw new NotFoundError(`No car with id ${payload.userId}`);
  }
  res.status(StatusCodes.OK).json(car)
};
const createCar = async(req, res) => {
  const car = await Car.create({ ...req.body })
  res.status(StatusCodes.CREATED).json(car)
};
const updateCar = async(req, res) => {
  const car=await Car.findByIdAndUpdate(req.params.carId, req.body, {
    new: true,
    runValidators: true,
  })
  if (!car) {
    throw new NotFoundError(`No car with id ${payload.userId}`);
  }
  res.status(StatusCodes.OK).json(car)
};
const deleteCar = async(req, res) => {
  const car = await Car.findByIdAndDelete(req.params.carId)
  res.status(StatusCodes.OK).json({"success":`${car.Modele} deleted`})
};
module.exports = { getAllCars, getCar, updateCar, deleteCar, createCar };
