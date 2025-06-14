'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  XMarkIcon,
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  UserCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

const AuthModal = () => {
  const { authModal, closeAuthModal, openAuthModal } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email'

    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 6)
      newErrors.password = 'Minimum 6 characters'

    if (authModal === 'register' && !formData.name) {
      newErrors.name = 'Name is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)

    try {
      // Replace with your actual auth logic
      console.log('Form data:', formData)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      closeAuthModal()
    } catch (error) {
      console.error('Auth error:', error)
      setErrors({ form: 'Something went wrong. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {authModal && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='z-40 fixed inset-0 bg-black/50 backdrop-blur-sm'
            onClick={closeAuthModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className='top-0 left-0 z-50 fixed bg-gray-50 shadow-2xl w-full max-w-md h-full overflow-y-auto'
            onClick={e => e.stopPropagation()}
          >
            <div className='relative flex flex-col p-6 h-full'>
              {/* Close button */}
              <button
                title='Close'
                onClick={closeAuthModal}
                className='top-6 right-6 absolute p-1 rounded-full text-gray-500 hover:text-gray-700 transition-colors'
              >
                <XMarkIcon className='w-6 h-6' />
              </button>

              {/* Logo */}
              <div className='flex items-center mb-8'>
                <div className='flex justify-center items-center bg-[#00D1FF] mr-3 rounded-lg w-10 h-10'>
                  <UserCircleIcon className='w-6 h-6 text-white' />
                </div>
                <span className='font-bold text-gray-900 text-xl'>
                  ByteBlog
                </span>
              </div>

              {/* Content */}
              <div className='flex-1'>
                <h2 className='mb-2 font-bold text-gray-900 text-2xl'>
                  {authModal === 'login' ? 'Welcome back' : 'Create account'}
                </h2>
                <p className='mb-8 text-gray-600'>
                  {authModal === 'login'
                    ? 'Sign in to access your account'
                    : 'Join our community of creators'}
                </p>

                {/* Social login */}
                <div className='space-y-4 mb-8'>
                  <button className='flex justify-center items-center hover:bg-gray-100 px-4 py-3 border border-gray-300 rounded-lg w-full transition-colors'>
                    <svg
                      className='mr-3 w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z' />
                    </svg>
                    Continue with Google
                  </button>
                  <button className='flex justify-center items-center hover:bg-gray-100 px-4 py-3 border border-gray-300 rounded-lg w-full transition-colors'>
                    <svg
                      className='mr-3 w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
                    </svg>
                    Continue with GitHub
                  </button>
                </div>

                <div className='flex items-center my-6'>
                  <div className='flex-1 border-gray-300 border-t'></div>
                  <span className='mx-4 text-gray-500'>or</span>
                  <div className='flex-1 border-gray-300 border-t'></div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className='space-y-4'>
                  {authModal === 'register' && (
                    <div>
                      <label
                        htmlFor='name'
                        className='block mb-1 font-medium text-gray-700 text-sm'
                      >
                        Full Name
                      </label>
                      <div className='relative'>
                        <div className='left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none'>
                          <UserCircleIcon className='w-5 h-5 text-gray-400' />
                        </div>
                        <input
                          id='name'
                          name='name'
                          type='text'
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white border ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          } rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:border-transparent`}
                          placeholder='John Doe'
                        />
                      </div>
                      {errors.name && (
                        <p className='mt-1 text-red-500 text-sm'>
                          {errors.name}
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor='email'
                      className='block mb-1 font-medium text-gray-700 text-sm'
                    >
                      Email Address
                    </label>
                    <div className='relative'>
                      <div className='left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none'>
                        <EnvelopeIcon className='w-5 h-5 text-gray-400' />
                      </div>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:border-transparent`}
                        placeholder='you@example.com'
                      />
                    </div>
                    {errors.email && (
                      <p className='mt-1 text-red-500 text-sm'>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='block mb-1 font-medium text-gray-700 text-sm'
                    >
                      Password
                    </label>
                    <div className='relative'>
                      <div className='left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none'>
                        <LockClosedIcon className='w-5 h-5 text-gray-400' />
                      </div>
                      <input
                        id='password'
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-12 py-3 bg-white border ${
                          errors.password ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:border-transparent`}
                        placeholder='••••••••'
                      />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='right-0 absolute inset-y-0 flex items-center pr-3 text-gray-400 hover:text-gray-500'
                      >
                        {showPassword ? (
                          <EyeSlashIcon className='w-5 h-5' />
                        ) : (
                          <EyeIcon className='w-5 h-5' />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className='mt-1 text-red-500 text-sm'>
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {authModal === 'login' && (
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center'>
                        <input
                          id='remember-me'
                          name='remember-me'
                          type='checkbox'
                          className='border-gray-300 rounded focus:ring-[#00D1FF] w-4 h-4 text-[#00D1FF]'
                        />
                        <label
                          htmlFor='remember-me'
                          className='block ml-2 text-gray-700 text-sm'
                        >
                          Remember me
                        </label>
                      </div>
                      <button
                        type='button'
                        className='text-[#00D1FF] text-sm hover:underline'
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  {errors.form && (
                    <div className='text-red-500 text-sm text-center'>
                      {errors.form}
                    </div>
                  )}

                  <button
                    type='submit'
                    disabled={isLoading}
                    className={`w-full flex justify-center items-center py-3 px-4 bg-[#00D1FF] hover:bg-[#00b8e0] text-white font-medium rounded-lg transition-colors ${
                      isLoading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <span className='flex items-center'>
                        <svg
                          className='mr-3 -ml-1 w-5 h-5 text-white animate-spin'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        {authModal === 'login' ? 'Sign In' : 'Create Account'}
                        <ArrowRightIcon className='ml-2 w-5 h-5' />
                      </>
                    )}
                  </button>
                </form>

                {/* Switch mode */}
                <div className='mt-6 text-gray-600 text-sm text-center'>
                  {authModal === 'login' ? (
                    <>
                      Don&#39;t have an account?{' '}
                      <button
                        onClick={() => openAuthModal('register')}
                        className='font-medium text-[#00D1FF] hover:underline'
                      >
                        Sign up
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{' '}
                      <button
                        onClick={() => openAuthModal('login')}
                        className='font-medium text-[#00D1FF] hover:underline'
                      >
                        Sign in
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default AuthModal
