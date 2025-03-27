'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function CTASection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-800 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 rounded-2xl shadow-lg p-10 text-center w-11/12 md:w-3/5 lg:w-2/5"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-indigo-600"
        >
          Start Your Sstudize Journey Today
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="mt-4 px-4 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-md hover:shadow-lg focus:outline-none"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
}
