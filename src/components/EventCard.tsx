'use client'

import { motion } from 'framer-motion'


interface EventCardProps {
  title: string
  date: string
  time: string
  type: 'Virtual' | 'In-Person'
}

export default function EventCard({
  title,
  date,
  time,
  type,
}: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="bg-white shadow-sm border border-gray-200 hover:border-[#00D1FF] rounded-xl h-full overflow-hidden transition-all">
        <div className="flex flex-col p-6 h-full">
          <div className="flex-grow">
            <h3 className="mb-2 font-semibold text-gray-900 text-lg">{title}</h3>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {date}
            </div>
            <div className="flex items-center mb-4 text-gray-600 text-sm">
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {time}
            </div>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                type === 'Virtual'
                  ? 'bg-purple-100 text-purple-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {type}
            </span>
          </div>
          <button className="bg-[#00D1FF] hover:bg-[#00b8e0] mt-4 px-4 py-2 rounded-lg w-full font-medium text-white transition-colors">
            RSVP
          </button>
        </div>
      </div>
    </motion.div>
  )
}