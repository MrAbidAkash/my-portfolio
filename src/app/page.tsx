import Hero from "@/components/Hero";
import MotionSection from "@/components/MotionSection";

export default function Home() {
  return (
    <div className="flex flex-col space-y-16">
      <Hero />
      <MotionSection />
    </div>
  );
}
