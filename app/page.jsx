"use client";
import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Booze Blender</title>
        <meta name="description" content="Discover Amazing Cocktails Anytime, Anywhere" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Booze Blender" />
        <meta property="og:description" content="Discover Amazing Cocktails Anytime, Anywhere" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://boozeblender.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <Navbar />

      <section id="hero" className="bg-brown-800 text-white text-center py-20" style={{ backgroundImage: `url(/images/hero-background.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="text-4xl md:text-6xl font-bold">Discover Amazing Cocktails Anytime, Anywhere</h1>
        <p className="mt-4 text-lg md:text-2xl">Explore recipes, create your own, and manage your bar inventory with ease.</p>
        <a href="/app" className="mt-8 inline-block bg-orange-400 text-white px-6 py-3 rounded hover:bg-orange-500">Launch App</a>
      </section>

   

      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Discover New Cocktails</h3>
              <p>Find and explore a wide variety of cocktail recipes from around the world.</p>
            </div>
            <div className="feature bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Create Custom Recipes</h3>
              <p>Customize and save your unique cocktail creations to share with friends.</p>
            </div>
            <div className="feature bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Manage Ingredients</h3>
              <p>Keep track of your bar inventory with our easy-to-use ingredient manager.</p>
            </div>
            <div className="feature bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Personalized Recommendations</h3>
              <p>Get cocktail suggestions tailored to your taste preferences.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <ol className="mt-8 space-y-4">
            <li>1. Browse or search for cocktail recipes.</li>
            <li>2. Add ingredients to your bar.</li>
            <li>3. Create and save your own recipes.</li>
            <li>4. Get personalized recommendations based on your preferences.</li>
          </ol>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Why Choose Booze Blender?</h2>
          <ul className="mt-8 space-y-4">
            <li>Convenience: Access recipes and manage your bar on the go.</li>
            <li>Fun and Discovery: Discover new and exciting cocktails to enjoy and share.</li>
            <li>Personalization: Enjoy a tailored cocktail experience with recommendations based on your taste.</li>
          </ul>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <div className="mt-8 space-y-6">
            <div className="testimonial bg-white p-6 rounded shadow-md">
              <p>"Booze Blender is amazing! I've discovered so many new cocktails." - Jane Doe</p>
            </div>
            <div className="testimonial bg-white p-6 rounded shadow-md">
              <p>"The personalized recommendations are spot on!" - John Smith</p>
            </div>
          </div>
        </div>
      </section>

      <section id="installation" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Get Booze Blender as a PWA</h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold">For Android:</h3>
              <ol className="mt-2 space-y-2">
                <li>1. Open Booze Blender in Chrome.</li>
                <li>2. Tap the menu button and select 'Add to Home Screen.'</li>
                <li>3. Follow the prompts to install.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold">For iOS:</h3>
              <ol className="mt-2 space-y-2">
                <li>1. Open Booze Blender in Safari.</li>
                <li>2. Tap the share button and select 'Add to Home Screen.'</li>
                <li>3. Follow the prompts to install.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold">For Desktop:</h3>
              <ol className="mt-2 space-y-2">
                <li>1. Open Booze Blender in Chrome.</li>
                <li>2. Click the install icon in the address bar.</li>
                <li>3. Follow the prompts to install.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <form className="mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="block">Name:</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block">Email:</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block">Message:</label>
              <textarea id="message" name="message" className="w-full border border-gray-300 p-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-brown-800 text-white px-4 py-2 rounded hover:bg-brown-900">Send</button>
          </form>
          <p className="mt-8">Follow us on <a href="#" className="text-orange-400 hover:underline">Facebook</a>, <a href="#" className="text-orange-400 hover:underline">Instagram</a>, and <a href="#" className="text-orange-400 hover:underline">Twitter</a>.</p>
        </div>
      </section>

      <footer className="bg-brown-800 text-white text-center py-6">
        <ul className="space-y-4 md:space-y-0 md:space-x-8 md:flex md:justify-center">
          <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
          <li><a href="#social" className="hover:underline">Follow Us</a></li>
        </ul>
        <p className="mt-4">Contact: support@boozeblender.com</p>
      </footer>
    </div>
  );
}
