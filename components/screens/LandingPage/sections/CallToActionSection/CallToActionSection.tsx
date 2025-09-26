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
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/video.jpg"
          alt="CTA background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 sm:bg-black/45 md:bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          {/* Removed video thumbnail; background image used instead */}
          <div className="mb-12" />

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] font-sora">
            See LoleLink in Action
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] font-inter">
            Try our live demo and discover how LoleLink can transform your business operations with AI-powered automation.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <button 
              onClick={handleStartTrial}
              className="relative px-8 py-3 bg-[#010509] border border-[#1170B9] text-white font-semibold rounded-lg group overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(17,112,185,0.4)] font-['Inter']"
            >
              {/* Fading lines like Sign Up */}
              <div className="absolute left-0 top-1/2 w-8 h-px transform -translate-y-1/2 opacity-60 group-hover:opacity-100 group-hover:-left-4 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-[#1170B9] to-[#1170B9]" />
              </div>
              <div className="absolute right-0 top-1/2 w-8 h-px transform -translate-y-1/2 opacity-60 group-hover:opacity-100 group-hover:-right-4 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-l from-transparent via-[#1170B9] to-[#1170B9]" />
              </div>
              Start
              <div className="absolute inset-0 border border-transparent group-hover:border-[#1170B9] rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
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