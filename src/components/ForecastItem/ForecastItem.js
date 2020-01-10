import React from 'react';
import { PropTypes } from "prop-types";

const ForecastItem = ({weekDay}) => (
    <div> { weekDay }</div>
);

ForecastItem.porpTypes = {
    weekDay : PropTypes.number.isRequired,
}

export default ForecastItem;

