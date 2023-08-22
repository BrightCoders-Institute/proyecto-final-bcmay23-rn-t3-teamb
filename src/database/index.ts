import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes',
  headers: {
    'X-RapidAPI-Key': '61d5a32c54msh99128b9603955cdp17211cjsn204a2ff214a5',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
});
