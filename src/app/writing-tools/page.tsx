'use client';
import ToolCard from '@/components/ToolCard'
import { NotebookIcon, SparklesIcon, Wand2Icon, BookOpenCheckIcon } from 'lucide-react'


export default function WritingToolsPage() {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] to-[#f0f4f8] px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="flex justify-center items-center gap-3 mb-4 font-bold text-gray-900 text-4xl">
            <Wand2Icon className="w-10 h-10 text-[#00D1FF]" />
            Writing Tools
          </h1>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl">
            Enhance your writing with our AI-powered toolkit designed for bloggers and content creators.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ToolCard
            icon={<SparklesIcon className="w-8 h-8 text-[#00D1FF]" />}
            title="AI Content Generator"
            description="Generate high-quality blog posts with AI assistance"
            link="/writing-tools/ai-generator"
          />
          <ToolCard
            icon={<BookOpenCheckIcon className="w-8 h-8 text-[#00D1FF]" />}
            title="Grammar Checker"
            description="Polish your writing with advanced grammar suggestions"
            link="/writing-tools/grammar-check"
          />
          <ToolCard
            icon={<NotebookIcon className="w-8 h-8 text-[#00D1FF]" />}
            title="SEO Optimizer"
            description="Improve your content's search engine visibility"
            link="/writing-tools/seo-optimizer"
          />
          <ToolCard
            icon={<Wand2Icon className="w-8 h-8 text-[#00D1FF]" />}
            title="Title Generator"
            description="Create compelling headlines that attract readers"
            link="/writing-tools/title-generator"
          />
          <ToolCard
            icon={<SparklesIcon className="w-8 h-8 text-[#00D1FF]" />}
            title="Content Rewriter"
            description="Rephrase existing content while keeping the meaning"
            link="/writing-tools/rewriter"
          />
          <ToolCard
            icon={<NotebookIcon className="w-8 h-8 text-[#00D1FF]" />}
            title="Plagiarism Checker"
            description="Ensure your content is 100% original"
            link="/writing-tools/plagiarism-check"
          />
        </div>
      </div>
    </div>
  )
}