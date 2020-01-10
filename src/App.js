import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';
import ForecastExtended from './components/ForecastExtended';

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
    this.state = { city : "Nueva ciudad"}
    
}

  onHandleSelectedLocation = city => {
    console.log(city);
    this.setState({city: city});
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
                  <ForecastExtended city={city}></ForecastExtended>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  };

}
export default App;
