import axios from 'axios';

import envs from '../config/env';

const {API_KEY, API_HOST} = envs;

export const API = axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes',
  headers: {
    'X-RapidAPI-Host': API_HOST,
    'X-RapidAPI-Key': API_KEY,
  },
});