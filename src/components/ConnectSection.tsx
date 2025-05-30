"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";

const ConnectSection = () => {
  return (
    <div className=" flex flex-col gap-4 justify-between  text-black w-full">
      {/* Top section */}
      <div className="flex flex-col md:flex-row gap-4 p-8 md:p-1 w-full">
        {/* Left */}
        <div className="fle-1 bg-white rounded-3xl p-10 shadow-md flex flex-col gap-10 justify-center w-[40%]">
          <h2 className="text-4xl sm:text-7xl font-semibold leading- mb-4">
            Let’s <br />
            connect <br />
            and chat
          </h2>
          <a
            href="mailto:hello@cozy.com"
            className="inline-flex items-center gap-2 text-md font-medium text-gray-700 hover:text-black mt-2"
          >
            Mr.AbidAkash@gmail.com{" "}
            <ArrowUpRight className="w-6 h-6 p-1 rounded-full bg-black text-white" />
          </a>
        </div>

        {/* Right */}
        <div className="flex-1 relative bg-[#39b6c7] rounded-3xl p-10 flex flex-wrap gap-3 justify-center items-center text-white text-3xl font-medium">
          {/* FOLLOW ME! */}
          <a
            href="https://your–profile.linktree.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute px-6 py-3 border-2 border-white rounded-full text-white font-medium"
            style={{
              top: "18%",
              left: "47%",
              transform: "translateX(-50%)",
            }}
          >
            FOLLOW ME!
          </a>

          {/* 👀 emoji */}
          <a
            href="https://your–instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute px-4 py-2 border-2 border-white rounded-full text-white text-xl w-30"
            style={{
              top: "22%",
              left: "62%",
              transform: "rotate(30deg)",
            }}
          >
            👀
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/your–instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute px-6 py-3 border-2 border-white rounded-full text-white font-medium"
            style={{
              top: "35%",
              left: "20%",
              transform: "rotate(15deg)",
            }}
          >
            INSTAGRAM
          </a>

          {/* DRIBBBLE */}
          <a
            href="https://dribbble.com/your–dribbble"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute px-6 py-3 border-2 border-white rounded-full text-white font-medium"
            style={{
              top: "38%",
              left: "50%",
            }}
          >
            DRIBBBLE
          </a>

          {/* BEHANCE */}
          <a
            href="https://behance.net/your–behance"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute px-6 py-3 border-2 border-white rounded-full text-white font-medium"
            style={{
              top: "56%",
              left: "18%",
            }}
          >
            BEHANCE
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/your–linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute px-6 py-3 border-2 border-white rounded-full text-white font-medium"
            style={{
              top: "56%",
              left: "44%",
            }}
          >
            LINKEDIN
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t bg-white rounded-2xl border-gray-200 flex justify-between items-center px-6 py-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center text-xs font-bold">
            C
          </div>
          <span className="font-medium">MR.ABIDAKASH</span>
        </div>
        <span>©{new Date().getFullYear()}</span>
        <button className="bg-gray-800 text-white rounded-full px-5 py-2 hover:bg-black">
          Book a call
        </button>
      </footer>
    </div>
  );
};

export default ConnectSection;
