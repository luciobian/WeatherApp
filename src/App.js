import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';
import ForecastExtended from './components/ForecastExtended';
import PropTypes from 'prop-types';
import { setCity } from './actions';

const cities = [
  "Corrientes, ar",
  "Goya, ar",
  "Buenos Aires, ar",
  "Mexico, mex",
  "Madrid, es",
  "Texas, us",
];


class App extends Component {

  constructor() {
    super();
    this.state = { city: null }

  }

  onHandleSelectedLocation = city => {
    console.log(city);
    this.setState({ city: city });

  }
  render() {

    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar >
              <Typography color="inherit" variant="h6">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.onHandleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city && <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  };

}

App.protoType = {
  setCity: PropTypes.func.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});


export default connect(null, mapDispatchToPropsActions)(App);