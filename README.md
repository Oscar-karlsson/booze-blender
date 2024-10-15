Booze Blender - Cocktail Recipe App

Booze Blender is a cocktail recipe app built with Next.js and Tailwind CSS. It allows users to search for and filter cocktail recipes, fetching data from the CocktailDB API. The app is designed for fast loading and a responsive, user-friendly interface.
Features

    Search & Filter: Users can search for cocktails by name or filter by ingredients.
    Real-time Data: Recipes are fetched from the CocktailDB API in real-time.
    Responsive Design: Built with Tailwind CSS to ensure a seamless experience on any device.
    Server-Side Rendering: Utilizes Next.js for server-side rendering for better performance and SEO.

Getting Started

To get started with development, follow these instructions:
Prerequisites

Ensure that you have Node.js installed on your machine.
Installation

    Clone the repository:

    bash

git clone https://github.com/your-username/booze-blender.git
cd booze-blender

Install the dependencies:

bash

    npm install

Running the Development Server

To run the app in development mode:

bash

npm run dev

Open http://localhost:3000 with your browser to see the app in action.
Building for Production

To build the app for production, run:

bash

npm run build

API Integration

The app fetches cocktail data from the CocktailDB API. You will need an API key from CocktailDB:

    Sign up at CocktailDB to get your API key.
    Create a .env.local file at the root of your project and add your API key:

    makefile

    NEXT_PUBLIC_COCKTAIL_API_KEY=your_api_key_here

Folder Structure

    app/: Contains the core pages and components.
    public/: Static assets such as images and icons.
    lib/: Utility functions, including API request handling.
    tailwind.config.js: Configuration for Tailwind CSS.
    next.config.mjs: Next.js configuration.

Contributing

We welcome contributions! If you have any improvements or bug fixes, feel free to submit a pull request.
