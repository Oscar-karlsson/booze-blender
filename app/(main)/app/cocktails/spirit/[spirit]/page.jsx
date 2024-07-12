"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { fetchCocktailsBySpirit } from '@/lib/api';

const CocktailsBySpirit = () => {
  const { spirit } = useParams();
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (spirit) {
      const loadCocktails = async () => {
        const cocktailsData = await fetchCocktailsBySpirit(spirit);
        setCocktails(cocktailsData);
        setIsLoading(false);
      };

      loadCocktails();
    }
  }, [spirit]);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Cocktails with {spirit}</h1>
      {isLoading ? (
        <div className="text-center mt-4">Loading cocktails...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cocktails.map(cocktail => (
            <Link key={cocktail.idDrink} href={`/app/cocktails/${cocktail.idDrink}`} passHref>
              <div className="bg-white p-4 rounded shadow-md cursor-pointer">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-48 object-cover rounded mb-4" />
                <h2 className="text-lg font-bold">{cocktail.strDrink}</h2>
                <p className="text-gray-600">{cocktail.strCategory}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CocktailsBySpirit;
