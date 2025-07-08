import { CheckIcon, StarIcon, ZapIcon, SparklesIcon } from "lucide-react";
import PricingCard from "@/components/PricingCard";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#f0f4f8] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-[#00D1FF]/10 px-6 py-3 rounded-full mb-6">
            <ZapIcon className="h-5 w-5 text-[#00D1FF] mr-2" />
            <span className="text-sm font-medium text-[#00D1FF]">
              Simple, transparent pricing
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a hobbyist writer or a professional publisher, we have
            the right plan for you.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <button className="px-6 py-2 font-medium rounded-md bg-white shadow-sm text-gray-900">
              Monthly
            </button>
            <button className="px-6 py-2 font-medium rounded-md text-gray-600 hover:text-gray-900">
              Yearly <span className="text-[#00D1FF]">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingCard
            name="Starter"
            price="$9"
            period="per month"
            description="Perfect for new bloggers"
            highlight={false}
            features={[
              "5 published posts",
              "Basic analytics",
              "Email support",
              "500MB storage",
              "Custom domain",
            ]}
            buttonText="Get Started"
          />
          <PricingCard
            name="Pro"
            price="$29"
            period="per month"
            description="For growing blogs"
            highlight={true}
            features={[
              "Unlimited posts",
              "Advanced analytics",
              "Priority support",
              "5GB storage",
              "Custom themes",
              "SEO tools",
              "Email newsletter",
            ]}
            buttonText="Go Pro"
          />
          <PricingCard
            name="Enterprise"
            price="$99"
            period="per month"
            description="For professional publishers"
            highlight={false}
            features={[
              "Unlimited posts",
              "Premium analytics",
              "24/7 support",
              "50GB storage",
              "API access",
              "Team collaboration",
              "White-label options",
            ]}
            buttonText="Contact Sales"
          />
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 p-6 border-b border-gray-200 flex items-center">
            <SparklesIcon className="h-6 w-6 text-[#00D1FF] mr-2" />
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                    Pro
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Published posts", "5", "Unlimited", "Unlimited"],
                  ["Storage", "500MB", "5GB", "50GB"],
                  ["Analytics", "Basic", "Advanced", "Premium"],
                  ["Support", "Email", "Priority", "24/7"],
                  ["Custom themes", "✕", "✓", "✓"],
                  ["SEO tools", "✕", "✓", "✓"],
                  ["API access", "✕", "✕", "✓"],
                  ["Team members", "1", "3", "Unlimited"],
                ].map(([feature, ...plans], index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {feature}
                    </td>
                    {plans.map((plan, planIndex) => (
                      <td
                        key={planIndex}
                        className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500"
                      >
                        {plan === "✓" ? (
                          <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                        ) : plan === "✕" ? (
                          <span className="text-gray-300">—</span>
                        ) : (
                          plan
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "ByteBlog's Pro plan transformed my writing workflow. The analytics are incredible!",
                author: "Sarah Johnson",
                role: "Professional Blogger",
              },
              {
                quote:
                  "The perfect balance of features and affordability. Highly recommend for any writer.",
                author: "Michael Chen",
                role: "Tech Writer",
              },
              {
                quote:
                  "Our publishing team switched to Enterprise and never looked back. The support is top-notch.",
                author: "David Wilson",
                role: "Content Director",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Can I switch plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time with just a few clicks.",
              },
              {
                question: "Do you offer discounts for students?",
                answer:
                  "We offer a 50% discount for students with valid .edu email addresses.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes, all paid plans come with a 14-day free trial. No credit card required.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}