"use client";

import ContactForm from "../../ContactForm";
import ConnectSection from "./ConnectSection";
import Experience from "./Experience";
// import { useRef } from "react";

import Mission from "./Mission";
import Works from "./Works";

const MotionSection = () => {
  // const containerRef = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start 60%", "start start"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], ["0px", "-400px"]);
  return (
    <div className="z-40 flex flex-col gap-10">
      <Mission />
      <Works />
      <div className="h-screen w-full flex justify-center items-center">
        <Experience />
      </div>
      <div className="h-screen w-full flex justify-center items-center">
        <ContactForm />
      </div>
      <div className="h-screen w-full flex justify-center items-center">
        <ConnectSection />
      </div>
    </div>
  );
};

export default MotionSection;
