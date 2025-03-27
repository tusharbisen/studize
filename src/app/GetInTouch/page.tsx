'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GetInTouch() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 text-gray-800">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-indigo-600 mb-4 text-center"
      >
        Get in-Touch
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-lg text-center mb-6"
      >
        Ready to <strong>Transform</strong> Your <strong>Coaching Class</strong> using <span className="font-bold">Sstudize</span>? See the power of AI in action and book a one-on-one demo call with our team.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.7 }}
        className="relative w-full h-96 flex items-center justify-center pt-8"
      >
        <Image
          src="/road map.png"
          alt="Success Image"
           width={600}
           height={400}
          objectFit="cover"
        />
      </motion.div>
    </div>
  );
}
