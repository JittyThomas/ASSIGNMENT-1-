import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetail = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/honda/modelyear/2015?format=json/`);
            setCar(response.data);
        };
        fetchCar();
    }, [id]);

    if (!car) return <div>Loading...</div>;

    return (
        <div className="car-detail">
            <img src={car.image} alt={car.make} />
            <h2>{car.make} {car.model}</h2>
            <p>{car.year}</p>
            <p>${car.price}</p>
            <p>{car.description}</p>
        </div>
    );
};

export default CarDetail;
