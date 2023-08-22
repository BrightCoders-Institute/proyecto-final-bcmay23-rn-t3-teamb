export interface recipe {
  egetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  lowFodmap: boolean;
  ketogenic: boolean;
  whole30: boolean;
  servings: number;
  preparationMinutes: number;
  cookingMinutes: number;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  aggregateLikes: number;
  creditText: string;
  sourceName: string;
  extendedIngredients: extendenIngredients[];
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  imageType: string;
  instructions: string;
}

export interface extendenIngredients {
  id: number;
  aisle: string;
  image: string;
  name: string;
  amount: number;
  unit: string;
  unitShort: string;
  unitLong: string;
  originalString: string;
  metaInformation?: string[];
}
