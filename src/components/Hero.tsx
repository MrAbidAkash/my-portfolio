"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  
  return (
    <section className="">
      <div
        id="home"
        className="min-h-full bg-gradient-to-b  flex flex-col items- text-white max-w-5xl mx-auto"
      >
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold bg-teal-100 text-teal-900 px-3 py-2 rounded-full flex items-end gap-1.5 w-55 "
          >
            <span>●</span>
            <span>AVAILABLE FOR WORK</span>
          </motion.div>
        </div>{" "}
        <div className=" grid grid-cols-2 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-8 mt-5 animate-[fadeIn_3s_ease-in-out] w-full"
          >
            <span className="text-6xl font-semibold w-60 text-black ">
              Hi, I&apos;m a Software
              <span className="flex items-end">
                Developer <span className="text-3xl ">&copy; </span>
              </span>
            </span>
            <p className="text-lg text-gray-700">
              I have 5 years of experience in building web applications,
              specializing in React, Next.js, and Node.js.
            </p>

            <div>
              <a
                href="#projects"
                className="
        px-6 py-3 
        bg-black 
        text-white 
        font-semibold 
        rounded-full 
        inline-block
        relative 
        overflow-hidden
        group
      "
              >
                <span className="relative z-10">Contact Me</span>
                <span
                  className="
        absolute 
        inset-0 
        bg-gradient-to-r 
        from-indigo-900 
        to-purple-900 
        transform 
        -translate-x-full 
        group-hover:translate-x-0 
        transition-transform 
        duration-300
      "
                ></span>
              </a>
            </div>
          </motion.div>
          <div className="flex items-center w-full justify-center -mt-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=" w-[400px] h-[400px] max-sm:w-[280px] max-sm:h-[280px] overflow-hidden bg-center bg- object-cover rounded-full ani relative transition-[all_ease-in-out] duration-1000 FloatingAnimation  "
            >
              <Image
                alt="profilePic"
                src="/MrAbidAkash.jpg"
                fill
                sizes="w-full"
                className="object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
