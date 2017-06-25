import axios from 'axios';

const API_KEY = '8724f756e37a9844cb8c35793d34644e';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+ API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeater(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
