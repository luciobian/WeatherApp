import React from 'react';
import PropTypes from 'prop-types';
const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{`${humidity}% -`}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

WeatherExtraInfo.prototype = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,

}

export default WeatherExtraInfo;