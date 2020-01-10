import React, { Component } from 'react';
import PorpTypes from 'prop-types';
import ForecastItem from './ForecastItem/ForecastItem';
import './styles.css';

const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
]

class ForecastExtended extends Component {

    renderForecastItemDays() {
        return days.map( day => <ForecastItem weekDay={day}></ForecastItem> );
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