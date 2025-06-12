'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0A1A2F] to-[#4A00E0] min-h-dvh overflow-hidden">
      {/* Binary code background animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              transition: {
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }
            }}
            className="absolute font-mono text-white text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 max-w-7xl">
        <div className="items-center gap-12 grid grid-cols-1 md:grid-cols-2">
          {/* Text content */}
          <div className="md:text-left text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 font-bold text-white text-4xl md:text-5xl lg:text-6xl"
            >
              Where Ideas Meet the <span className="text-[#00D1FF]">Digital World</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto md:mx-0 mb-8 max-w-lg text-gray-300 text-lg md:text-xl"
            >
              Write, Share, and Grow with ByteBlog – The Ultimate Platform for Tech & Creative Minds.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex sm:flex-row flex-col justify-center md:justify-start gap-4"
            >
              <button type='button' className="flex justify-center items-center bg-[#00D1FF] hover:bg-[#00b8e0] px-6 py-3 rounded-lg font-semibold text-[#0A1A2F] transition-all">
                Start Writing for Free
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </button>
              <button type='button' className="flex justify-center items-center px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-medium text-white transition-all">
                Explore Featured Blogs
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 text-gray-400 text-sm"
            >
              Join 10,000+ writers already sharing their stories
            </motion.div>
          </div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white/10 shadow-xl backdrop-blur-sm p-2 border border-white/20 rounded-2xl">
              <div className="bg-[#0A1A2F] rounded-xl overflow-hidden">
                {/* Mock blog editor UI */}
                <div className="p-4 border-white/10 border-b">
                  <div className="flex gap-2">
                    <div className="bg-red-500 rounded-full w-3 h-3"></div>
                    <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
                    <div className="bg-green-500 rounded-full w-3 h-3"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-white/20 mb-4 rounded w-1/2 h-6"></div>
                  <div className="bg-white/10 mb-2 rounded w-full h-4"></div>
                  <div className="bg-white/10 mb-4 rounded w-3/4 h-4"></div>
                  <div className="bg-white/10 mb-2 rounded w-full h-4"></div>
                  <div className="bg-white/10 rounded w-5/6 h-4"></div>
                </div>
              </div>
              <div className="-right-6 -bottom-6 absolute bg-[#00D1FF] shadow-lg p-4 rounded-xl">
                <ComputerDesktopIcon className="w-8 h-8 text-[#0A1A2F]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}