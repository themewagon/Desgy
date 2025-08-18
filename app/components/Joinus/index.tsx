import React from 'react';

const Join = () => {
    return (
        <div id="contactus-section" className="my-32 relative overflow-hidden">
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                <div className="text-center mb-16">
                    <h2 className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 font-data">CONTACT US</h2>
                    <h3 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight font-headline">Start your AI journey today</h3>
                    <p className="text-grey text-xl max-w-3xl mx-auto font-body">Ready to turn AI hype into outcomes for your business?</p>
                </div>

                <div className="mx-auto max-w-4xl">
                    <form className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-grey mb-2">First Name *</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full py-3 px-4 text-base text-darkpurple rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" 
                                    placeholder="First name" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-grey mb-2">Last Name *</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full py-3 px-4 text-base text-darkpurple rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" 
                                    placeholder="Last name" 
                                />
                            </div>
                        </div>

                        {/* Title and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-grey mb-2">Title *</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full py-3 px-4 text-base text-darkpurple rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" 
                                    placeholder="e.g. CEO, Marketing Manager" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-grey mb-2">Email *</label>
                                <input 
                                    type="email" 
                                    required
                                    className="w-full py-3 px-4 text-base text-darkpurple rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" 
                                    placeholder="your.email@company.com" 
                                />
                            </div>
                        </div>

                        {/* Company Size and Industry */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-grey mb-2">Company Size *</label>
                                <select 
                                    required
                                    className="w-full py-3 px-4 text-base text-darkpurple rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                >
                                    <option value="">Select company size</option>
                                    <option value="less-50">Less than 50 employees</option>
                                    <option value="50-100">50-100 employees</option>
                                    <option value="100+">100+ employees</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-grey mb-2">Industry *</label>
                                <select 
                                    required
                                    className="w-full py-3 px-4 text-base text-darkpurple rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                >
                                    <option value="">Select industry</option>
                                    <option value="technology">Technology</option>
                                    <option value="finance">Finance & Banking</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="retail">Retail & E-commerce</option>
                                    <option value="manufacturing">Manufacturing</option>
                                    <option value="consulting">Consulting</option>
                                    <option value="education">Education</option>
                                    <option value="marketing">Marketing & Advertising</option>
                                    <option value="real-estate">Real Estate</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Interest */}
                        <div>
                            <label className="block text-sm font-medium text-grey mb-2">I&apos;m interested in *</label>
                            <div className="space-y-3">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                    <span className="text-base text-darkpurple">Practical training for business teams</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                    <span className="text-base text-darkpurple">Clarity and confidence for decision-makers</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                    <span className="text-base text-darkpurple">A programme that delivers measurable outcomes</span>
                                </label>
                            </div>
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button type="submit" className="flex-1 py-4 px-8 text-lg text-white font-semibold text-center rounded-full bg-primary hover:bg-primary/90 transition-all duration-200">
                                Book a strategy call
                            </button>
                            <button type="button" className="flex-1 py-4 px-8 text-lg text-primary font-semibold text-center rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200">
                                Download the Launchpad overview
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;
