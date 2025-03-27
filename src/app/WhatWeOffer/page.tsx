"use client";

import React from "react";
import { FaChartLine, FaBrain, FaRobot, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

const Card = ({ children = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 200 }}
    className={`p-8 rounded-lg shadow-md transition-all duration-500 group bg-white h-full flex flex-col justify-between`}
  >
    <div className="p-6 rounded-lg transition-all duration-500 bg-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 text-gray-900 group-hover:text-white h-full flex flex-col justify-between">
      {children}
    </div>
  </motion.div>
);

const features = [
  {
    title: "Personalized Learning Roadmap",
    description:
      "AI-powered roadmaps tailored to each student’s academic needs, helping them focus on what matters most for their JEE preparation.",
    icon: <FaBrain className="text-blue-500 text-4xl transition-all duration-500" />,
  },
  {
    title: "Comprehensive Student Analysis",
    description:
      "Deep insights into students’ academic performance, cognitive abilities, and study patterns, ensuring personalized guidance for optimal learning outcomes.",
    icon: <FaChartLine className="text-green-500 text-4xl transition-all duration-500" />,
  },
  {
    title: "Coaching Center Dashboard & Progress Tracking",
    description:
      "Get real-time data and analytics on student performance. Monitor progress, review results, and make informed decisions to improve coaching strategies.",
    icon: <FaChalkboardTeacher className="text-yellow-500 text-4xl transition-all duration-500" />,
  },
  {
    title: "StudizeGPT",
    description:
      "Our in-house AI chatbot for JEE-specific data, provides instant solutions to student queries, ensuring a seamless learning experience.",
    icon: <FaRobot className="text-red-500 text-4xl transition-all duration-500" />,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-16 bg-gray-100 pt-32">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What We Offer
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore the key features that make Sstudize the smart choice for students and coaching centers alike.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="flex flex-col items-center text-center h-full">
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-500"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 transition-all duration-500"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {feature.description}
              </motion.p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhatWeOffer;
