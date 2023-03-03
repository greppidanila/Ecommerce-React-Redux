
import React from 'react'
import Background from "../assets/bg.png";
import Products from './Products';

const Home: React.FC = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img className="card-img" src={Background} alt="Background" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home

