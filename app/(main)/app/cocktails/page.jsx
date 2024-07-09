"use client";
import React, { useState } from 'react';
import CocktailFilter from '../components/CocktailFilter';
import Link from 'next/link';
import { IoFilter } from "react-icons/io5";

const CocktailsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: [{ value: 'name', label: 'Name' }],
  });
  const [searchTerm, setSearchTerm] = useState('');

  const openFilterModal = () => {
    setIsFilterOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterOpen(false);
  };

  

  return (
    <div className="min-h-screen p-4">
    <header className="bg-brown-800 text-white p-4">
      <h1 className="text-2xl font-bold text-black mb-4">Cocktails</h1>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search for cocktails..."
          className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:border-orange-400"
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
      />

      {/* The rest of your cocktails page content */}
    </div>
  );
};



export default CocktailsPage;