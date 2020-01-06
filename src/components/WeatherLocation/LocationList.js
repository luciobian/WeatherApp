import React from "react";
import WeatherLocation from "./";
import { PropTypes } from "prop-types";




const LocationList = ({ cities, onSelectedLocation }) => {


    const handleWeatherLocationList = city => {
        console.log("handleWLL");
        onSelectedLocation(city);
    }

    const strToComponents = cities => (
        cities.map(city =>
            <WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationList(city)} />)
    );

    return (<div>
        {strToComponents(cities)}
    </div>)

};

LocationList.protoTypes = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;