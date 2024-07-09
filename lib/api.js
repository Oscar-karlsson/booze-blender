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

  export const fetchCocktailTypes = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/list.php?c=list`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.drinks;
  };