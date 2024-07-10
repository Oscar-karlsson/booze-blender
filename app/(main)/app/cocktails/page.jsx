"use client";
import React, { useState, useEffect } from 'react';
import CocktailFilter from '../components/CocktailFilter';
import Link from 'next/link';
import { IoFilter } from "react-icons/io5";

// API function to fetch cocktails using environment variables
const fetchCocktailsByLetter = async (letter) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search.php?f=${letter}`);
  const data = await response.json();
  return data.drinks || [];
};

// Fetch all cocktails by iterating through the alphabet
const fetchAllCocktails = async () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const promises = alphabet.map(letter => fetchCocktailsByLetter(letter));
  const cocktailsByLetter = await Promise.all(promises);
  return cocktailsByLetter.flat();
};

const filterCocktails = (cocktails, filters, searchTerm) => {
  return cocktails.filter(cocktail => {
    const matchesSearch = cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBaseSpirit = !filters.baseSpirit || filters.baseSpirit.length === 0 || filters.baseSpirit.some(spirit => 
      [cocktail.strIngredient1, cocktail.strIngredient2, cocktail.strIngredient3].some(ingredient => ingredient?.toLowerCase().includes(spirit.value))
    );

    const matchesCocktailType = !filters.cocktailType || filters.cocktailType.length === 0 || filters.cocktailType.some(type => 
      cocktail.strCategory.toLowerCase() === type.value.toLowerCase()
    );

    return matchesSearch && matchesBaseSpirit && matchesCocktailType;
  });
};

const CocktailsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: [{ value: 'name', label: 'Name' }],
    baseSpirit: [],
    cocktailType: [],
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getCocktails = async () => {
      const drinks = await fetchAllCocktails();
      setCocktails(drinks);
    };

    getCocktails();
  }, []);

  const openFilterModal = () => {
    setIsFilterOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterOpen(false);
  };

  const filteredCocktails = filterCocktails(cocktails, filters, searchTerm);

  return (
    <div className="min-h-screen p-4">
      <header className="bg-brown-800 text-white p-4">
        <h1 className="text-2xl font-bold text-black mb-4">Cocktails</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search for cocktails..."
            className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:border-orange-400 text-black bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={openFilterModal} className="text-xl p-2 text-black rounded-full hover:bg-gray-200">
            <IoFilter />
          </button>
        </div>
      </header>

      <CocktailFilter 
        isOpen={isFilterOpen} 
        onRequestClose={closeFilterModal} 
        filters={filters} 
        setFilters={setFilters} 
        filteredCount={filteredCocktails.length}
      />

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCocktails.map(cocktail => (
          <div key={cocktail.idDrink} className="bg-white p-4 rounded shadow-md">
            <img 
              src={cocktail.strDrinkThumb} 
              alt={cocktail.strDrink} 
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-bold">{cocktail.strDrink}</h2>
            <p className="text-gray-600">{cocktail.strCategory}</p>
            <Link href={`/cocktail/${cocktail.idDrink}`} className="text-orange-400 hover:text-orange-500">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailsPage;
