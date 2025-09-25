"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'bounce-in';
  delay?: number;
  threshold?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return 'translate-y-[-1rem] opacity-0';
        case 'fade-in':
          return 'opacity-0';
        case 'slide-left':
          return 'translate-x-[-100px] opacity-0';
        case 'slide-right':
          return 'translate-x-[100px] opacity-0';
        case 'scale-in':
          return 'scale-95 opacity-0';
        case 'bounce-in':
          return 'scale-75 opacity-0';
        default:
          return 'translate-y-[-1rem] opacity-0';
      }
    }

    switch (animation) {
      case 'fade-up':
        return 'translate-y-0 opacity-100';
      case 'fade-in':
        return 'opacity-100';
      case 'slide-left':
        return 'translate-x-0 opacity-100';
      case 'slide-right':
        return 'translate-x-0 opacity-100';
      case 'scale-in':
        return 'scale-100 opacity-100';
      case 'bounce-in':
        return 'scale-100 opacity-100';
      default:
        return 'translate-y-0 opacity-100';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};
