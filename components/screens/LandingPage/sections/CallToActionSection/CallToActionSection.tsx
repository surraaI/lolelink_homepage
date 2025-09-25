"use client";

import React, { useState } from "react";

export const CallToActionSection = (): JSX.Element => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleStartTrial = () => {
    // Add your trial signup logic here
    alert('Free trial signup will be implemented!');
  };

  const handleWatchDemo = () => {
    // Add your demo video logic here
    alert('Demo video will be implemented!');
  };

  const handleVideoClick = () => {
    setIsVideoPlaying(!isVideoPlaying);
    // Add your video play logic here
    alert('Video player will be implemented!');
  };

  return (
    <section className="relative w-full py-20 bg-[#010509] overflow-hidden">
      {/* Digital Background Effect */}
      <div className="absolute inset-0 bg-[#010509]">
        {/* Subtle blue glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1170B9]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-[#1170B9]/10 rounded-full blur-3xl animate-pulse-medium"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#1170B9]/5 to-transparent animate-grid-shift grid-pattern" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          {/* Video Thumbnail */}
          <div className="relative mb-12 group cursor-pointer" onClick={handleVideoClick}>
            <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black/60 rounded-2xl overflow-hidden border border-[#1170B9]/30 hover:border-[#1170B9]/60 transition-all duration-300 hover:scale-[1.02]">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1170B9]/20 to-[#0d5a9d]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#1170B9]/30 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 hover-glow">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm font-inter">Click to play demo video</p>
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between text-white text-sm font-inter">
                  <span>LoleLink Platform Demo</span>
                  <span>2:45</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                  <div className="bg-[#1170B9] h-1 rounded-full w-1/3"></div>
                </div>
              </div>

              {/* Play button glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#1170B9]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] font-sora">
            See LoleLink in Action
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] font-inter">
            Try our live demo and discover how LoleLink can transform your business operations with AI-powered automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <button 
              onClick={handleStartTrial}
              className="px-8 py-4 bg-[#1170B9] text-white font-semibold rounded-lg hover:bg-[#0d5a9d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 font-inter animate-button-glow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Start Free Trial
            </button>
            
            <button 
              onClick={handleWatchDemo}
              className="btn-digital px-8 py-4 border border-[#1170B9] text-white font-semibold rounded-lg hover:bg-[#1170B9]/10 transition-all duration-300 active:scale-95 flex items-center gap-2 font-inter"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Watch Full Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <div className="text-center p-4 rounded-lg bg-[#1170B9]/5 border border-[#1170B9]/10 hover-lift">
              <div className="text-2xl font-bold text-white mb-2 font-sora">No Credit Card</div>
              <div className="text-gray-400 text-sm font-inter">Required for trial</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-[#1170B9]/5 border border-[#1170B9]/10 hover-lift">
              <div className="text-2xl font-bold text-white mb-2 font-sora">5 Minutes</div>
              <div className="text-gray-400 text-sm font-inter">Setup time</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-[#1170B9]/5 border border-[#1170B9]/10 hover-lift">
              <div className="text-2xl font-bold text-white mb-2 font-sora">24/7 Support</div>
              <div className="text-gray-400 text-sm font-inter">Always available</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <p className="text-gray-400 text-sm font-inter">
              Join 500+ African SMEs already transforming their business with LoleLink
            </p>
          </div>
        </div>
      </div>

      {/* Floating elements for depth */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-[#1170B9]/20 rounded-full animate-float-slow blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-[#1170B9]/20 rounded-full animate-float-medium blur-sm"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-[#1170B9]/20 rounded-full animate-float-fast blur-sm"></div>
    </section>
  );
};