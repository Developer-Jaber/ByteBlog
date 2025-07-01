'use client'
import { useAuth } from '@/context/AuthContext'
import {
  ArrowRightIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export default function LoginForm () {
  const {  closeAuthModal } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    <div>
      {/* Form */}
      <form onSubmit={handleSubmit} className='space-y-4'>
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
            <p className='mt-1 text-red-500 text-sm'>{errors.email}</p>
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
            <p className='mt-1 text-red-500 text-sm'>{errors.password}</p>
          )}
        </div>

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

        {errors.form && (
          <div className='text-red-500 text-sm text-center'>{errors.form}</div>
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
              <span>Login</span>
              <ArrowRightIcon className='ml-2 w-5 h-5' />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
