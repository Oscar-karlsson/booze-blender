"use client";
import { useState } from 'react';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
    return (
        <header className=" bg-navbarColor text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="text-xl font-bold">Booze Blender</div>
        <nav className="hidden md:flex space-x-4">
            <Link href="#features"><span className="hover:text-orange-400 cursor-pointer">Features</span></Link>
            <Link href="#how-it-works"><span className="hover:text-orange-400 cursor-pointer">How It Works</span></Link>
            <Link href="#benefits"><span className="hover:text-orange-400 cursor-pointer">Benefits</span></Link>
            <Link href="#testimonials"><span className="hover:text-orange-400 cursor-pointer">Testimonials</span></Link>
            <Link href="#contact"><span className="hover:text-orange-400 cursor-pointer">Contact</span></Link>
        </nav>
        <div className="flex items-center space-x-4 flex-nowrap">
            <Link href="/app">
                <span className="bg-orange-400 text-white px-3 py-2 rounded-3xl hover:bg-orange-500 cursor-pointer mr-8">Launch App</span>
            </Link>
            <div className="md:hidden">
                <HamburgerMenu />
            </div>
        </div>
    </header>
);
};
    
    
  

export default Navbar;