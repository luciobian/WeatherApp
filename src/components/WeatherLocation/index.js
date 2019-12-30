import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from './../../services/transformWeather';
import {
    BASE_URL,
    API_KEY
} from '../../constants/url'



const location = "Buenos Aires,ar";
const end_point = `${BASE_URL}q=${location}&appid=${API_KEY}`;

class WeatherLocation extends Component {


    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: null,
        };
    }

    componentDidMount() {
        this.handleClickUpdate();
    }
    

    handleClickUpdate = () => {
        fetch(end_point).then (resolve =>{
            return resolve.json();
        }).then ( data => {
            const newWeather = transformWeather(data);
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
            { data ? <WeatherData data={data}></WeatherData> : "Cargando..."}
        </div>
    }
};

export default WeatherLocation;