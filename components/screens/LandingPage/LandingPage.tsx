"use client";

import React, { useEffect, useRef } from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FaqSection } from "./sections/FaqSection/FaqSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HowItWorksSection } from "./sections/HowItWorksSection/HowItWorksSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";
import { Navigation } from "../../Navigation";
import { ScrollAnimation } from "../../ScrollAnimation";

// Digital Background Component
type StreamLine = {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
};

const DigitalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Digital stream lines configuration
    const lines: StreamLine[] = [];
    const lineCount = 50;
    const maxLineLength = 3;
    const speed = 0.5;

    // Initialize lines
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * maxLineLength + 1,
        speed: Math.random() * speed + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      // Clear the canvas to keep the background image visible
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach(line => {
        // Move line downward
        line.y += line.speed;
        
        // Reset if off screen
        if (line.y > canvas.height) {
          line.y = -line.length;
          line.x = Math.random() * canvas.width;
        }

        // Draw line
        ctx.strokeStyle = `rgba(17, 112, 185, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

// Animated Button Component
type AnimatedButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const AnimatedButton = ({ children, onClick }: AnimatedButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="relative px-8 py-4 bg-transparent border border-[#1170B9] text-white font-semibold rounded-lg group overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(17,112,185,0.3)] font-['Inter']"
    >
      {/* Extended Animated lines on sides with gradient fade */}
      <div className="absolute left-0 top-1/2 w-12 h-px transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-left-6 transition-all duration-500">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#1170B9] to-[#1170B9] opacity-60" />
      </div>
      <div className="absolute right-0 top-1/2 w-12 h-px transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-right-6 transition-all duration-500">
        <div className="w-full h-full bg-gradient-to-l from-transparent via-[#1170B9] to-[#1170B9] opacity-60" />
      </div>
      
      {children}
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#1170B9] rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />
    </button>
  );
};

export const LandingPage = (): JSX.Element => {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      
      <main
        className="flex flex-col w-full items-center relative bg-transparent z-10"
        data-model-id="25:28"
      >
      {/* Hero Section */}
<section id="home" className="relative w-full min-h-screen flex items-center justify-center py-20 pt-48 overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 -z-10">
    <img
      src="/images/video.png"
      alt="Hero background"
      className="w-full h-full object-cover"
    />
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/50 md:bg-black/60 lg:bg-black/70" />
  </div>
  {/* Digital Background */}
  <DigitalBackground />
  
  {/* Hero Content */}
  <div className="relative z-10 w-full max-w-6xl mx-auto px-8 text-center">
    <div className="translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:400ms]">
      {/* Solution For Tomorrow Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight font-['Inter']">
        Solution For Tomorrow
      </h1>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-['Inter']">
        Your AI-Powered Business<br />
        Partner for{' '}
        <span className="text-[#1170B9]">Smarter Growth</span>
      </h2>

      {/* Supporting Text */}
      <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-['Inter'] opacity-90">
        Manage HR, Finance, Sales, Projects & more, all-in-one evolving platform designed for Africa's SMEs.
      </p>

       {/* CTA Button */}
       <div className="flex justify-center items-center">
        <AnimatedButton 
          onClick={() => {
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) {
              pricingSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Get Started
        </AnimatedButton>
      </div>

      {/* Image Composition - same relative positions, responsive sizes */}
      <div className="relative w-full max-w-7xl mx-auto -mt-6 sm:-mt-10 mb-12 md:mb-16 h-[40rem] sm:h-[48rem] md:h-[60rem]">
          {/* Main Center Image (Image 3.png) with Shine Effect */}
          <div className="absolute left-1/2 top-[58%] sm:top-[60%] md:top-[62%] transform -translate-x-1/2 -translate-y-1/2 z-0 relative">
            {/* Radial Shine Effect - More natural and attractive */}
            <div className="pointer-events-none absolute inset-0 z-0">
              {/* Main radial glow */}
              <div className="absolute inset-[-50px] bg-radial-gradient from-[#1170B9]/30 via-[#1170B9]/10 to-transparent rounded-lg blur-xl opacity-70"></div>
              {/* Secondary subtle glow */}
              <div className="absolute inset-[-30px] bg-radial-gradient from-[#1170B9]/20 via-transparent to-transparent rounded-lg blur-lg opacity-50"></div>
              {/* Edge highlights */}
              <div className="absolute -inset-4 border border-[#1170B9]/20 rounded-lg blur-sm"></div>
            </div>

            <img
              src="/images/image-3.png"
              alt="Main Platform Preview"
              className="relative z-10 max-w-none w-[80vw] md:w-[60vw] h-auto shadow-[0_0_60px_rgba(17,112,185,0.6)] hover:shadow-[0_0_80px_rgba(17,112,185,0.8)] transition-all duration-500 transform hover:scale-105"
            />

            {/* Animated pulse effect */}
            <div className="pointer-events-none absolute inset-0 z-5">
              <div className="absolute inset-0 bg-radial-gradient from-[#1170B9]/40 via-transparent to-transparent rounded-lg animate-pulse-slow"></div>
            </div>
          </div>

          {/* Bottom Left Corner of Main Image (Image 4.png) */}
          <div className="absolute left-[-6%] sm:left-[-2%] md:left-0 top-[78%] sm:top-[79%] md:top-[81%] transform -translate-x-[47px] sm:-translate-x-[39px] md:-translate-x-[31px] -translate-y-1/2 z-10">
            <div className="relative origin-left scale-[0.6] sm:scale-[0.75] md:scale-[0.9] lg:scale-100">
              {/* Mini shine effect for small images */}
              <div className="pointer-events-none absolute -inset-4 bg-radial-gradient from-[#1170B9]/20 via-transparent to-transparent rounded-lg blur-md opacity-50"></div>
              <img
                src="/images/image-4.png"
                alt="Mobile App Preview"
                className="relative z-10 h-auto w-auto max-w-[14rem] sm:max-w-[16rem] md:max-w-none shadow-[0_0_30px_rgba(17,112,185,0.4)] hover:shadow-[0_0_40px_rgba(17,112,185,0.6)] transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Middle of Main Image (Image 5.png) */}
          <div className="absolute right-[-2%] sm:right-[-4%] md:right-[-6%] lg:right-[-10%] top-[62%] sm:top-[64%] md:top-[66%] transform -translate-y-1/2 z-10">
            <div className="relative origin-right scale-[0.6] sm:scale-[0.75] md:scale-[0.9] lg:scale-100">
              {/* Mini shine effect for small images */}
              <div className="pointer-events-none absolute -inset-4 bg-radial-gradient from-[#1170B9]/20 via-transparent to-transparent rounded-lg blur-md opacity-50"></div>
              <img
                src="/images/image-5.png"
                alt="Dashboard Preview"
                className="relative z-10 h-auto w-auto max-w-[18rem] sm:max-w-[20rem] md:max-w-none shadow-[0_0_30px_rgba(17,112,185,0.4)] hover:shadow-[0_0_40px_rgba(17,112,185,0.6)] transition-all duration-300"
              />
            </div>
          </div>

          {/* Subtle Connection Glows */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Glow line from Image 4 to Image 3 */}
            <div className="absolute left-[15%] top-[78%] w-48 h-px bg-gradient-to-r from-transparent via-[#1170B9]/30 to-transparent opacity-40 transform rotate-45 origin-bottom-left blur-sm"></div>
            {/* Glow line from Image 5 to Image 3 */}
            <div className="absolute right-[12%] top-[68%] w-48 h-px bg-gradient-to-l from-transparent via-[#1170B9]/30 to-transparent opacity-40 transform -rotate-45 origin-top-right blur-sm"></div>
          </div>
        </div>
      </div>
    </div>

  {/* Floating Elements */}
  <div className="absolute top-20 left-20 w-32 h-32 bg-[#1170B9]/10 rounded-full animate-float-slow blur-sm"></div>
  <div className="absolute top-40 right-32 w-24 h-24 bg-[#1170B9]/10 rounded-full animate-float-medium blur-sm"></div>
  <div className="absolute bottom-32 left-40 w-40 h-40 bg-[#1170B9]/10 rounded-full animate-float-fast blur-sm"></div>
</section>
        

      {/* What Is LoleLink Section */}
      <section id="about" className="relative w-full py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-8">
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Inter']">
                What Is LoleLink?
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 font-['Inter']">
                One Smart Platform to Run Your Entire Business
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 font-['Inter']">
                LoleLink combines AI-powered automation, real-time insights, and integrated tools to replace manual work with smart, connected workflows.
              </p>
            </div>
          </ScrollAnimation>

          {/* Two-column: vertical list left, animated image right */}
          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors hover-lift font-['Inter']">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 min-w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Finance</h4>
                      <p className="text-gray-600 text-sm">Track income, expenses, and invoices in real time.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors hover-lift font-['Inter']">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 min-w-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">HR</h4>
                      <p className="text-gray-600 text-sm">Manage teams, payroll, and leave requests effortlessly.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors hover-lift font-['Inter']">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 min-w-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Sales & CRM</h4>
                      <p className="text-gray-600 text-sm">Follow leads, close deals faster.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors hover-lift font-['Inter']">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 min-w-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Projects</h4>
                      <p className="text-gray-600 text-sm">Assign tasks, track progress, meet deadlines.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-6 bg-gradient-to-tr from-blue-200/30 via-blue-100/20 to-transparent rounded-3xl blur-xl"></div>
                <img
                  src="/images/image 163.png"
                  alt="LoleLink preview"
                  className="relative w-full h-auto rounded-2xl shadow-[0_0_40px_rgba(17,112,185,0.35)] transition-transform duration-700 ease-out will-change-transform hover:rotate-1 hover:scale-[1.03] animate-float-medium"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#1170B9]/20"></div>
              </div>
            </div>
          </ScrollAnimation>

          {/* AI Workflow Automation */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 font-['Inter']">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">AI Workflow Automation</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate repetitive and time-consuming tasks with our AI-powered workflow automation
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative w-full translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:800ms]">
        <PricingSection />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="relative w-full translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:1000ms]">
        <WhyChooseUsSection />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative w-full translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:1200ms]">
        <HowItWorksSection />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative w-full translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:1400ms]">
        <FaqSection />
      </section>

      {/* Call To Action Section */}
      <section id="contact" className="relative w-full translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:1600ms]">
        <CallToActionSection />
      </section>

      {/* Footer Section */}
      <footer className="relative w-full translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:1800ms]">
        <FooterSection />
      </footer>
      </main>
    </>
  );
};