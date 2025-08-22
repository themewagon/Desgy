import React from 'react'

const Manage = () => {
  const services = [
    {
      title: 'AI Readiness Masterclasses',
      description: 'Practical training for business teams with half-day or full-day formats',
      features: [
        'Hands-on AI tool training',
        'Custom use case development',
        'Team adoption strategies',
        'Implementation roadmaps'
      ],
      duration: 'Half-day or Full-day',
      price: 'From $2,500'
    },
    {
      title: 'AI Leadership Coaching',
      description: 'Clarity and confidence for decision-makers with monthly coaching',
      features: [
        'Strategic AI planning',
        'ROI optimization',
        'Change management',
        'Team alignment'
      ],
      duration: 'Monthly sessions',
      price: 'From $1,500/month'
    },
    {
      title: 'AI Revenue Launchpad (90 Days)',
      description: 'A structured enablement programme that delivers measurable outcomes',
      features: [
        'End-to-end AI implementation',
        'Performance tracking',
        'Ongoing support',
        'Guaranteed outcomes'
      ],
      duration: '90 days',
      price: 'From $15,000'
    }
  ]

  return (
    <div id="services-section" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the right level of support for your AI journey. From quick wins to comprehensive transformation.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <div className="mb-8">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{service.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{service.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-sm font-semibold leading-6 text-gray-900">{service.duration}</p>
                <p className="mt-4 text-2xl font-bold tracking-tight text-gray-900">{service.price}</p>
                <a
                  href="#contactus-section"
                  className="mt-6 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Manage
