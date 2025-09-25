"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const featureCards = [
  {
    title: "Service & Customer Management",
    description:
      "Easily manage service requests, track job progress, and keep detailed customer profiles to deliver a more personalized and efficient experience.",
    image: "https://c.animaapp.com/mfy04u6czwQT7C/img/image-165.png",
    delay: "400ms",
  },
  {
    title: "Financial Control",
    description:
      "Stay on top of your finances with invoicing, payment tracking, expense management, and smart reports for better budgeting and forecasting.",
    image: "https://c.animaapp.com/mfy04u6czwQT7C/img/image-167.png",
    delay: "600ms",
  },
  {
    title: "Human Resources (Handman)",
    description:
      "Automate staff management with centralized profiles, attendance tracking, scheduling, payroll, and onboarding, all in one seamless workflow.",
    image: "https://c.animaapp.com/mfy04u6czwQT7C/img/image-166.png",
    delay: "800ms",
  },
  {
    title: "Project & Task Management",
    description:
      "Plan projects, assign tasks, and track deadlines with AI-suggested priorities to keep your team focused on high-impact work.",
    image: "https://c.animaapp.com/mfy04u6czwQT7C/img/image-168.png",
    delay: "1000ms",
  },
  {
    title: "AI Insights & Automation",
    description:
      "Gain predictive analytics, smart suggestions, and automation rules that save time, reduce errors, and help you make better decisions.",
    image: "https://c.animaapp.com/mfy04u6czwQT7C/img/image-170.png",
    delay: "1200ms",
  },
  {
    title: "Marketplace & B2B Network",
    description:
      "Connect with partners, discover tools, and join a community of businesses through matchmaking, webinars, and industry discussions.",
    image: "https://c.animaapp.com/mfy04u6czwQT7C/img/image-169.png",
    delay: "1400ms",
  },
];

export const PricingSection = (): JSX.Element => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-8">
        {/* Header Section - Centered */}
        <div className="flex flex-col items-center gap-6 mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <div className="w-16 h-0.5 bg-[#010509]"></div>
            <div className="font-['Inter'] font-normal text-[#010509] text-xl tracking-widest">
              Key Features
            </div>
            <div className="w-16 h-0.5 bg-[#010509]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#010509]">
            Everything Your{" "}
            <span className="text-[#1170B9]">Business Needs</span>
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl mx-auto font-['Inter']">
            LoleLink organizes your operations into clear, powerful, AI-powered modules that work together seamlessly.
          </p>
        </div>

        {/* Features Grid - Centered with better spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featureCards.map((card, index) => (
            <Card
              key={`feature-${card.title}-${index}`}
              className={`w-full max-w-[350px] mx-auto h-[380px] bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                hoveredCard === index ? 'ring-2 ring-[#1170B9] ring-opacity-50 border-[#1170B9]' : ''
              } hover:scale-105 hover:border-[#1170B9]`}
              style={{ "--animation-delay": card.delay } as React.CSSProperties}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                alert(`Learn more about ${card.title}`);
              }}
            >
              <CardContent className="p-6 h-full flex flex-col items-center">
                {/* Icon Container */}
                <div className="flex justify-center pt-6 pb-4">
                  <div className={`p-4 bg-gray-50 rounded-2xl transition-all duration-300 ${
                    hoveredCard === index ? 'bg-[#1170B9]/10 scale-110' : ''
                  }`}>
                    <img
                      className="w-16 h-16 object-cover transition-transform duration-300"
                      alt="Feature icon"
                      src={card.image}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 flex-1 justify-between text-center">
                  <h3 className="font-['Inter'] font-semibold text-[#0d1a39] text-xl leading-tight">
                    {card.title}
                  </h3>

                  <p className="font-['Inter'] font-normal text-neutral-700 text-base leading-relaxed">
                    {card.description}
                  </p>

                  {/* Learn More Button */}
                  <button className="text-[#1170B9] font-medium hover:text-blue-700 transition-colors duration-300 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    Learn More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-[#1170B9] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Features
          </button>
        </div>
      </div>
    </section>
  );
};