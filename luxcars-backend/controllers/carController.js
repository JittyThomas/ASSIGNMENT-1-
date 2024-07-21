const Car = require('../models/Car');

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCar = async (req, res) => {
  const { make, model, year, price } = req.body;
  try {
    const car = new Car({ make, model, year, price });
    await car.save();
    res.status(201).json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCar = async (req, res) => {
  const { make, model, year, price } = req.body;
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, { make, model, year, price }, { new: true });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCars, getCarById, createCar, updateCar, deleteCar };
