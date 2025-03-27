"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  // Interactive Background Effect (Moving gradient)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-900 overflow-hidden px-6">
      {/* Background effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-3xl"
        style={{
          transform: `translate(${mousePos.x / 50}px, ${mousePos.y / 50}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Grid Layout: Left Image, Right Text */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Side - Animated Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/studize gpt 2.png" // Change to your actual image path
            alt="JEE Preparation"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Revolutionizing JEE Preparation
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 mt-4 max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            AI-Driven Personalized Roadmaps to Maximize Student&apos;s Academic Potential.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mt-2 max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Take Your Coaching Class to the Next Level with Data-Driven Insights and a Robust Monitoring System for your Students.
          </motion.p>

          {/* Animated Button */}
          <motion.a
            href="#explore"
            className="mt-6 inline-block px-5 py-3 sm:px-6 sm:py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all"
            whileHover={{ scale: 1.1, backgroundColor: "#4F46E5" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Explore More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
