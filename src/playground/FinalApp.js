import React, { Component } from 'react';
import Select from 'react-select';

class FinalApp extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectOptions : [
                {
                    label: "Pizza",  
                    price: 45 
                },
                {
                    label: "Burger",
                    price: 50
                },
                {
                    label: "Icecream",
                    price: 50,
                },
                {
                    label: "Noodles",
                    price: 30
                }
              ],
              selectedOption: ''
        }
    }

    export handleChange (event) {
        this.setState(()=>{
            return {
                selectedOption: event
            }
        });
    }

    render() { 
        return ( 
            <div className="main-container">
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                                Food Menu
                    </div>
                </nav>
            <div className = "container">
                <div className = "sub-container">
                    <p> Know the price of the food you crave!!!</p>    
                </div>
            <div>
                <Select
                placeholder="Select An Item"
                onChange={this.handleChange} 
                value={this.state.selectedOption} 
                options={this.state.selectOptions} 
               />
            </div>  
            <div className="result-container">
                {this.state.selectedOption.length !== 0  && 
                <div className="result">
                    <p><b>Hey Customer!</b></p>
                    <div><b>Food: </b> {this.state.selectedOption.label}</div>
                    <div><b>Price: </b> Rs. {this.state.selectedOption.price}</div>
                    <br />
                    <p>Enjoy your food !</p>
                </div>
                }
            </div>
            </div>
      </div>
        );
    }
}
 
export default FinalApp;