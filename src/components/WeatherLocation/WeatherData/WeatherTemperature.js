import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';
import './style.css';

const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers'
  };

const getWeatherIcon = weatherState =>{

    const icon = icons[weatherState];

    const iconSize = "4x";

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={iconSize} />
    else    
        return <WeatherIcons className="wicon" name="day-sunny" size={iconSize} />

}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureContainer">
        {
            getWeatherIcon(weatherState)
        }        
        <span className="temperature">{`${temperature}`}</span> 
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;

