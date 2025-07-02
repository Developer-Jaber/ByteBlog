import { SparklesIcon } from 'lucide-react'

export default function AIGeneratorPage() {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] to-[#f0f4f8] px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="bg-white shadow-md mx-auto p-8 rounded-xl max-w-4xl overflow-hidden">
        <div className="flex items-center gap-3 mb-8">
          <SparklesIcon className="w-8 h-8 text-[#00D1FF]" />
          <h1 className="font-bold text-gray-900 text-3xl">AI Content Generator</h1>
        </div>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="topic" className="block mb-1 font-medium text-gray-700 text-sm">
              What do you want to write about?
            </label>
            <input
              type="text"
              id="topic"
              className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-[#00D1FF] focus:ring-2 w-full"
              placeholder="Enter your topic..."
            />
          </div>
          
          <div>
            <label htmlFor="tone" className="block mb-1 font-medium text-gray-700 text-sm">
              Select tone
            </label>
            <select
              id="tone"
              className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-[#00D1FF] focus:ring-2 w-full"
            >
              <option>Professional</option>
              <option>Casual</option>
              <option>Friendly</option>
              <option>Authoritative</option>
            </select>
          </div>
          
          <button className="bg-[#00D1FF] hover:bg-[#00b8e0] px-4 py-3 rounded-lg w-full font-medium text-white transition-colors">
            Generate Content
          </button>
          
          <div className="pt-6 border-gray-200 border-t">
            <h3 className="mb-4 font-medium text-gray-900 text-lg">Generated Content</h3>
            <div className="bg-gray-50 p-4 rounded-lg min-h-48">
              {/* AI generated content will appear here */}
              <p className="text-gray-500 italic">Your generated content will appear here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}