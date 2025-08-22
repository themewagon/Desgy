import React from 'react'

const Banner = () => {
  return (
    <div id="banner-section" className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Turn AI Hype Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
              Outcomes
            </span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            AI training, strategy, and execution services for SMBs. Practical masterclasses, coaching, and 90-day programmes that deliver measurable results.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contactus-section"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
            <a href="#approach-section" className="text-lg font-semibold leading-6 text-white hover:text-gray-300 transition-colors duration-300">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
