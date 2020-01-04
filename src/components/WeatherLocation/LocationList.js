import React from "react";
import WeatherLocation from "./";


const strToComponents = cities => (
    cities.map( city => <WeatherLocation key={ city } city={ city } /> )
);


const LocationList = ({cities}) => (
    <div>
        { strToComponents(cities) }
    </div>
);

export default LocationList;