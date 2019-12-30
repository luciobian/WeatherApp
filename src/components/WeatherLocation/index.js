import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import { SUN, } from '../../constants/weathers';
import {
    BASE_URL,
    API_KEY
} from '../../constants/url'

const data = {
    temperature: 25,
    weatherState: SUN,
    humidity: 80,
    wind: "10 m/s"
}

const location = "Buenos Aires,ar";
const end_point = `${BASE_URL}q=${location}&appid=${API_KEY}&units=metric`;

class WeatherLocation extends Component {


    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: data,
        };
    }

    getWeatherData = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const  weatherState  = this.getWeatherData(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${ speed } m/s`,
        }

        return data;
    }


    handleClickUpdate = () => {
        console.log("Actualizado");
        fetch(end_point).then (resolve =>{
            return resolve.json();
        }).then ( data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            this.setState({
                data: newWeather,
            });
        });
    };

    render() {
        const { city, data } = this.state;
        return <div className="weatherLocationContainer">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleClickUpdate}> Actualizar </button>
        </div>
    }
};

export default WeatherLocation;