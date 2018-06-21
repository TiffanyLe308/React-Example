import axios from 'axios';

const WEATHER_API_KEY = 'ffd7e7d03b1e3c1f5ae429dd2a42ddfd';
const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const weather_url = `${WEATHER_API_URL}&q=${city},fi`;
  const request = axios.get(weather_url);

  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function selectBook(book) {
  console.log('A book has been selected: ', book.title);
  // selectBook is an action creator, it needs to return an action, an object with a type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
