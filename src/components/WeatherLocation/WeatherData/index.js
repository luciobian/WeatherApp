import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './style.css';


const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (
   <div className="weatherDataContainer">
        <WeatherTemperature 
            temperature={temperature}
            weatherState={weatherState}
        />
        <WeatherExtraInfo humidity={ humidity } wind={ wind }/>

    </div>
);

export default WeatherData;