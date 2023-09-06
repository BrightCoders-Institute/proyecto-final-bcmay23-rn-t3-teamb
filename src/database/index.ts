import axios from 'axios';

import envs from '../config/env';

const {API_KEY, API_HOST} = envs;

export const API = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: "5aa7ca6615f14b81b53ddcdfab259dc6",
  },
  headers: {
    'X-RapidAPI-Host': API_HOST,
  },
});