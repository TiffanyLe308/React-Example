import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weather_chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const cityTemp = cityData.list.map(tempo => tempo.main.temp);

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <WeatherChart data={cityTemp} color="orange" />
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
