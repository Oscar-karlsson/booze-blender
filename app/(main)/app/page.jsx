"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchCocktails, fetchBaseSpirits, fetchCocktailTypes, fetchCocktailById } from '@/lib/api';



const baseSpiritsList = [
  'Vodka', 
  'Gin', 
  'Rum', 
  'Tequila', 
  'Whiskey', 
  'Brandy',
];


const cocktailTypesNames = {
  'Ordinary Drink': 'Classic Cocktails',
  'Cocktail': 'Fancy Cocktails',
  'Milk / Float / Shake': 'Creamy Cocktails',
  // 'Cocoa': 'Chocolate Cocktails',
  'Shot': 'Shots',
  // 'Coffee / Tea': 'Coffee & Tea Cocktails',
  // 'Homemade Liqueur': 'Homemade Liqueurs',
  'Punch / Party Drink': 'Party Punches',
  'Soft Drink / Soda': 'Non-Alcoholic Cocktails'
  // 'Other/Unknown': 'Unique Cocktails'
};

const cocktailTypeImageMap = {
  'Ordinary Drink': '/images/classic-cocktails.png',
  'Cocktail': '/images/fancy-cocktails.png',
  'Milk / Float / Shake': '/images/creamy-cocktails.png',
  'Cocoa': '/images/chocolate-cocktails.svg',
  'Shot': '/images/shots.png',
  'Coffee / Tea': '/images/coffee-tea-cocktails.svg',
  'Homemade Liqueur': '/images/homemade-liqueurs.svg',
  'Punch / Party Drink': '/images/party-punches.png',
  'Soft Drink / Soda': '/images/non-alcoholic-cocktails.png',
  'Other/Unknown': '/images/unique-cocktails.svg'
};

const getCocktailTypeImageUrl = (type) => {
  return cocktailTypeImageMap[type] || '/images/default.svg';
};

const getIngredientImageUrl = (ingredientName, size = "Small") => 
  `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-${size}.png`;

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [baseSpirits, setBaseSpirits] = useState([]); 

  useEffect(() => {
    const getFeaturedCocktails = async () => {
      try {
        const response = await fetch('/featuredCocktails.json');
        const ids = await response.json();
        const drinks = await Promise.all(ids.map(id => fetchCocktailById(id)));
        setCocktails(drinks);
      } catch (error) {
        console.error('Error fetching featured cocktails:', error);
      }
    };

    const getCategories = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/list.php?c=list`);
        const data = await response.json();
        setCategories(data.drinks);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const getBaseSpirits = async () => {
      try {
        const ingredientsList = await fetchBaseSpirits();
        const filteredBaseSpirits = ingredientsList.filter(ingredient =>
          baseSpiritsList.includes(ingredient.strIngredient1)
        );
        setBaseSpirits(filteredBaseSpirits);
      } catch (error) {
        console.error('Error fetching base spirits:', error);
      }
    };

    getFeaturedCocktails();
    getCategories();
    getBaseSpirits();
  }, []);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="min-h-screen p-4">
      <header className="bg-brown-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Discover</h1>
      </header>
      
      <div className="container mx-auto mt-6">
        
        
        <section className="mb-8">
  <h2 className="text-xl font-bold mb-4">Featured Cocktails</h2>
  <Slider {...settings} key={cocktails.length}>
  {cocktails.map((cocktail) => (
      <div key={cocktail.idDrink} className="p-2">
        <div className="bg-white">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="w-full object-cover rounded-t"
          />
        <div className="p-4 rounded-b">
  <h3 className="text-lg font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{cocktail.strDrink}</h3>
  <p className="text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis">{cocktail.strCategory}</p>
</div>
        </div>
      </div>
    ))}
  </Slider>
</section>


        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Base Spirits</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {baseSpirits.map((ingredient) => (
              <Link href={`/ingredient/${ingredient.strIngredient1}`} key={ingredient.strIngredient1} className="bg-white rounded shadow p-4 text-center hover:bg-orange-100">
             <img
  src={getIngredientImageUrl(ingredient.strIngredient1, 'Medium')}
  alt={ingredient.strIngredient1}
  className="w-full h-48 object-contain rounded mb-4"
/>
                {ingredient.strIngredient1}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Cocktail Types</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Object.keys(cocktailTypesNames).map((type) => (
              <Link href={`/category/${type}`} key={type} className="bg-white rounded shadow p-4 text-center hover:bg-orange-100">
                <img
                  src={getCocktailTypeImageUrl(type)}
                  alt={type}
                  className="w-full h-48 object-contain rounded mb-4"
                />
                {cocktailTypesNames[type]}
              </Link>
            ))}
          </div>
        </section>





      </div>
    </div>
  );
};

export default Discover;
