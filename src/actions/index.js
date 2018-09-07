import axios from 'axios';

const WEATHER_API_KEY = 'ffd7e7d03b1e3c1f5ae429dd2a42ddfd';
const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

const POST_API_KEY = '?key=post1103';
const POST_API_URL = 'http://reduxblog.herokuapp.com/api';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_ID = 'FETCH_POST_ID';
export const CREATE_POST = 'CREATE_POST';

export function fetchWeather(city) {
  const weather_url = `${WEATHER_API_URL}&q=${city},fi`;
  const request = axios.get(weather_url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function selectBook(book) {
  console.log('A book has been selected: ', book.title);
  // selectBook is an action creator, it needs to return an action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export function fetchPost() {
  const request = axios.get(`${POST_API_URL}/posts${POST_API_KEY}`);

  return {
    type: 'FETCH_POST',
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${POST_API_URL}/posts${POST_API_KEY}`, values)
  .then(() => callback());

  return {
    type: 'CREATE_POST',
    payload: request
  };
}

export function fetchPostId(id) {
  const request = axios.get(`${POST_API_URL}/posts/${id}${POST_API_KEY}`);

  return {
    type: 'FETCH_POST_ID',
    payload: request
  };
}
