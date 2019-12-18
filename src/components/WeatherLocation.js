import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div className="App">
        <Location city="Buenos Aires"></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;