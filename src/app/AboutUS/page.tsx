"use client"; // Ensure client-side rendering

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-8 overflow-hidden pt-44">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-grid-white/[0.1] pointer-events-none animate-pulse"></div>

      {/* Heading Section */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What is Sstudize?
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 text-center mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        We help you take your Coaching Class to the Next Level by Empowering Students, Enhancing Coaching with the use of AI.
      </motion.p>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* For Teachers */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-75"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold text-blue-400">For Teachers</h2>
          <p className="text-gray-300 mt-2">
            Our AI-driven insights help you monitor student progress, track performance, and make data-backed decisions to ensure the best results for your students.
          </p>
        </motion.div>

        {/* For Students */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-75"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold text-green-400">For Students</h2>
          <p className="text-gray-300 mt-2">
            Get customized learning roadmaps based on your strengths, weaknesses, and learning patterns, helping you optimize your study time and reach your academic goals.
          </p>
        </motion.div>

        {/* For Parents */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-75"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold text-yellow-400">For Parents</h2>
          <p className="text-gray-300 mt-2">
            We provide parents with real-time progress updates and detailed reports, giving them peace of mind about their child’s academic journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
