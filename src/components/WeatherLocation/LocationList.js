import React from "react";
import WeatherLocation from "./";


const LocationList = () => (
    <div>
        <WeatherLocation city="Resistencia, ar" />
        <WeatherLocation city="Formosa, ar" />
        <WeatherLocation city="Corrientes, ar" />
    </div>
);

export default LocationList;