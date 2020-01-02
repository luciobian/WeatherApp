import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';



class WeatherLocation extends Component {


    constructor(props) {
        super(props);
        const { city } = props ;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleClickUpdate();
    }
    

    handleClickUpdate = () => {

        const end_point = getUrlWeatherByCity(this.state.city);

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
            { data ? <WeatherData data={data}></WeatherData> : <CircularProgress />}
        </div>
    }
};

WeatherLocation.PropType = {
    city : PropTypes.string.isRequired,
}

export default WeatherLocation;