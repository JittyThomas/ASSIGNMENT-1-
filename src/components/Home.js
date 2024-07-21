import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to LuxCars</h1>
            <p>Your premium car dealership platform</p>
            <div className="home-links">
                <Link to="/login" className="home-link-button">Login</Link>
                <Link to="/register" className="home-link-button">Register</Link>
                <Link to="/cars" className="home-link-button">View Car Listings</Link>
            </div>
        </div>
    );
};

export default Home;
