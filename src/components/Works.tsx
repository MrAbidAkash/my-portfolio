"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FiFigma } from "react-icons/fi";

const services = [
  {
    title: "Note Taking App",
    category: "Web Development",
    icon: FiFigma,
    img: "/ghotion.png",
    year: "2024",
  },
  {
    title: "Chat App",
    category: "Web Development",
    icon: FiFigma,
    img: "/ghotion.png",
    year: "2023",
  },
  {
    title: "Travel App",
    category: "Web Development",
    icon: FiFigma,
    img: "/ghotion.png",
    year: "2022",
  },
  {
    title: "CRM App",
    category: "Software Development",
    icon: FiFigma,
    img: "/ghotion.png",
    year: "2022",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// const cardHoverVariants = {
//   hover: {
//     y: -10,
//     scale: 1.02,
//     transition: {
//       duration: 0.3,
//       ease: "easeOut",
//     },
//   },
// };

const Works = () => {
  // const cardsRef = useRef(null);
  // const isInView = useInView(cardsRef, {
  //   once: false,
  //   margin: "0px 0px -100px 0px",
  // });

  // const cardVariants = {
  //   hidden: {
  //     opacity: 0,
  //     x: -50,
  //   },
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       delay: i * 0.15,
  //       duration: 0.6,
  //       ease: "easeOut",
  //     },
  //   }),
  // };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      ref={containerRef}
      // style={{ height: `${services.length * CARDSIZE}px` }}
      className="my-14 flex flex-col gap-10 relative"
    >
      {/* Services Section */}
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="flex flex-col gap-8 left-0 h-screen sticky top-16 mt-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl font-bold md:min-w-50"
          >
            Selected Work
          </motion.p>
          <div>
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl font-bold md:min-w-50 text-white bg-black hover:bg-teal-600 rounded-full px-5 py-2"
            >
              See All
            </motion.a>
          </div>
        </div>
        <motion.div style={{ y }} className="w-full">
          <div className="mt-2 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="h-[600px]  overflow-hidden my-10 p-8 rounded-4xl bg-white"
              >
                <div className="flex items-start gap-5 w-full h-full overflow-hidden">
                  <div className="relative w-full -mt-0.5  min-h-110 border rounded-4xl h-140">
                    <Image
                      fill
                      className="w-full object-cover"
                      src={service.img}
                      alt="service.img"
                    />
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-5">
                  <div className="flex justify-between w-full">
                    <h4 className="text-lg font-bold ">{service.title}</h4>
                    <span className="text-lg font-bold text-teal-600">
                      {service.year}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-base bg-slate-100 text-teal-600 px-3 py-2 rounded-full  items-end gap-1.5 font-semibold text-center">
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Works;
