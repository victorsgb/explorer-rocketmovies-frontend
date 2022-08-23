import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://victor-rocketmovies-api.herokuapp.com'
});