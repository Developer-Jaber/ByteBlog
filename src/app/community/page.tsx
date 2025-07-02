'use client';
import { UsersIcon, MessageSquareIcon, TrendingUpIcon, CalendarIcon, StarIcon } from 'lucide-react'
import CommunityCard from '@/components/CommunityCard'
import DiscussionCard from '@/components/DiscussionCard'
import EventCard from '@/components/EventCard'


export default function CommunityPage() {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] to-[#f0f4f8] px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex justify-center items-center bg-[#00D1FF]/10 mb-6 px-6 py-3 rounded-full">
            <UsersIcon className="mr-2 w-5 h-5 text-[#00D1FF]" />
            <span className="font-medium text-[#00D1FF] text-sm">Join our community</span>
          </div>
          <h1 className="mb-4 font-bold text-gray-900 text-4xl">Connect with Fellow Creators</h1>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl">
            Share ideas, get feedback, and grow together with writers and developers worldwide.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="gap-4 grid grid-cols-2 md:grid-cols-4 mb-16">
          <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl text-center">
            <div className="mb-2 font-bold text-[#00D1FF] text-3xl">12K+</div>
            <div className="text-gray-600">Members</div>
          </div>
          <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl text-center">
            <div className="mb-2 font-bold text-[#00D1FF] text-3xl">5K+</div>
            <div className="text-gray-600">Discussions</div>
          </div>
          <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl text-center">
            <div className="mb-2 font-bold text-[#00D1FF] text-3xl">300+</div>
            <div className="text-gray-600">Events</div>
          </div>
          <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-xl text-center">
            <div className="mb-2 font-bold text-[#00D1FF] text-3xl">24/7</div>
            <div className="text-gray-600">Active Community</div>
          </div>
        </div>

        {/* Featured Discussions */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="flex items-center font-bold text-gray-900 text-2xl">
              <MessageSquareIcon className="mr-2 w-6 h-6 text-[#00D1FF]" />
              Trending Discussions
            </h2>
            <button className="font-medium text-[#00D1FF] hover:underline">
              View all
            </button>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <DiscussionCard
              title="Best practices for SEO in 2024"
              author="Sarah Johnson"
              comments={42}
              likes={128}
              tags={['SEO', 'Writing']}
            />
            <DiscussionCard
              title="How do you overcome writer's block?"
              author="Michael Chen"
              comments={35}
              likes={97}
              tags={['Writing', 'Productivity']}
            />
            <DiscussionCard
              title="Next.js vs Gatsby for blogs - 2024 comparison"
              author="David Wilson"
              comments={28}
              likes={84}
              tags={['Tech', 'Development']}
            />
          </div>
        </section>

        {/* Community Features */}
        <section className="mb-16">
          <h2 className="mb-8 font-bold text-gray-900 text-2xl">Community Features</h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
            <CommunityCard
              icon={<TrendingUpIcon className="w-8 h-8 text-[#00D1FF]" />}
              title="Weekly Challenges"
              description="Participate in our writing challenges and get featured"
            />
            <CommunityCard
              icon={<StarIcon className="w-8 h-8 text-[#00D1FF]" />}
              title="Expert AMAs"
              description="Live Q&A sessions with industry experts"
            />
            <CommunityCard
              icon={<UsersIcon className="w-8 h-8 text-[#00D1FF]" />}
              title="Collaboration Hub"
              description="Find partners for your next project"
            />
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="flex items-center font-bold text-gray-900 text-2xl">
              <CalendarIcon className="mr-2 w-6 h-6 text-[#00D1FF]" />
              Upcoming Events
            </h2>
            <button className="font-medium text-[#00D1FF] hover:underline">
              View calendar
            </button>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Content Marketing Workshop"
              date="June 15, 2024"
              time="2:00 PM EST"
              type="Virtual"
            />
            <EventCard
              title="Meetup: NYC Writers"
              date="June 22, 2024"
              time="6:00 PM EST"
              type="In-Person"
            />
            <EventCard
              title="Live Q&A: SEO Strategies"
              date="June 28, 2024"
              time="1:00 PM EST"
              type="Virtual"
            />
          </div>
        </section>
      </div>
    </div>
  )
}