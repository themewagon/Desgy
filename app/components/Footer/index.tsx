import Image from "next/image";
import Link from "next/link";

// FOOTER LINKS DATA
interface FooterLink {
    name: string;
    href: string;
}

const footerLinks: FooterLink[] = [
    { name: 'What We Deliver', href: '#approach-section' },
    { name: 'Our Services', href: '#services-section' },
    { name: 'Who Is It For', href: '#faq-section' },
    { name: 'About Us', href: '#aboutus-section' },
    { name: 'FAQ', href: '#faq-questions-section' },
]

const footer = () => {
    return (
        <div className="bg-primary" id="first-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    
                    {/* Logo and Social */}
                    <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8'>
                        <h3 className='text-white text-2xl sm:text-3xl font-semibold'>The Prism Lab</h3>
                        <div className='flex gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://linkedin.com"><Image src={'/images/footer/vec.svg'} alt="linkedin" width={15} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://twitter.com"><Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://instagram.com"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8">
                        {footerLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className="text-white/80 hover:text-white text-sm sm:text-base font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                        <p className='text-center sm:text-left text-white/60 text-sm'>
                            © 2025 - All Rights Reserved by The Prism Lab
                        </p>
                        <div className="flex space-x-4 sm:space-x-6">
                            <Link href="/privacy-policy" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-conditions" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer;
