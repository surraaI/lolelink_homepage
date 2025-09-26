import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      title: "All-in-One Platform",
      description:
        "Say goodbye to juggling multiple apps. LoleLink brings finance, HR, projects, and customer management into one place.",
      delay: "200ms",
    },
    {
      title: "AI-Driven Efficiency",
      description:
        "From task prioritization to predictive analytics, our AI works in the background to save time and maximize results.",
      delay: "400ms",
    },
    {
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security keeps your data safe, while cloud-based access means you can work anywhere.",
      delay: "600ms",
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left side - Header */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <span className="text-[#1170B9] text-sm md:text-base tracking-[0.3em] leading-7 [font-family:'Satoshi-Regular',Helvetica] font-normal">
                Why Us?
              </span>
              <div className="w-40 md:w-[213.76px] h-[2.56px] bg-gradient-to-r from-[#1170B9] to-[#25D0AB]"></div>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[61.4px] leading-tight md:leading-[73.7px] [font-family:'Sora',Helvetica] font-bold mb-4 md:mb-6">
              Choose us is the right way!
            </h2>

            <p className="text-gray-200 text-base md:text-lg leading-7 md:leading-[34.6px] [font-family:'Satoshi-Medium',Helvetica] font-medium max-w-[486px]">
              When you choose LoleLink, simplifies your business operations,
              automates routine tasks, and uses AI-driven insights to help you
              grow smarter and faster.
            </p>
          </div>

          {/* Right side - Features */}
          <div className="space-y-10 md:space-y-12 lg:space-y-16">
            {features.map((feature, index) => (
              <div
                key={`feature-${feature.title}-${index}`}
                className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${feature.delay}]`}
              >
                <div className="space-y-5">
                  <h3 className="text-white text-lg md:text-2xl leading-7 md:leading-[39.6px] tracking-[-0.5px] md:tracking-[-0.99px] [font-family:'Manrope',Helvetica] font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 text-base md:text-lg leading-7 md:leading-[35.6px] tracking-[-0.3px] md:tracking-[-0.99px] [font-family:'Manrope',Helvetica] font-medium max-w-[421px]">
                    {feature.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-[#007bff] hover:text-[#0056b3] font-others-button-r transition-colors"
                  >
                    <span className="mr-2">Read More</span>
                    <ArrowUpRightIcon className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
