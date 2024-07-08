import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleStateChange = (state) => {
      setIsOpen(state.isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (isOpen && !event.target.closest('.bm-menu-wrap')) {
          closeMenu();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);
  
    return (
      <Menu right isOpen={isOpen} onStateChange={handleStateChange}>
        <Link href="#features">
          <span className="menu-item" onClick={closeMenu}>Features</span>
        </Link>
        <Link href="#how-it-works">
          <span className="menu-item" onClick={closeMenu}>How It Works</span>
        </Link>
        <Link href="#benefits">
          <span className="menu-item" onClick={closeMenu}>Benefits</span>
        </Link>
        <Link href="#testimonials">
          <span className="menu-item" onClick={closeMenu}>Testimonials</span>
        </Link>
        <Link href="#contact">
          <span className="menu-item" onClick={closeMenu}>Contact</span>
        </Link>
        <Link href="/app">
          <span className="menu-item" onClick={closeMenu}>Launch App</span>
        </Link>
      </Menu>
    );
  };
  

export default HamburgerMenu;