import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="extraInfoContainer">
        <span className="extraInfoText">{`Humedad: ${humidity}% `}</span>
        <span className="extraInfoText">{`Vientos: ${wind} viento`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;