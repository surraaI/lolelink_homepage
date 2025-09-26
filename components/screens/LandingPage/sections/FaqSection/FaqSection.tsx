import { ArrowUpRightIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    id: "item-1",
    question: "Who is Loleink designed for?",
    answer: "Loleink is designed for businesses of all sizes, from startups to enterprise companies. Whether you're a small business owner looking to streamline your operations, a growing company needing better project management, or an enterprise requiring advanced analytics and team collaboration tools, Loleink provides scalable solutions that adapt to your specific needs and industry requirements."
  },
  {
    id: "item-2",
    question: "Do I need technical skills to use Loleink?",
    answer: "No technical skills are required! Loleink features an intuitive, user-friendly interface that's designed for ease of use. Our platform includes guided tutorials, comprehensive documentation, and 24/7 customer support to help you get started. Most users can begin using Loleink effectively within minutes of signing up, regardless of their technical background."
  },
  {
    id: "item-3",
    question: "Can I upgrade my plan as my business grows?",
    answer: "Absolutely! Loleink offers flexible pricing plans that scale with your business. You can upgrade or downgrade your plan at any time through your account dashboard. Our team also provides personalized consultation to help you choose the right plan based on your current needs and future growth projections. All upgrades take effect immediately, and downgrades take effect at your next billing cycle."
  },
  {
    id: "item-4",
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support through multiple channels: 24/7 live chat support, email support with response times under 2 hours, detailed documentation and video tutorials, webinars and training sessions, and dedicated account managers for enterprise customers. Our support team is trained to help with everything from basic setup questions to advanced customization and integration needs."
  },
  {
    id: "item-5",
    question: "Is my data secure with Loleink?",
    answer: "Security is our top priority. We use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our platform is SOC 2 Type II certified, GDPR compliant, and undergoes regular security audits. We also offer advanced features like two-factor authentication, role-based access controls, and data backup with 99.9% uptime guarantee."
  },
  {
    id: "item-6",
    question: "Can I integrate Loleink with my existing tools?",
    answer: "Yes! Loleink offers extensive integration capabilities with over 200+ popular business tools including CRM systems, email platforms, project management tools, accounting software, and more. We provide native integrations, API access for custom integrations, and webhook support. Our integration marketplace makes it easy to connect your favorite tools and automate workflows across your entire tech stack."
  }
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 md:gap-[55px]">
        <div className="w-full md:w-[425px] flex flex-col gap-3 translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="flex items-center gap-3 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="text-neutral-700 text-[length:var(--body-l-regular-font-size)] tracking-[var(--body-l-regular-letter-spacing)] leading-[var(--body-l-regular-line-height)] font-body-l-regular font-[number:var(--body-l-regular-font-weight)] [font-style:var(--body-l-regular-font-style)]">
              FAQ
            </div>
            <img
              className="w-[167px] h-0.5"
              alt="Vector"
              src="https://c.animaapp.com/mfy04u6czwQT7C/img/vector-762.svg"
            />
          </div>

          <h2 className="w-full md:w-[425px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#010509] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Frequently Asked Questions
          </h2>

          <p className="w-full md:w-[380px] font-body-l-medium font-[number:var(--body-l-medium-font-weight)] text-neutral-700 text-[length:var(--body-l-medium-font-size)] tracking-[var(--body-l-medium-letter-spacing)] leading-[var(--body-l-medium-line-height)] [font-style:var(--body-l-medium-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            Everything You Need to Know About <br />
            Working With Us
          </p>

          <Button
            variant="ghost"
            onClick={() => {
              // Scroll to contact section
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-fit h-auto p-0 py-4 flex items-center gap-2 text-primaryelectric-blue font-others-button-r font-[number:var(--others-button-r-font-weight)] text-[length:var(--others-button-r-font-size)] tracking-[var(--others-button-r-letter-spacing)] leading-[var(--others-button-r-line-height)] [font-style:var(--others-button-r-font-style)] hover:bg-transparent translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] transition-all duration-300 hover:scale-105"
          >
            Know More
            <ArrowUpRightIcon className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>

        <div className="w-full md:w-[800px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <Accordion type="single" collapsible className="w-full space-y-4 md:space-y-6">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${600 + index * 200}ms`,
                  } as React.CSSProperties
                }
              >
                <AccordionTrigger className="w-full min-h-[72px] md:min-h-[88px] flex items-center justify-between gap-4 md:gap-9 p-5 md:p-8 rounded-[14px] md:rounded-[20px] hover:no-underline hover:bg-gray-50 transition-all duration-200 border border-gray-200 bg-white shadow-sm [&[data-state=open]]:bg-gray-50 [&[data-state=open]]:shadow-md">
                  <span className="flex-1 text-left font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#010509] text-base md:text-[length:var(--heading-h5-font-size)] tracking-normal md:tracking-[var(--heading-h5-letter-spacing)] leading-6 md:leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {faq.question}
                  </span>
                  <ChevronRightIcon className="w-6 md:w-[33px] h-6 transition-transform duration-200 text-gray-500 [&[data-state=open]]:rotate-90" />
                </AccordionTrigger>
                <AccordionContent className="pb-0 bg-white border-l border-r border-b border-gray-200 rounded-b-[14px] md:rounded-b-[20px] mx-0">
                  <div className="px-5 md:px-8 pb-5 md:pb-6 pt-2">
                    <p className="font-body-l-medium font-[number:var(--body-l-medium-font-weight)] text-neutral-600 text-sm md:text-[length:var(--body-l-medium-font-size)] tracking-normal md:tracking-[var(--body-l-medium-letter-spacing)] leading-6 md:leading-[var(--body-l-medium-line-height)] [font-style:var(--body-l-medium-font-style)]">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

