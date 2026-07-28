"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function AutoSnapSection({ children, className = "" }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasSnapped = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          !hasSnapped.current &&
          entry.boundingClientRect.top <= window.innerHeight * 0.2 &&
          entry.isIntersecting
        ) {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          hasSnapped.current = true;
        }

        if (!entry.isIntersecting) {
          hasSnapped.current = false;
        }
      },
      {
        threshold: 0.01,
      }
    );

    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
