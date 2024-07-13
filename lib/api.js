export const fetchGlassTypes = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/list.php?g=list`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
};

export const fetchAlcoholicOptions = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/list.php?a=list`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
};

export const fetchIngredients = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/list.php?i=list`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
};

export const fetchCategories = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/list.php?c=list`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
};

export const fetchCocktails = async (query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search.php?s=${query}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
};

export const fetchCocktailById = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lookup.php?i=${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks[0];
};

export const fetchRandomCocktail = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/random.php`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks[0];
};

export const fetchBaseSpirits = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/list.php?i=list`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
};


export const fetchCocktailsBySpirit = async (spirit) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/filter.php?i=${spirit}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
  };

export const fetchCocktailTypes = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/list.php?c=list`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
};

export const fetchCocktailsByLetter = async (letter) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search.php?f=${letter}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks || [];
};

export const fetchCocktailsByNumber = async (number) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search.php?f=${number}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks || [];
};

export const fetchCocktailsByIngredient = async (ingredient) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/filter.php?i=${ingredient}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
  };

// Helper function to introduce a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const BATCH_SIZE = 3; // Adjusted batch size for faster loading
const DELAY_MS = 1000; // Reduced delay between batches

// Create a new Set to store unique cocktail IDs
const uniqueCocktails = new Set();

export const fetchAllCocktailsInBatches = async (updateCocktails) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const numbers = '0123456789'.split('');
    const allChars = [...alphabet, ...numbers];

    for (let i = 0; i < allChars.length; i += BATCH_SIZE) {
        const batch = allChars.slice(i, i + BATCH_SIZE);
        const promises = batch.map(char => fetchCocktailsByLetter(char));
        const results = await Promise.all(promises);

        // Remove duplicates based on cocktail ID
        const filteredResults = results.flat().filter(cocktail => {
            if (uniqueCocktails.has(cocktail.idDrink)) {
                return false;
            }
            uniqueCocktails.add(cocktail.idDrink);
            return true;
        });

        updateCocktails(prevCocktails => [...prevCocktails, ...filteredResults]);

        // Delay between batches to avoid rate limiting
        await delay(DELAY_MS);
    }
};