'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CommunityCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function CommunityCard({
  icon,
  title,
  description,
}: CommunityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="bg-white shadow-sm border border-gray-200 hover:border-[#00D1FF] rounded-xl h-full overflow-hidden transition-all">
        <div className="flex flex-col p-6 h-full">
          <div className="bg-gray-50 mb-4 p-3 rounded-lg w-max">
            {icon}
          </div>
          <h3 className="mb-2 font-semibold text-gray-900 text-lg">{title}</h3>
          <p className="flex-grow text-gray-600">{description}</p>
          <Link
            href="#"
            className="flex items-center mt-4 font-medium text-[#00D1FF] hover:underline"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}