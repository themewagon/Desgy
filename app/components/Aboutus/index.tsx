import React from 'react'

const Aboutus = () => {
  return (
    <div id="aboutus-section" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're a team of AI practitioners and business strategists who understand the gap between AI potential and practical implementation.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <article className="flex flex-col items-start">
            <div className="relative w-full">
              <img
                src="/images/aboutus/Marlene Vicaire Profile Pic.jpeg"
                alt="Marlene Vicaire"
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Co-Founder & CEO
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  Marlene Vicaire
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  AI strategist with 15+ years in digital transformation. Former Head of AI at major consulting firms, now focused on making AI practical for SMBs.
                </p>
              </div>
            </div>
          </article>
          <article className="flex flex-col items-start">
            <div className="relative w-full">
              <img
                src="/images/aboutus/Tamara Dinneen_Profile Pic.jpg"
                alt="Tamara Dinneen"
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Co-Founder & COO
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  Tamara Dinneen
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Operations expert with deep experience in scaling AI initiatives. Former VP of Operations at tech startups, specializing in AI implementation and change management.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
