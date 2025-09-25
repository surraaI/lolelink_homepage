import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorksSection = (): JSX.Element => {
  const stepCards = [
    {
      id: 1,
      image: "https://c.animaapp.com/mfy04u6czwQT7C/img/01.png",
      title:
        "https://c.animaapp.com/mfy04u6czwQT7C/img/sign-up---connect-your-business.png",
      description:
        "Quickly create your account and link your existing tools, data, and workflows.",
      animationDelay: "400ms",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mfy04u6czwQT7C/img/02.png",
      title:
        "https://c.animaapp.com/mfy04u6czwQT7C/img/import---organize-your-data.png",
      description:
        "Bring in your customer, finance, and project details for a centralized workspace.",
      additionalImage:
        "https://c.animaapp.com/mfy04u6czwQT7C/img/image-164.png",
      animationDelay: "600ms",
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mfy04u6czwQT7C/img/03.png",
      title:
        "https://c.animaapp.com/mfy04u6czwQT7C/img/ai-analyzes---suggests-improvements.png",
      description:
        "LoleLink's AI scans operations, spots inefficiencies, and recommends smarter actions.",
      animationDelay: "800ms",
    },
    {
      id: 4,
      image: "https://c.animaapp.com/mfy04u6czwQT7C/img/04.png",
      title:
        "https://c.animaapp.com/mfy04u6czwQT7C/img/automate---monitor-in-real-time.png",
      description:
        "Put repetitive tasks on autopilot and watch your progress with live dashboards.",
      animationDelay: "1000ms",
    },
    {
      id: 5,
      image: "https://c.animaapp.com/mfy04u6czwQT7C/img/05.png",
      title:
        "https://c.animaapp.com/mfy04u6czwQT7C/img/grow-with-tools---a-powerful-network.png",
      description:
        "Expand your business with integrated services, B2B connections, and community events.",
      animationDelay: "1200ms",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#010509]">
      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-8">
        {/* Header and First Row Container */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-20">
          {/* Left Side - Title Section */}
          <div className="lg:w-2/5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <div className="w-16 h-0.5 bg-[#1170B9]"></div>
                <div className="font-['Inter'] font-normal text-white text-xl tracking-widest">
                  How It Works
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white font-['Sora']">
                Your Business, Simplified in{" "}
                <span className="text-[#1170B9]">5 Steps</span>
              </h2>

              <p className="text-lg text-gray-300 font-['Inter']">
                LoleLink organizes your operations into clear, powerful,
                AI-powered modules that work together seamlessly.
              </p>
            </div>
          </div>

          {/* Right Side - Steps 1 & 2 */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {stepCards.slice(0, 2).map((step) => (
              <Card
                key={step.id}
                className={`bg-[#010509] rounded-lg border border-[#181b1f] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#1170B9]/30 hover:scale-105 translate-y-[-1rem] animate-fade-in opacity-0 h-full`}
                style={
                  {
                    "--animation-delay": step.animationDelay,
                  } as React.CSSProperties
                }
              >
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex flex-col items-start gap-4">
                    <img
                      className={`w-24 h-16 object-contain`}
                      alt={`Step ${step.id}`}
                      src={step.image}
                    />

                    <div className="flex flex-col items-start gap-3 w-full">
                      <img
                        className="w-full max-w-[280px] h-8 object-contain"
                        alt={`Step ${step.id} title`}
                        src={step.title}
                      />

                      <p className="text-gray-300 text-sm leading-relaxed font-['Inter']">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {step.additionalImage && (
                    <img
                      className="w-full h-32 object-cover mt-2 rounded-lg"
                      alt="Additional visual"
                      src={step.additionalImage}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Second Row - Steps 3, 4 & 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {stepCards.slice(2, 5).map((step) => (
            <Card
              key={step.id}
              className={`bg-[#010509] rounded-lg border border-[#181b1f] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#1170B9]/30 hover:scale-105 translate-y-[-1rem] animate-fade-in opacity-0 h-full`}
              style={
                {
                  "--animation-delay": step.animationDelay,
                } as React.CSSProperties
              }
            >
              <CardContent className="p-6 flex flex-col gap-4 h-full">
                <div className="flex flex-col items-start gap-4">
                  <img
                    className="w-24 h-16 object-contain"
                    alt={`Step ${step.id}`}
                    src={step.image}
                  />

                  <div className="flex flex-col items-start gap-3 w-full">
                    <img
                      className="w-full max-w-[280px] h-8 object-contain"
                      alt={`Step ${step.id} title`}
                      src={step.title}
                    />

                    <p className="text-gray-300 text-sm leading-relaxed font-['Inter']">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
          <button className="px-8 py-3 bg-[#1170B9] text-white font-semibold rounded-lg hover:bg-[#0d5a9d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-['Inter']">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <img
        className="absolute top-0 right-0 w-[530px] h-[601px] pointer-events-none opacity-20"
        alt="Background decoration"
        src="https://c.animaapp.com/mfy04u6czwQT7C/img/rectangle-5438.svg"
      />
    </section>
  );
};