import React from 'react'

const FAQ = () => {
  const testimonials = [
    {
      name: 'Sara',
      role: 'CMO',
      company: 'Tech Startup',
      image: '/images/joinus/CMO.jpg',
      quote: 'The AI masterclass gave our marketing team practical tools we could implement immediately. We saw a 40% improvement in campaign performance within weeks.'
    },
    {
      name: 'Raj',
      role: 'Head of Sales',
      company: 'SaaS Company',
      image: '/images/joinus/Head of Sales.png',
      quote: 'The leadership coaching helped me align our sales strategy with AI capabilities. Our team is now more confident and our pipeline has grown significantly.'
    },
    {
      name: 'Lina',
      role: 'COO',
      company: 'Consulting Firm',
      image: '/images/joinus/COO.jpg',
      quote: 'The 90-day programme transformed how we operate. We\'ve automated 60% of our reporting and freed up 20 hours per week for strategic work.'
    },
    {
      name: 'Tom',
      role: 'CEO',
      company: 'Manufacturing',
      image: '/images/joinus/CEO.png',
      quote: 'Finally, AI that makes sense for our business. The Prism Lab helped us identify the right use cases and implement them without breaking the bank.'
    }
  ]

  const faqs = [
    {
      question: 'How can SMBs adopt AI quickly without a big budget?',
      answer: 'Most SMBs think AI requires major investment, but results come faster with focused use cases. We help you start small: AI workshops that upskill teams, leadership coaching that sets priorities, and a 90-day programme that embeds AI into existing tools like CRM, content, and reporting. This way, you get measurable outcomes — faster sales cycles, better marketing conversion, leaner operations — without hiring data scientists or building in-house platforms.'
    },
    {
      question: 'What makes The Prism Lab different from other AI consultancies?',
      answer: 'Many AI consultants focus on tools and technology. We focus on business outcomes. Our approach combines training, strategy, and execution tied directly to revenue and efficiency. We\'re also built for SMBs: programmes are cost-effective, practical, and tool-agnostic. Instead of leaving you with slide decks or unfinished pilots, we ensure your teams are confident with AI, your leaders are aligned on priorities, and your workflows are embedded into daily execution.'
    },
    {
      question: 'Do I need technical staff to benefit from your programmes?',
      answer: 'No. Our services are designed for business users, not technical teams. Sales, marketing, and operations leaders can all use AI with the right training and workflows. We provide hands-on masterclasses, leadership coaching, and ready-to-use templates so your people can adopt AI without needing coding skills. If you already have IT or data teams, we complement them by helping align AI use cases with commercial goals.'
    },
    {
      question: 'How long does it take to see measurable results?',
      answer: 'Most clients see quick wins within weeks. In masterclasses, teams walk away with a 2-tool adoption plan they can apply immediately. Leadership coaching often produces strategic clarity in the first month. In the 90-day AI Revenue Launchpad, measurable improvements — such as faster marketing cycles, reduced reporting time, or higher close rates — are built into the roadmap. We design every engagement with clear KPIs, owners, and timelines so outcomes are visible fast.'
    },
    {
      question: 'Which industries do you work with?',
      answer: 'We work across sectors where SMBs need to scale sales, marketing, and operations. Our experience spans SaaS, consulting, professional services, retail, and financial services. Because our programmes are tool-agnostic and outcome-driven, the principles apply in almost any industry. The common thread: SMB leaders who want to move beyond experiments and see AI tied to revenue growth, customer experience, and operational efficiency.'
    }
  ]

  return (
    <div className="bg-gray-50">
      {/* Testimonials Section */}
      <div id="faq-section" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Who Is It For</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leaders who want results, not experiments
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h3 className="text-sm font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <p className="text-xs text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <blockquote className="text-sm text-gray-600">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq-questions-section" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq, index) => (
                <div key={index} className="pt-6">
                  <dt className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
