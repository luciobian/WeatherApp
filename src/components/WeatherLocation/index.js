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
    

    constructor(){
        super();
        this.state = {
            city: "Buenos Aires",
            data: data, 
        };
    }


    handleClickUpdate = () =>(
        console.log("Actualizado")
    );

    render(){
        const {city, data} = this.state;
        return <div className="weatherLocationContainer">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleClickUpdate}> Actualizar </button>
        </div>
    }
};

export default WeatherLocation;