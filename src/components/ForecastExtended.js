import React, { Component } from 'react';
import PorpTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import { API_KEY } from '../constants/url';
import transformForecast from '../services/transformForecast';
import CircularProgress from '@material-ui/core/CircularProgress';

/* const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: "SUN",
    wind:"10 w/s",
}; */

class ForecastExtended extends Component {

    url_forecastextended = "http://api.openweathermap.org/data/2.5/forecast?";
    constructor() {
        super();
        this.state = { forecastData: null };
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillUpdate(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData : null})
            this.updateCity(nextProps.city);
        }
    }
    

    updateCity = city =>{
        const end_point = `${this.url_forecastextended}q=${city}&appid=${API_KEY}`;
        fetch(end_point).then(
            data => data.json()
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );
    }


    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => 
        <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} 
                        hour={forecast.hour} 
                        data={forecast.data}>        
                        </ForecastItem> );
    }

    renderProgress() {
        return <CircularProgress></CircularProgress>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecaste-title">Pronóstico Extendido de {city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData)
                    : this.renderProgress()}
            </div>
        );
    }
}
ForecastExtended.porpTypes = {
    city: PorpTypes.string.isRequired,
}

export default ForecastExtended;