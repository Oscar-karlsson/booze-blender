"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch featured cocktails and categories from the API
    const fetchCocktails = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setCocktails(data.drinks.slice(0, 6)); // Only take the first 6 for the featured section
    };

    const fetchCategories = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const data = await response.json();
      setCategories(data.drinks);
    };

    fetchCocktails();
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <header className="bg-brown-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Discover</h1>
      
      </header>
      
      <div className="container mx-auto mt-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for cocktails..."
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-orange-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Featured Cocktails</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cocktails.map((cocktail) => (
              <div key={cocktail.idDrink} className="bg-white rounded shadow p-4">
                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-bold">{cocktail.strDrink}</h3>
                <p className="text-gray-600">{cocktail.strCategory}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category) => (
           <Link href={`/category/${category.strCategory}`} key={category.strCategory} className="bg-white rounded shadow p-4 text-center hover:bg-orange-100">
           {category.strCategory}
         </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Discover;
