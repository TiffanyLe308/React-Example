import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weather_chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const cityTemp = _.map(cityData.list.map(weather => weather.main.temp), (cityTemp) => cityTemp -273);
    const cityPressure = cityData.list.map(weather => weather.main.pressure);
    const cityHumidity = cityData.list.map(weather => weather.main.humidity);
    //the code below equals to const lon = cityData.city.coord.lon; cont lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <WeatherChart data={cityTemp} color="orange" unit="C" />
        </td>
        <td>
          <WeatherChart data={cityPressure} color="green" unit="hPa" />
        </td>
        <td>
          <WeatherChart data={cityHumidity} color="blue" unit="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
};

// function below is totally equal to this
// function mapStateToProps(state) {
//   return {
//     weather: state.weather
//   };
// }

function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
