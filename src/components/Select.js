import React, { Component } from 'react';
import Select from 'react-select';
import Result from './Result';

class SelectComponent extends Component {
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

    handleChange (event) {
        this.setState(()=>{
            return {
                selectedOption: event
            }
        });
    }

    render() { 
        return ( 
            <div>
                <Select
                placeholder="Select An Item"
                onChange={this.handleChange} 
                value={this.state.selectedOption} 
                options={this.state.selectOptions} 
               />
                <Result selectedOption = {this.state.selectedOption}/>
            </div>  
         );
    }
}
 
export default SelectComponent;