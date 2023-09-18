import axios from 'axios';

import envs from '../config/env';

const {API_KEY, API_HOST} = envs;

export const API = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: "api key",
  },
  headers: {
    'X-RapidAPI-Host': API_HOST,
  },
});