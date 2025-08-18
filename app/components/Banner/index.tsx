import Image from "next/image";

const Banner = () => {
    return (
        <>
            {/* Floating CTA Button - Always Visible */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className='bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 font-body text-sm shadow-xl hover:shadow-2xl hover:scale-105'>
                    Book a strategy call
                </button>
            </div>

            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative'>
                    {/* No background overlay - let gradient show through */}

                    {/* COLUMN-1 */}

                    <div className="relative z-10 px-4 sm:px-0">
                        <div className='my-6 sm:my-7 text-center lg:text-start'>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 font-headline leading-tight'>
                                Turn AI hype into outcomes for your business
                            </h1>
                            <p className='text-base sm:text-lg lg:text-xl text-grey mb-4 sm:mb-6 leading-relaxed drop-shadow-sm font-body'>
                                <strong>AI is no longer optional.</strong> Customers expect speed, personalisation, and smarter decisions.
                            </p>
                            <p className='text-sm sm:text-base lg:text-lg text-grey mb-6 sm:mb-8 leading-relaxed drop-shadow-sm font-body'>
                                <strong>The Prism Lab helps you move from pilots to performance.</strong> We equip your people with practical AI skills and embed workflows that deliver measurable growth.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start'>
                                <button className='bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 font-body text-base sm:text-lg shadow-lg hover:shadow-xl'>
                                    Book a strategy call
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2 - Hero Image */}

                    <div className='relative lg:col-span-1'>
                        <div className='relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl'>
                            <Image 
                                src="/images/banner/gRs0BVWcmJZUcyuRnWRFV.png" 
                                alt="AI strategy and execution for SMBs - The Prism Lab helping businesses turn AI hype into outcomes with practical training and coaching services"
                                fill
                                className='object-cover object-center'
                                style={{ objectPosition: 'center 20%' }}
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Banner;
