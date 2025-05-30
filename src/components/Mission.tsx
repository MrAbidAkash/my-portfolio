"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiFigma } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const techIcons = [
  { icon: SiReact, title: "React" },
  { icon: SiNextdotjs, title: "Next.js" },
  { icon: SiNodedotjs, title: "Node.js" },
  { icon: SiTypescript, title: "TypeScript" },
  { icon: SiMongodb, title: "MongoDB" },
  { icon: SiPostgresql, title: "PostgreSQL" },
  { icon: SiPrisma, title: "Prisma" },
];

const services = [
  {
    title: "UI Design",
    icon: FiFigma,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo odio delectus sequi debitis non quos dolorem saepe eligendi nam ipsa porro officia excepturi recusandae quae, asperiores amet molestias sapiente illum!",
    number: "01",
  },
  {
    title: "Web Development",
    icon: FiFigma,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo odio delectus sequi debitis non quos dolorem saepe eligendi nam ipsa porro officia excepturi recusandae quae, asperiores amet molestias sapiente illum!",
    number: "02",
  },
  {
    title: "API Development",
    icon: FiFigma,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo odio delectus sequi debitis non quos dolorem saepe eligendi nam ipsa porro officia excepturi recusandae quae, asperiores amet molestias sapiente illum!",
    number: "03",
  },
  {
    title: "Database Design",
    icon: FiFigma,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo odio delectus sequi debitis non quos dolorem saepe eligendi nam ipsa porro officia excepturi recusandae quae, asperiores amet molestias sapiente illum!",
    number: "04",
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const iconHoverVariants = {
  hover: {
    y: -5,
    scale: 1.1,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 500,
    },
  },
};

const Mission = () => {
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, {
    once: false,
    margin: "0px 0px -100px 0px",
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="my-14 flex flex-col gap-10 min-h-screen"
    >
      {/* Mission Statement */}
      <motion.div
        variants={itemVariants}
        className="bg-teal-600 rounded-2xl p-12 space-y-10"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold text-white"
        >
          Turning complex ideas into clean, efficient code — delivering web
          applications that are fast, functional, and future-ready — where user
          experience and business goals align seamlessly
        </motion.h3>

        <motion.div
          className="flex flex-wrap gap-4"
          variants={containerVariants}
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={iconHoverVariants.hover}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <tech.icon
                className="text-slate-300 text-3xl"
                title={tech.title}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <div className="flex flex-col md:flex-row gap-5">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl font-bold md:min-w-50"
        >
          How can I assist you?
        </motion.p>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={cardHoverVariants.hover}
              className="relative bg-white p-5 rounded-xl pb-20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-5">
                <motion.span whileHover={{ rotate: 15 }} className="mt-0.5">
                  <service.icon
                    size={40}
                    className="p-2 rounded-full bg-slate-100 text-blue-700"
                  />
                </motion.span>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <h4 className="text-xl font-bold absolute bottom-5 left-5">
                {service.title}
              </h4>
              <span className="text-xl font-bold absolute bottom-5 right-8 text-teal-600">
                {service.number}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Mission;
