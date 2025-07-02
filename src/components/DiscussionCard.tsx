'use client'

import { motion } from 'framer-motion'


interface DiscussionCardProps {
  title: string
  author: string
  comments: number
  likes: number
  tags: string[]
}

export default function DiscussionCard({
  title,
  author,
  comments,
  likes,
  tags,
}: DiscussionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="bg-white shadow-sm border border-gray-200 hover:border-[#00D1FF] rounded-xl h-full overflow-hidden transition-all">
        <div className="flex flex-col p-6 h-full">
          <div className="flex-grow">
            <h3 className="mb-2 font-semibold text-gray-900 text-lg">{title}</h3>
            <p className="mb-4 text-gray-600 text-sm">by {author}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center bg-[#00D1FF]/10 px-2.5 py-0.5 rounded-full font-medium text-[#00D1FF] text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-gray-100 border-t">
            <div className="flex items-center text-gray-500 text-sm">
              <svg
                className="mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {comments} comments
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <svg
                className="mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {likes} likes
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}