'use client';

import { motion } from 'framer-motion';
import { 
    ArrowRightIcon,
  BoltIcon,
  ChartBarIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ShareIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Built for speed with Next.js server-side rendering. Your content loads instantly, keeping readers engaged.',
    icon: BoltIcon,
  },
  {
    name: 'SEO Optimized',
    description: 'Automatic SEO tools help your content rank higher in search results with minimal effort.',
    icon: ChartBarIcon,
  },
  {
    name: 'Global Reach',
    description: 'Our CDN ensures your blog loads fast for readers anywhere in the world.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Secure Platform',
    description: 'Enterprise-grade security protects your content and your readers data.',
    icon: LockClosedIcon,
  },
  {
    name: 'Easy Sharing',
    description: 'One-click social sharing and embed tools to grow your audience.',
    icon: ShareIcon,
  },
  {
    name: 'Beautiful Themes',
    description: 'Customizable, responsive themes that make your content look professional.',
    icon: SparklesIcon,
  },
];

export default function Features() {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-24">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#00D1FF] rounded-full"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-gray-900 dark:text-white text-3xl md:text-4xl"
          >
            Everything you need to <span className="text-[#00D1FF]">succeed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300 text-xl"
          >
            ByteBlog provides all the tools modern creators need to build an audience and monetize their content.
          </motion.p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl p-6 border border-gray-100 dark:border-gray-700 rounded-xl transition-shadow"
            >
              <div className="-top-4 -left-4 absolute flex justify-center items-center bg-[#00D1FF] rounded-full w-12 h-12">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mt-2 mb-3 font-semibold text-gray-900 dark:text-white text-lg">
                {feature.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center bg-[#4A00E0] hover:bg-[#3A00B0] shadow-sm px-6 py-3 border border-transparent rounded-md font-medium text-white text-base transition-colors">
            Explore all features
            <ArrowRightIcon className="-mr-1 ml-3 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}