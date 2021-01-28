import React, { useState } from 'react';
import Select from 'react-select';
 
const App = (props) => {
  const data = [
    {
      value: 150,
      label: "Pizza"
    },
    {
      value: 45,
      label: "Burger"
    },
    {
      value: 50,
      label: "Icecream"
    }
  ];
 
  const [selectedOption, setSelectedOption] = useState('');

  function handleChange (e) { 
    setSelectedOption(e);
  }
 
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
          value={selectedOption} 
          options={data} 
          onChange={handleChange} 
        />
        </div>  
        <div className="result-container"> 
        {selectedOption && 
        <div className="result">
          <p><b>Hey Customer!</b></p>
          <div><b>Food: </b> {selectedOption.label}</div>
          <div><b>Price: </b> Rs. {selectedOption.value}</div>
          <br />
          <p>Enjoy your food !</p>
        </div>
        }
        </div>
      </div>
    </div>
  );
}

export default App;
