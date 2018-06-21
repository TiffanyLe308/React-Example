import React, { Component } from 'react';

import WeatherSearchBar from '../containers/weather-search-bar';
import WeatherList from '../containers/weather-list';

export default class WeatherForecast extends Component {
  render() {
    return (
      <div>
        <h2>Weather forecast for buying jewlery</h2>
        <WeatherSearchBar />
        <WeatherList />
      </div>
    );
  }
}
