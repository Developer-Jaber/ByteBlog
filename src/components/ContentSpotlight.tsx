'use client';

import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';
import { FireIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Mock data for featured posts
const featuredPosts = [
  {
    id: 1,
    title: "The Future of AI in Content Creation",
    author: "Samira Khan",
    reads: "12.4k",
    tags: ["AI", "Tech"],
    excerpt: "How generative AI is revolutionizing the blogging landscape in 2024."
  },
  {
    id: 2,
    title: "Next.js 14 for Blog Developers",
    author: "Alex Chen",
    reads: "8.7k",
    tags: ["Web Dev", "Next.js"],
    excerpt: "A deep dive into the latest features and how to optimize your blog."
  },
  {
    id: 3,
    title: "Monetizing Your Passion",
    author: "Jordan Lee",
    reads: "15.1k",
    tags: ["Business", "Growth"],
    excerpt: "Proven strategies to turn your blog into a sustainable income source."
  }
];

export default function ContentSpotlight() {
  // Animated gradient values
  const color = useMotionValue("#00D1FF");
  const backgroundImage = useMotionTemplate`radial-gradient(ellipse at center, transparent 70%, ${color} 120%)`;

  useEffect(() => {
    animate(color, ["#00D1FF", "#4A00E0", "#00D1FF"], {
      duration: 15,
      repeat: Infinity,
      repeatType: "reverse"
    });
  }, [color]);

  return (
    <section className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Animated gradient backdrop */}
      <motion.div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage }}
      />

      {/* Floating binary particles */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse"
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

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-bold text-white text-3xl md:text-4xl"
          >
            <span className="text-[#00D1FF]">Trending</span> in the ByteBlog Universe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-gray-300 text-xl"
          >
            Discover what the community is reading and talking about right now
          </motion.p>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* 3D tilt effect container */}
              <motion.div
                className="h-full"
                whileHover="hover"
                initial="rest"
              >
                {/* Card with gradient border */}
                <div className="relative bg-gray-800 border group-hover:border-[#00D1FF] border-transparent rounded-xl h-full overflow-hidden transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/10 to-[#4A00E0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card content */}
                  <div className="relative flex flex-col p-6 h-full">
                    {/* Popularity badge */}
                    <div className="flex items-center gap-1 mb-4">
                      <FireIcon className="w-5 h-5 text-[#00D1FF]" />
                      <span className="font-medium text-[#00D1FF] text-sm">{post.reads} reads</span>
                    </div>
                    
                    <h3 className="mb-3 font-bold text-white group-hover:text-[#00D1FF] text-xl transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="flex-grow text-gray-300">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center mt-6 pt-4 border-gray-700 border-t">
                      <span className="text-gray-400 text-sm">By {post.author}</span>
                      <div className="flex gap-2">
                        {post.tags.map(tag => (
                          <span key={tag} className="bg-gray-700 px-2 py-1 rounded-full text-gray-300 text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover link indicator */}
                    <div className="right-4 bottom-4 absolute opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 text-[#00D1FF]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="group inline-flex items-center bg-[#00D1FF] hover:bg-[#00b8e0] shadow-sm px-6 py-3 border border-transparent rounded-md font-medium text-white text-base transition-colors">
            Explore All Trending Content
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}