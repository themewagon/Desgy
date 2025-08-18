"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PersonaType {
    name: string;
    role: string;
    problem: string;
    solution: string;
    result: string;
    icon: string;
    color: string;
    image: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

// FAQ Structured Data for SEO
const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How can SMBs adopt AI quickly without a big budget?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most SMBs think AI requires major investment, but results come faster with focused use cases. We help you start small: AI workshops that upskill teams, leadership coaching that sets priorities, and a 90-day programme that embeds AI into existing tools like CRM, content, and reporting. This way, you get measurable outcomes — faster sales cycles, better marketing conversion, leaner operations — without hiring data scientists or building in-house platforms."
            }
        },
        {
            "@type": "Question",
            "name": "What makes The Prism Lab different from other AI consultancies?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many AI consultants focus on tools and technology. We focus on business outcomes. Our approach combines training, strategy, and execution tied directly to revenue and efficiency. We're also built for SMBs: programmes are cost-effective, practical, and tool-agnostic. Instead of leaving you with slide decks or unfinished pilots, we ensure your teams are confident with AI, your leaders are aligned on priorities, and your workflows are embedded into daily execution."
            }
        },
        {
            "@type": "Question",
            "name": "Do I need technical staff to benefit from your programmes?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Our services are designed for business users, not technical teams. Sales, marketing, and operations leaders can all use AI with the right training and workflows. We provide hands-on masterclasses, leadership coaching, and ready-to-use templates so your people can adopt AI without needing coding skills. If you already have IT or data teams, we complement them by helping align AI use cases with commercial goals."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to see measurable results?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most clients see quick wins within weeks. In masterclasses, teams walk away with a 2-tool adoption plan they can apply immediately. Leadership coaching often produces strategic clarity in the first month. In the 90-day AI Revenue Launchpad, measurable improvements — such as faster marketing cycles, reduced reporting time, or higher close rates — are built into the roadmap. We design every engagement with clear KPIs, owners, and timelines so outcomes are visible fast."
            }
        },
        {
            "@type": "Question",
            "name": "Which industries do you work with?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We work across sectors where SMBs need to scale sales, marketing, and operations. Our experience spans SaaS, consulting, professional services, retail, and financial services. Because our programmes are tool-agnostic and outcome-driven, the principles apply in almost any industry. The common thread: SMB leaders who want to move beyond experiments and see AI tied to revenue growth, customer experience, and operational efficiency."
            }
        }
    ]
};

const personas: PersonaType[] = [
    {
        name: "Sara",
        role: "CMO",
        problem: "Campaign content takes weeks.",
        solution: "AI-assisted copy + variant testing.",
        result: "3x faster content cycles, +15% conversion.",
        icon: "👩‍💼",
        color: "from-pink-500 to-rose-500",
        image: "/images/testimonial/girl.svg"
    },
    {
        name: "Raj",
        role: "Head of Sales",
        problem: "Reps waste time on cold leads.",
        solution: "Lead scoring bot + proposal customiser.",
        result: "-20% manual touches, +10% close rate.",
        icon: "👨‍💼",
        color: "from-blue-500 to-indigo-500",
        image: "/images/testimonial/boy.svg"
    },
    {
        name: "Lina",
        role: "COO",
        problem: "Manual reporting eats time.",
        solution: "Automated workflows with Zapier + monitoring dashboards.",
        result: "-25% cycle time.",
        icon: "👩‍🔧",
        color: "from-purple-500 to-violet-500",
        image: "/images/testimonial/girl.svg"
    },
    {
        name: "Tom",
        role: "CEO",
        problem: "No AI governance.",
        solution: "Strategy charter + talent/ROI map.",
        result: "Aligned vision, faster AI rollout.",
        icon: "👨‍💻",
        color: "from-emerald-500 to-teal-500",
        image: "/images/testimonial/boy.svg"
    }
];

const faqData: FAQItem[] = [
    {
        question: "How can SMBs adopt AI quickly without a big budget?",
        answer: "Most SMBs think AI requires major investment, but results come faster with focused use cases. We help you start small: AI workshops that upskill teams, leadership coaching that sets priorities, and a 90-day programme that embeds AI into existing tools like CRM, content, and reporting. This way, you get measurable outcomes — faster sales cycles, better marketing conversion, leaner operations — without hiring data scientists or building in-house platforms."
    },
    {
        question: "What makes The Prism Lab different from other AI consultancies?",
        answer: "Many AI consultants focus on tools and technology. We focus on business outcomes. Our approach combines training, strategy, and execution tied directly to revenue and efficiency. We're also built for SMBs: programmes are cost-effective, practical, and tool-agnostic. Instead of leaving you with slide decks or unfinished pilots, we ensure your teams are confident with AI, your leaders are aligned on priorities, and your workflows are embedded into daily execution."
    },
    {
        question: "Do I need technical staff to benefit from your programmes?",
        answer: "No. Our services are designed for business users, not technical teams. Sales, marketing, and operations leaders can all use AI with the right training and workflows. We provide hands-on masterclasses, leadership coaching, and ready-to-use templates so your people can adopt AI without needing coding skills. If you already have IT or data teams, we complement them by helping align AI use cases with commercial goals."
    },
    {
        question: "How long does it take to see measurable results?",
        answer: "Most clients see quick wins within weeks. In masterclasses, teams walk away with a 2-tool adoption plan they can apply immediately. Leadership coaching often produces strategic clarity in the first month. In the 90-day AI Revenue Launchpad, measurable improvements — such as faster marketing cycles, reduced reporting time, or higher close rates — are built into the roadmap. We design every engagement with clear KPIs, owners, and timelines so outcomes are visible fast."
    },
    {
        question: "Which industries do you work with?",
        answer: "We work across sectors where SMBs need to scale sales, marketing, and operations. Our experience spans SaaS, consulting, professional services, retail, and financial services. Because our programmes are tool-agnostic and outcome-driven, the principles apply in almost any industry. The common thread: SMB leaders who want to move beyond experiments and see AI tied to revenue growth, customer experience, and operational efficiency."
    }
];

const FAQ = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % personas.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % personas.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + personas.length) % personas.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const toggleAccordion = (question: string) => {
        setActiveAccordion(activeAccordion === question ? null : question);
    };

    return (
        <>
            {/* FAQ Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />
            
            {/* WHO IS IT FOR Section */}
            <div id="faq-section" className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-tertiary via-white to-tertiary/50 rounded-3xl my-12 sm:my-16 relative overflow-hidden'>
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
                </div>

                <div className='text-center mb-12 sm:mb-16 relative z-10'>
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <span className='text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase font-data'>WHO IS IT FOR</span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-6 sm:mb-8 font-headline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                        Proof in Practice: Real SMB results
                    </h2>
                    <p className='text-lg sm:text-xl lg:text-2xl text-grey max-w-4xl mx-auto font-body px-4 leading-relaxed'>
                        See how different roles across your organisation can benefit from AI transformation.
                    </p>
                </div>
                
                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Carousel Slides */}
                    <div className="overflow-hidden rounded-3xl shadow-2xl">
                        <div 
                            className="flex transition-transform duration-700 ease-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {personas.map((persona, index) => (
                                <div 
                                    key={index} 
                                    className="w-full flex-shrink-0"
                                    style={{ minWidth: '100%' }}
                                >
                                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
                                        {/* Card background gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-5`}></div>
                                        
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                                {/* Left: Portrait Image */}
                                                <div className="flex justify-center lg:justify-start">
                                                    <div className="relative">
                                                        <div className="w-64 h-80 sm:w-80 sm:h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center shadow-2xl border border-white/20 overflow-hidden">
                                                            <Image 
                                                                src={persona.image} 
                                                                alt={`${persona.name} - ${persona.role} at SMB company using AI for ${persona.problem.toLowerCase()} - ${persona.solution} leading to ${persona.result}`}
                                                                width={320}
                                                                height={384}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        {/* Decorative elements around image */}
                                                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
                                                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/30 rounded-full blur-sm"></div>
                                                    </div>
                                                </div>

                                                {/* Right: Copy */}
                                                <div className="space-y-8">
                                                    {/* Persona Header */}
                                                    <div className="text-center lg:text-left">
                                                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4">
                                                            <p className="text-primary font-semibold text-lg">{persona.role}</p>
                                                        </div>
                                                        <h4 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-headline">{persona.name}</h4>
                                                    </div>
                                                    
                                                    {/* Problem, Solution, Result Cards */}
                                                    <div className="space-y-6">
                                                        {/* Problem */}
                                                        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300">
                                                            <div className="flex items-center mb-3">
                                                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                                                                    <span className="text-white text-sm font-bold">!</span>
                                                                </div>
                                                                <h5 className="font-bold text-primary text-lg">PROBLEM</h5>
                                                            </div>
                                                            <p className="text-grey text-base font-medium">{persona.problem}</p>
                                                        </div>
                                                        
                                                        {/* Solution */}
                                                        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300">
                                                            <div className="flex items-center mb-3">
                                                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                                                                    <span className="text-white text-sm font-bold">💡</span>
                                                                </div>
                                                                <h5 className="font-bold text-primary text-lg">SOLUTION</h5>
                                                            </div>
                                                            <p className="text-grey text-base font-medium">{persona.solution}</p>
                                                        </div>
                                                        
                                                        {/* Result */}
                                                        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300">
                                                            <div className="flex items-center mb-3">
                                                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                                                                    <span className="text-white text-sm font-bold">✓</span>
                                                                </div>
                                                                <h5 className="font-bold text-primary text-lg">RESULT</h5>
                                                            </div>
                                                            <p className="text-grey text-base font-medium">{persona.result}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {personas.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/50'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Slide Counter */}
                    <div className="text-center mt-4">
                        <span className="text-sm text-grey font-medium">
                            {currentSlide + 1} of {personas.length}
                        </span>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div id="faq-questions-section" className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-tertiary via-white to-tertiary/50 rounded-3xl my-12 sm:my-16 relative overflow-hidden'>
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
                </div>

                <div className='text-center mb-12 sm:mb-16 relative z-10'>
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <span className='text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase font-data'>FAQ</span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-6 sm:mb-8 font-headline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                        About The Prism Lab
                    </h2>
                </div>

                {/* FAQ Accordion */}
                <div className='max-w-4xl mx-auto space-y-4 relative z-10'>
                    {faqData.map((faq, index) => (
                        <div key={index} className='bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/20 relative group'>
                            {/* Card background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                            
                            <div className="relative z-10">
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(faq.question)}
                                    className='w-full px-8 sm:px-12 py-8 sm:py-12 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-300'
                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='flex-1'>
                                            <h4 className='text-xl sm:text-2xl font-bold text-primary font-headline leading-relaxed'>{faq.question}</h4>
                                        </div>
                                        <div className='flex items-center space-x-4 ml-6'>
                                            <svg 
                                                className={`w-8 h-8 text-primary transition-transform duration-300 ${activeAccordion === faq.question ? 'rotate-180' : ''}`}
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
                                {activeAccordion === faq.question && (
                                    <div className='px-8 sm:px-12 pb-8 sm:pb-12 border-t border-white/20'>
                                        <div className='pt-8 sm:pt-12'>
                                            <p className='text-base sm:text-lg text-grey leading-relaxed font-body'>{faq.answer}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FAQ;