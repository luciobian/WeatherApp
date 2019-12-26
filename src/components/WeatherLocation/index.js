import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import {
    SUN,
} from './../../contansts/weathers';

const data = {
    temperature: 25,
    weatherState: SUN,
    humidity: 80,
    wind:"10 m/s"
}

class WeatherLocation extends Component {
    
    render(){
        return <div className="weatherLocationContainer">
            <Location city={"Buenos Aires"}></Location>
            <WeatherData data={data}></WeatherData>
        </div>
    }
};

export default WeatherLocation;