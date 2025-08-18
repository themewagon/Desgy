import { ChevronRightIcon, AcademicCapIcon, ChartBarIcon, BoltIcon } from '@heroicons/react/24/outline'

interface ApproachItem {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const approachData: ApproachItem[] = [
    {
        title: "Training",
        description: "Hands-on programmes that give your teams the skills and confidence to use AI every day.",
        icon: AcademicCapIcon
    },
    {
        title: "Strategy",
        description: "Clear roadmaps with use cases, KPIs, and owners tied directly to growth.",
        icon: ChartBarIcon
    },
    {
        title: "Execution",
        description: "Embedded workflows across sales, marketing, and operations so results show up quickly and can be measured.",
        icon: BoltIcon
    }
];

const Approach = () => {
    return (
        <div id="approach-section">
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-tertiary via-white to-tertiary/50 rounded-3xl my-12 sm:my-16 relative overflow-hidden'>
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
                </div>

                <div className='text-center mb-12 sm:mb-16 relative z-10'>
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                        <span className='text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase font-data'>WHAT WE DELIVER</span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-6 sm:mb-8 font-headline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                        Commercial impact first, not technology.
                    </h2>
                    <p className='text-lg sm:text-xl lg:text-2xl text-grey max-w-4xl mx-auto font-body px-4 leading-relaxed'>
                        <strong>Most AI projects fail because they focus on tools instead of business outcomes.</strong> We do it differently.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-12 sm:my-16 relative z-10'>
                    {approachData.map((item, i) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={i} className='bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/20 relative overflow-hidden group'>
                                {/* Card background gradient - Primary color based */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${i === 0 ? 'from-primary/10 to-primary/5' : i === 1 ? 'from-primary/15 to-primary/8' : 'from-primary/20 to-primary/10'} opacity-100 group-hover:opacity-80 transition-opacity duration-300`}></div>
                                
                                <div className="relative z-10">
                                    <div className='bg-primary w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                        <IconComponent className='text-white w-8 h-8 sm:w-10 sm:h-10' />
                                    </div>
                                    <h4 className='text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 font-headline'>{item.title}</h4>
                                    <p className='text-base sm:text-lg text-grey leading-relaxed font-body mb-6 sm:mb-8'>{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* CTA Section */}
                <div className='text-center mt-12 sm:mt-16 relative z-10'>
                    <button className='bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 font-body text-base sm:text-lg shadow-lg hover:shadow-xl'>
                        Book a strategy call
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Approach;
