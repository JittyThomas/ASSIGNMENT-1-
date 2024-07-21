const express = require('express');
const Car = require('../models/Car');
const router = express.Router();

// Get all cars
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single car by ID
router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ msg: "Car not found" });
        res.json(car);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
