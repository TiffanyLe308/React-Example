import React, { Component } from 'react';

import WeatherSearchBar from '../containers/weather_search_bar';

export default class WeatherForecast extends Component {
  render() {
    return (
      <div>
        <h2>Weather forecast for 3 days</h2>
        <WeatherSearchBar />
      </div>
    );
  }
}
