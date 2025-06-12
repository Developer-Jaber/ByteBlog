'use client'
import Link from 'next/link'
import React from 'react'

export default function Navber () {
  return (
    <nav>
      <div className='flex justify-between items-center bg-gray-500 p-5 text-white'>
        <div className='font-bold text-lg'>Byte Blog</div>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className='hover:underline'>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact' className='hover:underline'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
