"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { fetchCocktailsByCategory } from '@/lib/api'; // Ensure you have this function or create it
import cocktailCategories from '@/lib/cocktailCategories';


const CocktailTypePage = () => {
    const { cocktailType } = useParams();
    const decodedType = decodeURIComponent(cocktailType).replace(/-/g, ' ').toLowerCase();
    const category = Object.keys(cocktailCategories).find(key => 
      cocktailCategories[key].toLowerCase() === decodedType
    );
    
    // Added Logs
    console.log('Cocktail Type:', cocktailType);
    console.log('Decoded Type:', decodedType);
    console.log('Mapped Category:', category);

    const [cocktails, setCocktails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (category) {
        const loadCocktails = async () => {
          setIsLoading(true);
          try {
            const cocktailsData = await fetchCocktailsByCategory(category);
            console.log('Fetched Cocktails Data:', cocktailsData); // Added Log
            setCocktails(cocktailsData);
          } catch (error) {
            console.error('Error fetching cocktails:', error); // Added Log
          } finally {
            setIsLoading(false);
          }
        };

        loadCocktails();
      } else {
        console.error('Category not found for type:', decodedType); // Added Log
      }
    }, [category]);

    if (isLoading) {
      return <div className="text-center mt-4">Loading cocktails...</div>;
    }

    if (!cocktails.length) {
      return <div className="text-center mt-4">No cocktails found for {cocktailCategories[category]}.</div>;
    }

    return (
      <div className="min-h-screen p-4">
        <header className="bg-brown-800 text-white p-4">
          <h1 className="text-2xl font-bold text-black mb-4">{cocktailCategories[category]} Cocktails</h1>
        </header>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cocktails.map(cocktail => (
            <Link href={`/app/cocktails/${cocktail.idDrink}`} passHref key={cocktail.idDrink}>
              <div className="bg-white rounded shadow-md cursor-pointer flex">
                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  className="h-full object-cover rounded-l"
                  style={{ width: '50%' }}
                />
                <div className="p-4 flex flex-col justify-between" style={{ width: '50%' }}>
                  <div>
                    <h2 className="text-lg font-bold">{cocktail.strDrink}</h2>
                    <p className="text-gray-600">{cocktail.strCategory}</p>
                  </div>
                  <div className="text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {Array.from({ length: 15 }).map((_, i) => (
                      cocktail[`strIngredient${i + 1}`] ? (
                        <span key={i} className="mr-1">
                          {cocktail[`strIngredient${i + 1}`]}
                          {i < 14 && cocktail[`strIngredient${i + 2}`] && ','}
                        </span>
                      ) : null
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
};


export default CocktailTypePage;
