// app/page.tsx (Home)
import Hero from "@/components/Hero";
import MotionSection from "@/components/MotionSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-26">
      <Hero />
      <MotionSection />
    </div>
  );
}
