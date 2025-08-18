const Aboutus = () => {
    return (
        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-tertiary via-white to-tertiary/50 rounded-3xl my-12 sm:my-16 relative overflow-hidden'>
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
                </div>

                <div className='text-center mb-12 sm:mb-16 relative z-10'>
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <span className='text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase font-data'>ABOUT US</span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-6 sm:mb-8 font-headline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                        Why Work With Us
                    </h2>
                    <p className='text-lg sm:text-xl lg:text-2xl text-grey max-w-4xl mx-auto font-body px-4 leading-relaxed'>
                        Together, we combine commercial execution and technical depth to help businesses turn AI hype into outcomes for their business.
                    </p>
                </div>
                
                {/* Team Members - 2 Columns */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 relative z-10'>
                    
                    {/* Column 1 - Marlene Vicaire */}
                    <div className='bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/20 relative overflow-hidden group'>
                        {/* Card background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                            <div className='text-center lg:text-left'>
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className='text-primary text-2xl font-bold'>MV</span>
                                </div>
                                <h4 className='text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-headline'>Marlene Vicaire</h4>
                                <p className='text-base sm:text-lg text-primary-light font-semibold mb-4 sm:mb-6 font-body'>
                                    Commercial strategist with 20+ years in SaaS, consulting, and Go-To-Market leadership across APAC.
                                </p>
                                <p className='text-sm sm:text-base text-grey leading-relaxed font-body'>
                                    Certified in AI, change management, and human-centred design.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Tamara Dinneen */}
                    <div className='bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/20 relative overflow-hidden group'>
                        {/* Card background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                            <div className='text-center lg:text-left'>
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className='text-primary text-2xl font-bold'>TD</span>
                                </div>
                                <h4 className='text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-headline'>Tamara Dinneen</h4>
                                <p className='text-base sm:text-lg text-primary-light font-semibold mb-4 sm:mb-6 font-body'>
                                    Enterprise technology leader and AI/ML expert with 20+ years in product strategy and digital transformation.
                                </p>
                                <p className='text-sm sm:text-base text-grey leading-relaxed font-body'>
                                    Doctoral candidate in Artificial Intelligence and Machine Learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Business Impact Section */}
                <div className='bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 relative overflow-hidden group relative z-10'>
                    {/* Card background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                        <div className='text-center mb-8 sm:mb-12'>
                            <h4 className='text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 font-headline'>Focused on business impact</h4>
                        </div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10'>
                            <div className='bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300'>
                                <div className='flex items-center mb-3'>
                                    <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3'>
                                        <span className='text-white text-sm font-bold'>1</span>
                                    </div>
                                    <h5 className='font-bold text-primary text-lg'>Cost-Effective</h5>
                                </div>
                                <p className='text-grey text-base font-medium leading-relaxed'>
                                    Programmes are designed for lean teams, with cost-effective delivery.
                                </p>
                            </div>
                            <div className='bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300'>
                                <div className='flex items-center mb-3'>
                                    <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3'>
                                        <span className='text-white text-sm font-bold'>2</span>
                                    </div>
                                    <h5 className='font-bold text-primary text-lg'>Commercially Driven</h5>
                                </div>
                                <p className='text-grey text-base font-medium leading-relaxed'>
                                    Every engagement ties AI back to revenue and efficiency.
                                </p>
                            </div>
                            <div className='bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300'>
                                <div className='flex items-center mb-3'>
                                    <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3'>
                                        <span className='text-white text-sm font-bold'>3</span>
                                    </div>
                                    <h5 className='font-bold text-primary text-lg'>Practical Approach</h5>
                                </div>
                                <p className='text-grey text-base font-medium leading-relaxed'>
                                    Hands-on, tool-agnostic, and immediately applicable.
                                </p>
                            </div>
                        </div>
                        
                        <div className='text-center'>
                            <button className='bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 font-body text-base sm:text-lg shadow-lg hover:shadow-xl'>
                                Book a strategy call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;