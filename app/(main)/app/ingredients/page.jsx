"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchIngredients } from '@/lib/api';
import ingredientTypes from '@/lib/ingredientTypes';

// Define the mapping object for background colors
const backgroundColorMap = {
    'Spirit': 'bg-blue-100',
    'Juice': 'bg-green-100',
    'Liqueur': 'bg-purple-100',
    'Fruit': 'bg-red-100',
    'Mixer': 'bg-yellow-100',
    'Herb': 'bg-teal-100',
    'Vegetable': 'bg-orange-100',
    'Dairy': 'bg-pink-100',
    'Syrup': 'bg-brown-100',
    'Soda': 'bg-gray-100',
    'Wine': 'bg-indigo-100',
    'Tea': 'bg-lime-100',
    'Coffee': 'bg-amber-100',
    'Water': 'bg-light-blue-100',
    'Garnish': 'bg-purple-100',
    'Beer': 'bg-amber-100',
    'Non-Alcoholic': 'bg-gray-200',
};

// Function to get the background color based on the type
const getBackgroundColor = (type) => {
    return backgroundColorMap[type] || 'bg-gray-100'; // Default color if type is not found
};

const IngredientsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadIngredients = async () => {
            setIsLoading(true);
            const ingredientsData = await fetchIngredients();
            const enhancedIngredients = ingredientsData.map(ingredient => {
                const nameKey = ingredient.strIngredient1.replace(/ /g, '_');
                const details = ingredientTypes.ingredients.find(item => item.name.replace(/ /g, '_') === nameKey) || {};
                return {
                    ...ingredient,
                    type: details.type || 'Unknown',
                    shortDescription: details.shortDescription || 'No description available'
                };
            });
    
            // Sort the ingredients alphabetically by their names
            enhancedIngredients.sort((a, b) => a.strIngredient1.localeCompare(b.strIngredient1));
    
            setIngredients(enhancedIngredients);
            setIsLoading(false);
        };
    
        loadIngredients();
    }, []);
    const filteredIngredients = ingredients.filter(ingredient =>
        ingredient.strIngredient1.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen p-4">
            <header className="bg-brown-800 text-white p-4">
                <h1 className="text-2xl font-bold text-black mb-4">Ingredients</h1>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Search for ingredients..."
                        className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:border-orange-400 text-black bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredIngredients.map(ingredient => (
                    <div 
                        key={ingredient.strIngredient1} 
                        className={`bg-white p-4 rounded shadow-md flex items-center transform transition duration-500 ease-in-out hover:bg-gray-200 hover:scale-105 cursor-pointer ${getBackgroundColor(ingredient.type)}`}
                    >
                        <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png`} alt={ingredient.strIngredient1} className="mr-4" style={{height: '100%'}} />
                        <div>
                            <h2 className="text-lg font-bold">{ingredient.strIngredient1}</h2>
                            <p className="text-gray-600">{ingredient.shortDescription}</p>
                            <Link href={`/ingredient/${ingredient.strIngredient1.toLowerCase()}`} className="text-orange-400 hover:text-orange-500">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {isLoading && <div className="text-center mt-4">Loading ingredients...</div>}
        </div>
    );
};

export default IngredientsPage;
