"use client";

import Mission from "./Mission";
import Works from "./Works";
import Experience from "./Experience";
import ContactForm from "./ContactForm";
import ConnectSection from "./ConnectSection";

const MotionSection = () => {
  return (
    <div className="flex flex-col space-y-16">
      <Mission />
      <Works />
      <Experience />
      <ContactForm />
      <ConnectSection />
    </div>
  );
};

export default MotionSection;
