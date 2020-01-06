import React, { Component } from 'react';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';

const cities = [
  "Corrientes, ar",
  "Goya, ar",
  "Buenos Aires, ar",
  "Mexico, mex",
  "Madrid, es",
  "Texas, us",
];

class App extends Component {


  onHandleSelectedLocation = city =>{
    debugger;
    console.log(`onHandleSelectionLocation - ${city}`);
  }
  render(){
    
    return (
        <div className="App">
          <LocationList 
            cities={ cities }
            onSelectedLocation={this.onHandleSelectedLocation}></LocationList>
        </div>
    
      );
    
  };

}



export default App;
