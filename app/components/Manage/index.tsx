"use client"
import { useState } from "react";
import { AcademicCapIcon, ChartBarIcon, BoltIcon } from '@heroicons/react/24/outline'

interface ServiceCategory {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    features: string[];
    benefits: { title: string; description: string }[];
    cta: string;
    popular?: boolean;
}

const services: ServiceCategory[] = [
    {
        id: 'workshops',
        title: 'AI Readiness Masterclasses',
        description: 'Practical training for business teams.',
        icon: AcademicCapIcon,
        features: [
            'Half-day or full-day formats',
            'Role-based sessions for Sales, Marketing, and Operations',
            'Compare tools, run guided sprints, and apply use cases',
            'Outcome: a 2-tool adoption plan and the confidence to use AI daily'
        ],
        benefits: [
            {
                title: 'Why choose this',
                description: 'Build AI literacy and unlock immediate productivity gains.'
            }
        ],
        cta: 'Book a strategy call'
    },
    {
        id: 'consulting',
        title: 'AI Leadership Coaching',
        description: 'Clarity and confidence for decision-makers.',
        icon: ChartBarIcon,
        features: [
            'Monthly coaching for executives and team leads',
            'Trend briefings, curated playbooks, and on-call support',
            'Outcome: confident leadership, aligned priorities, and board-ready narratives'
        ],
        benefits: [
            {
                title: 'Why choose this',
                description: 'Make AI a growth strategy, not a side project.'
            }
        ],
        cta: 'Book a strategy call',
        popular: true
    },
    {
        id: 'solutions',
        title: 'AI Revenue Launchpad (90 Days)',
        description: 'A structured enablement programme that delivers measurable outcomes.',
        icon: BoltIcon,
        features: [
            'Custom roadmap tied to sales, marketing, or operations goals',
            'Enablement workshops to train teams and embed workflows',
            'Ongoing support to track adoption and ROI',
            'Outcome: faster cycles, stronger conversion, and clearer reporting in 90 days'
        ],
        benefits: [
            {
                title: 'Why choose this',
                description: 'A practical, end-to-end path from AI idea to execution.'
            }
        ],
        cta: 'Book a strategy call'
    }
];

const Services = () => {
    const [activeAccordion, setActiveAccordion] = useState('workshops');

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? '' : id);
    };

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-tertiary via-white to-tertiary/50 rounded-3xl my-12 sm:my-16 relative overflow-hidden'>
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
                </div>

                <div className='text-center mb-12 sm:mb-16 relative z-10'>
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <span className='text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase font-data'>OUR SERVICES</span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-6 sm:mb-8 font-headline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                        Practical services for scaling revenue
                    </h2>
                    <p className='text-base sm:text-lg text-grey leading-relaxed font-body mb-6 sm:mb-8'>
                        <strong>From quick wins to comprehensive transformation,</strong> we have programmes designed for every stage of your AI journey.
                    </p>
                </div>

                {/* Accordion Services */}
                <div className='max-w-5xl mx-auto space-y-6 relative z-10'>
                    {services.map((service, index) => (
                        <div key={service.id} className='bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/20 relative group'>
                            {/* Card background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-pink-500 to-rose-500' : index === 1 ? 'from-blue-500 to-indigo-500' : 'from-emerald-500 to-teal-500'} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            
                            <div className="relative z-10">
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(service.id)}
                                    className='w-full px-8 sm:px-12 py-8 sm:py-12 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-300'
                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center space-x-6 sm:space-x-8'>
                                            <div className='bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                                {(() => {
                                                    const IconComponent = service.icon;
                                                    return <IconComponent className='w-8 h-8 sm:w-10 sm:h-10 text-primary' />;
                                                })()}
                                            </div>
                                            <div className='flex-1'>
                                                <div className='flex items-center space-x-4 mb-3'>
                                                    <h2 className='text-2xl sm:text-3xl font-bold text-primary font-headline'>{service.title}</h2>
                                                    {service.popular && (
                                                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                                            Most Popular
                                                        </span>
                                                    )}
                                                </div>
                                                <p className='text-grey text-lg sm:text-xl font-body'>{service.description}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-4'>
                                            <svg
                                                className={`w-8 h-8 text-primary transition-transform duration-300 ${activeAccordion === service.id ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>

                                {/* Accordion Content */}
                                {activeAccordion === service.id && (
                                    <div className='px-8 sm:px-12 pb-8 sm:pb-12 border-t border-white/20'>
                                        <div className='pt-8 sm:pt-12'>
                                            {/* What's Included */}
                                            <div className='mb-10'>
                                                <h5 className='text-xl sm:text-2xl font-bold text-primary mb-6 font-headline'>What&apos;s Included</h5>
                                                <ul className='space-y-4'>
                                                    {service.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-start bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300">
                                                            <svg className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-grey text-base sm:text-lg font-body">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Why Choose This Service */}
                                            <div className='mb-10'>
                                                <h5 className='text-xl sm:text-2xl font-bold text-primary mb-6 font-headline'>Why Choose This Service</h5>
                                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                                    {service.benefits.map((benefit, benefitIndex) => (
                                                        <div key={benefitIndex} className='bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300 flex items-center min-h-[120px]'>
                                                            <p className='text-grey text-base font-body'>{benefit.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <div className='text-center'>
                                                <button className='bg-primary text-white px-10 sm:px-12 py-5 sm:py-6 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 font-body text-lg sm:text-xl shadow-xl hover:shadow-2xl'>
                                                    {service.cta}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
