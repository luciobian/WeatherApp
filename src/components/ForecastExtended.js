import React, { Component } from 'react';
import PorpTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const days = [
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
};

class ForecastExtended extends Component {

    renderForecastItemDays() {
        return days.map( day => <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem> );
    }

    render() {
        const { city } = this.props;
        return (
            <div>
                <h2 className="forecaste-title">Pronóstico Extendido de {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        );
    }
}
ForecastExtended.porpTypes = {
    city: PorpTypes.string.isRequired,
}

export default ForecastExtended;