import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarListings = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/honda/modelyear/2015?format=json');
                setCars(response.data["Results"]);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, []);

    return (
        <div>
            <h2>Car Listings</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.Make_ID}>
                        {car.Make_Name} {car.Model_Name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarListings;
