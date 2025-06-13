'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  PencilSquareIcon,
  DevicePhoneMobileIcon,
  LinkIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function CreateShare() {
  const [activeTab, setActiveTab] = useState<'write' | 'preview' | 'share'>('write');
  const controls = useAnimation();

  // Simulate typing effect in the mock editor
  const [typedText, setTypedText] = useState('');
  const fullText = "Welcome to my ByteBlog!\n\nThis platform makes writing and sharing content effortless. With built-in analytics and seamless distribution, your ideas can reach the right audience.\n\nTry it today!";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 20);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    controls.start({
      x: activeTab === 'write' ? 0 : activeTab === 'preview' ? '-100%' : '-200%',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    });
  }, [activeTab, controls]);

  return (
    <section className="relative bg-gray-50 dark:bg-gray-950 py-24 overflow-hidden">
      {/* Diagonal gradient accent */}
      <div className="top-0 left-0 absolute bg-gradient-to-r from-[#00D1FF] to-[#4A00E0] w-full h-2" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-bold text-gray-900 dark:text-white text-3xl md:text-4xl"
          >
            <span className="text-[#00D1FF]">Create</span> and <span className="text-[#4A00E0]">Share</span> in Minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300 text-xl"
          >
            Our intuitive workflow helps you focus on writing while we handle the distribution
          </motion.p>
        </div>

        {/* Interactive tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
            {([
              { id: 'write', icon: PencilSquareIcon, label: 'Write' },
              { id: 'preview', icon: DevicePhoneMobileIcon, label: 'Preview' },
              { id: 'share', icon: LinkIcon, label: 'Share' }
            ] as { id: 'write' | 'preview' | 'share', icon: typeof PencilSquareIcon, label: string }[]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center px-4 py-2 rounded-md transition-all ${activeTab === tab.id ? 'bg-white dark:bg-gray-700 shadow-sm text-[#00D1FF]' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
              >
                <tab.icon className="mr-2 w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive demo container */}
        <div className="relative bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700 rounded-xl h-[500px] overflow-hidden">
          {/* Sliding panels */}
          <motion.div
            className="top-0 left-0 absolute flex w-[300%] h-full"
            animate={controls}
          >
            {/* Write Panel */}
            <div className="p-6 w-1/3 h-full">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2 mr-4">
                  <div className="bg-red-500 rounded-full w-3 h-3"></div>
                  <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
                  <div className="bg-green-500 rounded-full w-3 h-3"></div>
                </div>
                <span className="font-mono text-gray-500 text-sm">new-post.md</span>
              </div>
              <div className="h-[400px] overflow-y-auto font-mono text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="flex justify-center items-center p-8 w-1/3 h-full">
              <div className="relative w-full max-w-xs">
                <div className="-top-4 -right-4 z-10 absolute bg-[#00D1FF] px-2 py-1 rounded font-bold text-white text-xs">
                  LIVE PREVIEW
                </div>
                <div className="border-2 border-gray-300 rounded-3xl overflow-hidden">
                  <div className="flex items-center bg-gray-200 px-3 h-8">
                    <div className="bg-gray-400 mr-1 rounded-full w-2 h-2"></div>
                    <div className="bg-gray-400 mr-1 rounded-full w-2 h-2"></div>
                    <div className="bg-gray-400 rounded-full w-2 h-2"></div>
                  </div>
                  <div className="bg-white p-4 h-[400px] overflow-y-auto">
                    <h3 className="mb-2 font-bold text-xl">Welcome to my ByteBlog!</h3>
                    <p className="mb-4 text-gray-700">This platform makes writing and sharing content effortless. With built-in analytics and seamless distribution, your ideas can reach the right audience.</p>
                    <p className="text-gray-700">Try it today!</p>
                    <div className="flex items-center mt-6 pt-4 border-gray-200 border-t">
                      <div className="flex justify-center items-center bg-[#00D1FF] mr-2 rounded-full w-8 h-8 text-white">
                        Y
                      </div>
                      <span className="text-gray-500 text-sm">You • Just now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Panel */}
            <div className="flex justify-center items-center p-8 w-1/3 h-full">
              <div className="w-full max-w-md">
                <div className="bg-gray-100 dark:bg-gray-800 shadow-inner p-6 rounded-xl">
                  <h4 className="mb-4 font-bold text-gray-900 dark:text-white text-lg">Share this post</h4>
                  <div className="space-y-4">
                    <div className="flex items-center bg-white dark:bg-gray-700 p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div className="flex-grow pr-2 truncate">
                        byteblog.com/p/welcome-to-byteblog
                      </div>
                      <button
                        className="text-[#00D1FF] hover:text-[#4A00E0] transition-colors"
                        title="Copy link"
                        aria-label="Copy link"
                      >
                        <LinkIcon className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="gap-2 grid grid-cols-4">
                      {['Twitter', 'LinkedIn', 'Facebook', 'Reddit'].map((platform) => (
                        <button 
                          key={platform}
                          className="flex flex-col items-center hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                        >
                          <div className="bg-gray-300 dark:bg-gray-600 mb-1 rounded-full w-8 h-8"></div>
                          <span className="text-xs">{platform}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-4 border-gray-200 dark:border-gray-700 border-t">
                      <div className="flex items-center text-gray-500">
                        <ChartBarIcon className="mr-1 w-5 h-5" />
                        <span className="text-sm">24 shares</span>
                      </div>
                      <button className="font-medium text-[#00D1FF] hover:text-[#4A00E0] text-sm transition-colors">
                        View analytics →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="gap-4 grid grid-cols-2 md:grid-cols-4 mt-16 text-center"
        >
          {[
            { value: '10K+', label: 'Active Writers' },
            { value: '2M+', label: 'Monthly Readers' },
            { value: '95%', label: 'Uptime' },
            { value: '4.9/5', label: 'User Rating' }
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-sm p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
              <div className="font-bold text-[#00D1FF] text-2xl">{stat.value}</div>
              <div className="mt-1 text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}