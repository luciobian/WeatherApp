import React, {Component} from 'react';
import PorpTypes from 'prop-types';
import './styles.css';

class ForecastExtended extends Component{
    
    render() {
        const  {city}  = this.props;
        return (
            <div>
                <h2 className="forecaste-title">Pronóstico Extendido de {city}</h2>             
            </div>
        );
    }   
}
ForecastExtended.porpTypes = {
     city: PorpTypes.string.isRequired,   
}

export default ForecastExtended;