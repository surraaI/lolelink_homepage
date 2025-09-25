import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, [threshold]);

  return [ref, isVisible] as const;
};

export const useScrollAnimationMultiple = (threshold = 0.1) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const refs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.getAttribute('data-animation-id');
          if (elementId) {
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set(prev).add(elementId));
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    refs.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      refs.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [threshold]);

  const setRef = (id: string) => (element: HTMLElement | null) => {
    if (element) {
      refs.current.set(id, element);
    } else {
      refs.current.delete(id);
    }
  };

  const isVisible = (id: string) => visibleElements.has(id);

  return { setRef, isVisible };
};
