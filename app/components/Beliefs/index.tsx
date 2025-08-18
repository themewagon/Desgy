
const Beliefs = () => {
    return (
        <div id="beliefs-section" className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 gap-8'>

                {/* COLUMN-1 */}

                <div className="bg-primary pt-12 px-10 sm:px-16 pb-16 rounded-2xl relative overflow-hidden">
                    <h2 className="text-sm font-semibold text-white/80 tracking-widest uppercase mb-5 text-center sm:text-start font-data">WHY WORK WITH US</h2>
                    <h3 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 text-center sm:text-start font-headline">Focused on SMB impact</h3>
                    <p className="text-white/90 pt-2 mb-4 text-center sm:text-start leading-relaxed">Programs are designed for lean teams, with cost-effective delivery.</p>
                    <p className="text-white/90 mb-4 text-center sm:text-start leading-relaxed">Commercially driven – Every engagement ties AI back to revenue and efficiency.</p>
                    <p className="text-white/90 mb-8 text-center sm:text-start leading-relaxed">Practical, not academic – Hands-on, tool-agnostic, and immediately applicable.</p>
                    <div className="text-center sm:text-start">
                        <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200">Book a strategy call</button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-secondary pt-12 px-10 sm:px-16 pb-16 rounded-2xl relative overflow-hidden">
                    <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-5 text-center sm:text-start font-data">ABOUT US</h2>
                    <h3 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-6 text-center sm:text-start font-headline">Experienced, trusted, global</h3>
                    <p className="text-grey pt-2 mb-4 text-center sm:text-start leading-relaxed">20+ years in go-to-market leadership and enterprise transformation across APAC.</p>
                    <p className="text-grey mb-8 text-center sm:text-start leading-relaxed">Experience with Salesforce, HSBC, Moët Hennessy, JCDecaux, and Pernod Ricard, adapted now for SMB scale.</p>
                    <div className="text-center sm:text-start">
                        <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">Download the Launchpad overview</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
