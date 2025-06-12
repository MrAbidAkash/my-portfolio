"use client";

import React from "react";
import { motion } from "framer-motion";

const rows = [
  // top half (9 → 1)
  [10, 12, 14, 16, 18, 16, 14, 12, 10],
  [12, 14, 16, 18, 16, 14, 12],
  [14, 16, 18, 16, 14],
  [16, 18, 16],
  [18],
  // bottom half mirrors top (excluding middle)
  [16, 18, 16],
  [14, 16, 18, 16, 14],
  [12, 14, 16, 18, 16, 14, 12],
  [10, 12, 14, 16, 18, 16, 14, 12, 10],
];

export default function App() {
  return (
    <div className="container">
      {rows.map((sizes, i) => (
        <div key={i} className="row">
          {sizes.map((w, j) => (
            <motion.div
              className="box"
              key={j}
              style={{ width: w * 2, height: w * 2 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: (i * sizes.length + j) * 0.02,
                type: "spring",
                stiffness: 300,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
