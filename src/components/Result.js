import React, { Component } from 'react';
import Select from './Select';

const Result = (props) => {
    return (
    <div className="result-container">
                {props.selectedOption.length !== 0  && 
                <div className="result">
                    <p><b>Hey Customer!</b></p>
                    <div><b>Food: </b> {props.selectedOption.label}</div>
                    <div><b>Price: </b> Rs. {props.selectedOption.price}</div>
                    <br />
                    <p>Enjoy your food !</p>
                </div>
                }
    </div>);
}

export default Result;