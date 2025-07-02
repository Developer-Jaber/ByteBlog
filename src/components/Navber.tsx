'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'


const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Features',
    href: '#',
    subLinks: [
      { name: 'Writing Tools', href: '/writing-tools' },
      { name: 'Analytics', href: '/features/analytics' },
      { name: 'Monetization', href: '/features/monetization' }
    ]
  },
  { name: 'Templates', href: '/templates' },
  {
    name: 'Resources',
    href: '#',
    subLinks: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Community', href: '/community' }
    ]
  },
  { name: 'Pricing', href: '/pricing' }
]

export default function Navbar () {

  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { openAuthModal } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search logic here
    console.log('Searching for:', searchQuery)
    setSearchOpen(false)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300
    ${
      scrolled
        ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-lg'
        : 'bg-gray-900/60 backdrop-blur-md py-4'
    }
  `}
      >
        <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <Link href='/' className='flex items-center'>
              <div className='flex items-center'>
                <div className='flex justify-center items-center bg-[#00D1FF] mr-2 rounded-md w-8 h-8'>
                  <CodeBracketIcon className='w-5 h-5 text-gray-900' />
                </div>
                <span className='font-bold text-white text-xl'>ByteBlog</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-8'>
              {navLinks.map(link => (
                <div key={link.name} className='relative'>
                  {link.subLinks ? (
                    <div className='relative'>
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className={`flex items-center text-gray-300 hover:text-[#00D1FF] transition-colors ${
                          activeSubmenu === link.name ? 'text-[#00D1FF]' : ''
                        }`}
                      >
                        {link.name}
                        <ChevronDownIcon
                          className={`ml-1 h-4 w-4 transition-transform ${
                            activeSubmenu === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className='left-0 z-50 absolute bg-gray-800 shadow-lg mt-2 py-1 rounded-md w-48'
                          >
                            {link.subLinks.map(subLink => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                className='block hover:bg-gray-700 px-4 py-2 text-gray-300 hover:text-[#00D1FF] transition-colors'
                                onClick={() => setActiveSubmenu(null)}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className='text-gray-300 hover:text-[#00D1FF] transition-colors'
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className='flex items-center space-x-4'>
              <button
                title='Search'
                onClick={() => setSearchOpen(!searchOpen)}
                className='p-2 text-gray-300 hover:text-[#00D1FF] transition-colors'
              >
                <MagnifyingGlassIcon className='w-5 h-5' />
              </button>

              <div className='hidden md:flex space-x-2'>
                {/* <Link
                  href='/signin'
                  className='px-4 py-2 text-gray-300 hover:text-[#00D1FF] transition-colors'
                >
                  Sign In
                </Link> */}
                <button
                  onClick={() => openAuthModal('login')}
                  className='px-4 py-2 text-gray-300 hover:text-[#00D1FF] transition-colors'
                >
                  Sign In
                </button>

                <Link
                  href='/register'
                  className='bg-[#00D1FF] hover:bg-[#00b8e0] px-4 py-2 rounded-md font-medium text-gray-900 transition-colors'
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='md:hidden p-2 text-gray-300 hover:text-[#00D1FF] transition-colors'
              >
                {isOpen ? (
                  <XMarkIcon className='w-6 h-6' />
                ) : (
                  <Bars3Icon className='w-6 h-6' />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden bg-gray-900 overflow-hidden'
            >
              <div className='space-y-4 px-4 pt-2 pb-6'>
                {navLinks.map(link => (
                  <div key={link.name}>
                    {link.subLinks ? (
                      <div className='mb-2'>
                        <button
                          type='button'
                          onClick={() => toggleSubmenu(link.name)}
                          className={`flex items-center justify-between w-full py-2 text-left text-gray-300 ${
                            activeSubmenu === link.name ? 'text-[#00D1FF]' : ''
                          }`}
                        >
                          {link.name}
                          <ChevronDownIcon
                            className={`h-4 w-4 transition-transform ${
                              activeSubmenu === link.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {activeSubmenu === link.name && (
                          <div className='space-y-3 mt-2 pl-4'>
                            {link.subLinks.map(subLink => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                className='block py-1 text-gray-400 hover:text-[#00D1FF] transition-colors'
                                onClick={() => setIsOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className='block py-2 text-gray-300 hover:text-[#00D1FF] transition-colors'
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className='space-y-3 pt-4 border-gray-800 border-t'>
                  <Link
                    href='/signin'
                    className='flex items-center py-2 text-gray-300 hover:text-[#00D1FF] transition-colors'
                    onClick={() => setIsOpen(false)}
                  >
                    <ArrowRightOnRectangleIcon className='mr-2 w-5 h-5' />
                    Sign In
                  </Link>
                  <Link
                    href='/register'
                    className='flex justify-center items-center bg-[#00D1FF] hover:bg-[#00b8e0] py-2 rounded-md font-medium text-gray-900 transition-colors'
                    onClick={() => setIsOpen(false)}
                  >
                    <UserCircleIcon className='mr-2 w-5 h-5' />
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='z-50 fixed inset-0 flex justify-center items-center bg-gray-900/95 backdrop-blur-md p-4'
              onClick={() => setSearchOpen(false)}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='w-full max-w-xl'
                onClick={e => e.stopPropagation()}
              >
                <form onSubmit={handleSearch} className='relative'>
                  <input
                    type='text'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Search articles, topics, or authors...'
                    className='bg-gray-800 px-6 py-4 pr-12 border border-gray-700 rounded-xl focus:outline-none focus:ring-[#00D1FF] focus:ring-2 w-full text-white'
                    autoFocus
                  />
                  <button
                    type='submit'
                    title='Search'
                    className='top-1/2 right-3 absolute p-2 text-gray-400 hover:text-[#00D1FF] transition-colors -translate-y-1/2 transform'
                  >
                    <MagnifyingGlassIcon className='w-5 h-5' />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to account for fixed navbar */}
      <div className='h-16'></div>
    </>
  )
}

function ChevronDownIcon (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M19 9l-7 7-7-7'
      />
    </svg>
  )
}
