import React, {Component} from 'react';
import PorpTypes from 'prop-types';

class ForecastExtended extends Component{
    
    render() {
        const  {city}  = this.props;
        return (
            <div>
                Pronostico Extendido de {city}             
            </div>
        );
    }   
}
ForecastExtended.porpTypes = {
     city: PorpTypes.string.isRequired,   
}

export default ForecastExtended;