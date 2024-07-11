const fs = require('fs/promises');

const API_URL_INGREDIENTS_LIST = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const API_URL_SEARCH_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=';
const API_URL_ALL_COCKTAILS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const getFetch = async () => {
  const { default: fetch } = await import('node-fetch');
  return fetch;
};

const getAllIngredientsFromAPI = async () => {
  const fetch = await getFetch();
  const response = await fetch(API_URL_INGREDIENTS_LIST);
  const data = await response.json();
  return data.drinks.map(drink => drink.strIngredient1);
};

const getAllCocktails = async () => {
  const fetch = await getFetch();
  let cocktails = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (const letter of alphabet) {
    const response = await fetch(`${API_URL_ALL_COCKTAILS}${letter}`);
    const data = await response.json();
    if (data.drinks) {
      cocktails = cocktails.concat(data.drinks);
    }
  }

  return cocktails;
};

const extractIngredientsFromCocktails = (cocktails) => {
  const ingredients = new Set();
  cocktails.forEach(cocktail => {
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      if (ingredient) {
        ingredients.add(ingredient);
      }
    }
  });
  return [...ingredients];
};

const getMissingIngredients = (allIngredients, apiIngredients) => {
  return allIngredients.filter(ingredient => !apiIngredients.includes(ingredient));
};

const saveMissingIngredients = async (missingIngredients) => {
  await fs.writeFile('missingIngredients.json', JSON.stringify(missingIngredients, null, 2));
  console.log('Missing ingredients saved to missingIngredients.json');
};

const main = async () => {
  try {
    const apiIngredients = await getAllIngredientsFromAPI();
    const allCocktails = await getAllCocktails();
    const allIngredients = extractIngredientsFromCocktails(allCocktails);
    const missingIngredients = getMissingIngredients(allIngredients, apiIngredients);

    await saveMissingIngredients(missingIngredients);
  } catch (error) {
    console.error('Failed to fetch missing ingredients:', error);
  }
};

main();
