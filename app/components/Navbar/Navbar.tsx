"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Contactusform from './Contactus';

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

const Navbar = () => {
    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link href="/" className='text-xl sm:text-2xl lg:text-4xl font-semibold text-white'>
                                    The Prism Lab
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-white/20 text-white' : 'text-white hover:text-white hover:bg-white/15',
                                                'px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105',
                                                item.name === 'What We Deliver' ? 'font-data tracking-widest small-caps-alt text-xs font-bold' : ''
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            <Contactusform />
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Drawer />
                        </div>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
