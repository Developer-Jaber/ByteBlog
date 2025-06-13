'use client';

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ArrowUpIcon,
  CodeBracketIcon,
  BookOpenIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
// import Image from 'next/image';

const socialLinks = [
  { name: 'Twitter', url: '#', icon: '/icons/twitter.svg' },
  { name: 'GitHub', url: '#', icon: '/icons/github.svg' },
  { name: 'LinkedIn', url: '#', icon: '/icons/linkedin.svg' },
  { name: 'Instagram', url: '#', icon: '/icons/instagram.svg' }
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Templates', href: '#' },
      { name: 'Integrations', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API Status', href: '#' }
    ]
  }
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-900 pt-20 pb-12 text-gray-300">
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="absolute font-mono text-[#00D1FF] text-xs"
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
        {/* Main footer content */}
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <CodeBracketIcon className="mr-2 w-8 h-8 text-[#00D1FF]" />
              <span className="font-bold text-white text-2xl">ByteBlog</span>
            </div>
            <p className="mb-6 max-w-md">
              The next-generation platform for creators who want to share their knowledge with the world.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <label htmlFor="email" className="block font-medium text-sm">
                Stay updated
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow bg-gray-800 px-4 py-2 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-[#00D1FF] focus:ring-2 text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#00D1FF] hover:bg-[#00b8e0] px-4 py-2 rounded-r-lg font-medium text-gray-900 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm"
                >
                  Thanks for subscribing!
                </motion.div>
              )}
            </form>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="mb-4 font-semibold text-white text-lg">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="flex items-center hover:text-[#00D1FF] transition-colors"
                    >
                      {link.name === 'Documentation' && <BookOpenIcon className="mr-2 w-4 h-4" />}
                      {link.name === 'Community' && <UserGroupIcon className="mr-2 w-4 h-4" />}
                      {link.name === 'Help Center' && <ChatBubbleLeftRightIcon className="mr-2 w-4 h-4" />}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-gray-800 border-t"></div>

        {/* Bottom footer */}
        <div className="flex md:flex-row flex-col justify-between items-center">
          {/* Contact info */}
          <div className="flex sm:flex-row flex-col gap-6 mb-6 md:mb-0">
            <div className="flex items-center">
              <MapPinIcon className="mr-2 w-5 h-5 text-[#00D1FF]" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="mr-2 w-5 h-5 text-[#00D1FF]" />
              <a href="mailto:hello@byteblog.com">hello@byteblog.com</a>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="mr-2 w-5 h-5 text-[#00D1FF]" />
              <a href="tel:+11234567890">+1 (123) 456-7890</a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex justify-center items-center bg-gray-800 hover:bg-[#00D1FF] rounded-full w-10 h-10 hover:text-gray-900 transition-colors"
              >
                {/* <Image 
                  src={social.icon} 
                  alt={social.name} 
                  className="brightness-0 invert w-5 h-5 filter"
                /> */}
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center text-sm"
          >
            Back to top
            <ArrowUpIcon className="ml-1 w-4 h-4 group-hover:text-[#00D1FF] transition-colors" />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-gray-500 text-sm text-center">
          <p>© {new Date().getFullYear()} ByteBlog. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:text-[#00D1FF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00D1FF] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#00D1FF] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}