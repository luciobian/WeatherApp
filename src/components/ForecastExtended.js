import React, { Component } from 'react';
import PorpTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

/* const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: "SUN",
    wind:"10 w/s",
}; */

class ForecastExtended extends Component {


    constructor(){
        super();
        this.state = { forecastData: null };
    }

    renderForecastItemDays() {
        return "Render ForecastItem";
        // return days.map( day => <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem> );
    }

    renderProgress(){
        return <h3>Cargando Pronóstico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecaste-title">Pronóstico Extendido de {city}</h2>
                { forecastData ? this.renderForecastItemDays() 
                    : this.renderProgress()}
            </div> 
        );
    }
}
ForecastExtended.porpTypes = {
    city: PorpTypes.string.isRequired,
}

export default ForecastExtended;