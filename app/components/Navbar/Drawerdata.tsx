import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation = [
    { name: 'What We Deliver', href: '#approach-section', current: false },
    { name: 'Our Services', href: '#services-section', current: false },
    { name: 'Who Is It For', href: '#faq-section', current: false },
    { name: 'About Us', href: '#aboutus-section', current: false },
    { name: 'FAQ', href: '#faq-questions-section', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-white/20 text-white' : 'text-white hover:bg-white/15 hover:text-white',
                                    'block py-4 rounded-lg text-lg font-semibold transition-all duration-300',
                                    item.name === 'What We Deliver' ? 'font-data tracking-widest small-caps-alt text-sm font-bold' : ''
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <Link href="#contactus-section" className="bg-white text-primary w-full hover:bg-primary hover:text-white font-semibold py-4 px-6 rounded-full border-2 border-primary transition-all duration-200 font-body text-lg inline-block text-center">
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
