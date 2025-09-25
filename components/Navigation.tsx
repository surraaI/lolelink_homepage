"use client";

import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle sign up click
  const handleSignUp = () => {
    // Add your sign up logic here
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Handle logo click
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#010509]/95 backdrop-blur-lg border-b border-[#1170B9]/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Same as footer */}
          <button 
            className="flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1170B9] focus:ring-opacity-50 rounded-lg p-2 transition-transform duration-300 hover:scale-105"
            onClick={handleLogoClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleLogoClick();
              }
            }}
            aria-label="Go to top"
          >
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <img
                  className="w-full h-full object-cover"
                  alt="LoleLink logo"
                  src="https://c.animaapp.com/mfy04u6czwQT7C/img/image-2.png"
                />
              </div>
              <span className="text-2xl font-bold text-white font-['Sora']">LoleLink</span>
            </div>
          </button>

          {/* Desktop Sign Up Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleSignUp}
              className="relative px-8 py-3 bg-[#010509] border border-[#1170B9] text-white font-semibold rounded-lg group overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(17,112,185,0.4)] font-['Inter']"
            >
              {/* Extended Animated lines on sides with gradient fade */}
              <div className="absolute left-0 top-1/2 w-8 h-px transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-left-4 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-[#1170B9] to-[#1170B9] opacity-60" />
              </div>
              <div className="absolute right-0 top-1/2 w-8 h-px transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-right-4 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-l from-transparent via-[#1170B9] to-[#1170B9] opacity-60" />
              </div>
              
              Sign Up
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#1170B9] rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#1170B9] focus:outline-none focus:text-[#1170B9] transition-colors duration-200 p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in bg-[#010509]/95 backdrop-blur-lg border-t border-[#1170B9]/20 mt-2 rounded-lg">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <button 
                onClick={handleSignUp}
                className="w-full relative px-6 py-3 bg-[#010509] border border-[#1170B9] text-white font-semibold rounded-lg group overflow-hidden transition-all duration-300"
              >
                {/* Animated lines for mobile button */}
                <div className="absolute left-0 top-1/2 w-6 h-px transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-left-3 transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-[#1170B9] to-[#1170B9] opacity-60" />
                </div>
                <div className="absolute right-0 top-1/2 w-6 h-px transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-right-3 transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-l from-transparent via-[#1170B9] to-[#1170B9] opacity-60" />
                </div>
                Sign Up
              </button>
              
              {/* Quick links for mobile */}
              <div className="flex justify-center space-x-6 pt-2">
                <a 
                  href="#pricing" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSignUp();
                  }}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Subtle bottom glow when scrolled */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1170B9] to-transparent opacity-30"></div>
      )}
    </nav>
  );
};