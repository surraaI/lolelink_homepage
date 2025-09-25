"use client";

import React from "react";
import { ContactForm } from "../../../../ContactForm";

export const FooterSection = (): JSX.Element => {
  // Data for footer navigation columns
  const footerColumns = [
    {
      title: "Company",
      links: [
        { text: "Why Lolelink?", href: "#why-choose-us" },
        { text: "About", href: "#about" },
        { text: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Contact Us", href: "#contact" },
        { text: "FAQ", href: "#faq" },
        { text: "Support", href: "#contact" },
        { text: "How It works", href: "#how-it-works" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog & Tips", href: "https://blog.lolelink.com" },
        { text: "Terms and conditions", href: "https://lolelink.com/terms" },
        { text: "Privacy Policy", href: "https://lolelink.com/privacy" },
        { text: "Service Guideline", href: "https://lolelink.com/guidelines" },
      ],
    },
  ];

  // Social media icons data
  const socialIcons = [
    {
      src: "https://c.animaapp.com/mfy04u6czwQT7C/img/socials-4.svg",
      alt: "Social media",
      className: "w-6 h-6",
    },
    {
      src: "https://c.animaapp.com/mfy04u6czwQT7C/img/socials-1.svg",
      alt: "Social media",
      className: "w-6 h-6",
    },
    {
      src: "https://c.animaapp.com/mfy04u6czwQT7C/img/socials-3.svg",
      alt: "Social media",
      className: "w-6 h-6",
    },
    {
      src: "https://c.animaapp.com/mfy04u6czwQT7C/img/socials-2.svg",
      alt: "Social media",
      className: "w-[24.23px] h-[24.25px] mb-[-0.25px]",
    },
    {
      src: "https://c.animaapp.com/mfy04u6czwQT7C/img/socials.svg",
      alt: "Social media",
      className: "w-6 h-6",
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle external links
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="w-full bg-primarydark">

      {/* Footer Content */}
      <div className="w-full bg-primarydark py-[60px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-end gap-[60px]">
            <div className="flex flex-col items-start gap-9 w-full">
              {/* Logo Section */}
              <div className="flex flex-col w-[175px] items-start gap-2.5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <div className="relative self-stretch w-full h-10">
                  <div className="absolute w-[822.86%] h-[90.00%] top-[5.00%] left-[-346.84%] flex items-center justify-center [font-family:'Sora',Helvetica] font-semibold text-primarywhite text-3xl text-center tracking-[0] leading-[36.0px]">
                    LoleLink
                  </div>

                  <img
                    className="w-[25.71%] h-[112.50%] top-[-6.25%] left-0 absolute object-cover"
                    alt="LoleLink logo"
                    src="https://c.animaapp.com/mfy04u6czwQT7C/img/image-2.png"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0 w-full">
                {/* Company Description and Social Icons */}
                <div className="inline-flex flex-col items-start gap-6 pb-5 flex-1 max-w-md translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                  <div className="inline-flex flex-col items-start gap-10">
                    <div className="relative flex items-center justify-center w-full mt-[-1.00px] font-body-r-regular font-[number:var(--body-r-regular-font-weight)] text-textparagraph text-[length:var(--body-r-regular-font-size)] tracking-[var(--body-r-regular-letter-spacing)] leading-[var(--body-r-regular-line-height)] [font-style:var(--body-r-regular-font-style)]">
                      LoleLink is an AI-powered business management platform
                      designed to help African SMEs streamline operations, automate
                      tasks, and grow smarter.
                    </div>

                    <div className="inline-flex items-start gap-6">
                      {socialIcons.map((icon, index) => (
                        <img
                          key={`social-${icon.src}-${index}`}
                          className={`relative ${icon.className}`}
                          alt={icon.alt}
                          src={icon.src}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Navigation Columns */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {footerColumns.map((column, columnIndex) => (
                    <div
                      key={`column-${column.title}-${columnIndex}`}
                      className={`flex flex-col items-start gap-6 translate-y-[-1rem] animate-fade-in opacity-0 min-w-[120px]`}
                      style={
                        {
                          "--animation-delay": `${400 + columnIndex * 200}ms`,
                        } as React.CSSProperties
                      }
                    >
                      <div className="relative self-stretch mt-[-1.00px] font-body-r-bold font-[number:var(--body-r-bold-font-weight)] text-primarywhite text-[length:var(--body-r-bold-font-size)] tracking-[var(--body-r-bold-letter-spacing)] leading-[var(--body-r-bold-line-height)] [font-style:var(--body-r-bold-font-style)]">
                        {column.title}
                      </div>

                      <div className="flex flex-col items-start justify-center gap-3 relative self-stretch w-full">
                        {column.links.map((link, linkIndex) => (
                          <a
                            key={`link-${column.title}-${link.text}-${linkIndex}`}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={`relative w-fit font-body-r-regular font-[number:var(--body-r-regular-font-weight)] text-textparagraph text-[length:var(--body-r-regular-font-size)] tracking-[var(--body-r-regular-letter-spacing)] leading-[var(--body-r-regular-line-height)] whitespace-nowrap [font-style:var(--body-r-regular-font-style)] hover:text-primarywhite transition-colors cursor-pointer ${linkIndex === 0 ? "mt-[-1.00px]" : ""}`}
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="relative w-full text-center font-body-r-regular font-[number:var(--body-r-regular-font-weight)] text-textparagraph text-[length:var(--body-r-regular-font-size)] tracking-[var(--body-r-regular-letter-spacing)] leading-[var(--body-r-regular-line-height)] whitespace-nowrap [font-style:var(--body-r-regular-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
              Copyright © 2025 LoleLink
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};