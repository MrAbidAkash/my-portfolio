import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function AutoSnapSection({ children }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasSnapped = useRef(false); // Prevent multiple triggers

  useEffect(() => {
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

        // Reset when out of view
        if (!entry.isIntersecting) {
          hasSnapped.current = false;
        }
      },
      {
        threshold: 0.01, // Trigger as soon as it touches
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className={`h-screen w-full`}>
      {children}
    </div>
  );
}
