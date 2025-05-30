"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { FiFigma } from "react-icons/fi";

const experience = [
  {
    title: "SkillersZone LLC",
    icon: FiFigma,
    description: "Full Time software Developer",
    year: "2024-2025",
  },
  {
    title: "Google",
    icon: FiFigma,
    description: "Data Analyst",
    year: "2022-2023",
  },
  {
    title: "Google",
    icon: FiFigma,
    description: "Cyber Security Analyst",
    year: "2023-2024",
  },
];

const Experience = () => {
  const cardsRef = useRef(null);

  return (
    <div className="w-full">
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 "
      >
        <div className="flex items-start gap-10 flex-col relative bg-white  rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-52">
          <span className="text-4xl font-semibold -mt-2">
            Wanna See <br /> my experience?
          </span>
          <div>
            <a className="text-lg font-bold md:min-w-50 text-white bg-black hover:bg-teal-600 rounded-full px-5 py-2">
              Book a call
            </a>
          </div>
        </div>
        {experience.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            //   animate={isInView ? "visible" : "hidden"}
            //   variants={cardVariants}
            //   whileHover={cardHoverVariants.hover}
            className="relative bg-white p-5 rounded-xl pb-20 shadow-lg hover:shadow-xl transition-shadow h-52 flex flex-col gap-5"
          >
            <span className="text-gray-600">{service.title}</span>
            <h3 className="text-xl font-bold  bottom-5 left-5">
              {service.description}
            </h3>
            <span className="text-xl font-bold  right-8 text-teal-600">
              {service.year}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
