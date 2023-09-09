import axios from 'axios';

import envs from '../config/env';

const {API_KEY, API_HOST} = envs;

export const API = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: "0a190ca3a52b45a59e83b457a538e2b9",
  },
  headers: {
    'X-RapidAPI-Host': API_HOST,
  },
});