import React, { Component } from 'react';
import SelectComponent from './components/Select';

const Final = () => {
    return ( 
        <div className="main-container">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                            Food Menu
                </div>
            </nav>
        <div className="image"></div>
        <div className = "container">
            <div className = "sub-container">
                <p> Know the price of the food you crave!!!</p>    
            </div>
        <div>
            <SelectComponent />
        </div> 
        </div> 
    </div>
    );
}

export default Final;