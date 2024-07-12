"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getAdjustedMeasurement, isValidUnit } from '@/lib/conversionUtils';

const fetchCocktailDetails = async (cocktailId) => {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
  const data = await res.json();
  return data.drinks[0];
};

const CocktailDetail = () => {
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [servingSize, setServingSize] = useState(1);
  const [unit, setUnit] = useState('ml');

  useEffect(() => {
    if (cocktailId) {
      const getCocktailDetails = async () => {
        const details = await fetchCocktailDetails(cocktailId);
        setCocktail(details);
      };

      getCocktailDetails();
    }
  }, [cocktailId]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-64 object-cover rounded-lg shadow-md" />
      <div className="mt-4">
        <div className="bg-gray-100 p-2 rounded-lg shadow-md">
          <h2 className="mt-0 text-lg font-semibold">Ingredients:</h2>
          <div className="flex justify-between">
            <div>
              <div>Servings</div>
              <div className="flex mt-2 border-2 border-gray-300 rounded">
                {[1, 2, 3, 4].map(serving => (
                  <div
                    key={serving}
                    className={`w-8 h-8 flex items-center justify-center rounded ${serving === servingSize ? 'bg-blue-500 text-white' : ''} cursor-pointer`}
                    onClick={() => setServingSize(serving)}
                  >
                    {serving}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>Units</div>
              <div className="flex mt-2 border-2 border-gray-300 rounded">
                {['ml', 'cl', 'oz', 'part'].map(unitOption => (
                  <div
                    key={unitOption}
                    className={`w-10 h-8 flex items-center justify-center rounded ${unitOption === unit ? 'bg-blue-500 text-white' : ''} cursor-pointer`}
                    onClick={() => setUnit(unitOption)}
                  >
                    {unitOption}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <ul className="list-none list-inside">
              {Object.keys(cocktail)
                .filter(key => key.startsWith('strIngredient') && cocktail[key])
                .map((key, index) => (
                  <li key={index} className="text-gray-700">
                    {cocktail[key]}
                  </li>
                ))}
            </ul>
            <ul className="list-none ml-auto text-right">
              {Object.keys(cocktail)
                .filter(key => key.startsWith('strMeasure') && cocktail[key])
                .map((key, index) => (
                  <li key={index} className="text-gray-700">
                    {getAdjustedMeasurement(cocktail[key], servingSize, unit)}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <h2 className="mt-4 text-lg font-semibold">Instructions:</h2>
        <p className="mt-2 text-gray-700">{cocktail.strInstructions}</p>
      </div>
    </div>
  );
};

export default CocktailDetail;