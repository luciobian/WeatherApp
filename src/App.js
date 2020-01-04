import React from 'react';
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
function App() {
  return (
    <div className="App">
      <LocationList cities={ cities }></LocationList>
    </div>

  );
}

export default App;
