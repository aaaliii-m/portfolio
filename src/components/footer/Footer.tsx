import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const footerLinks = {
        sections: [
            {
                title: 'Navigation',
                links: [
                    { name: 'Home', href: '#top' },
                    { name: 'Projects', href: '#projects' },
                    { name: 'About', href: '#about' },
                    { name: 'Experience', href: '#experience' },
                    { name: 'Skills', href: '#skills' },
                    { name: 'Contact', href: '#contact' }
                ]
            },
            {
                title: 'Connect',
                links: [
                    { name: 'GitHub', href: 'https://github.com/aaaliii-m', external: true },
                    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aaaliii-m/', external: true },
                ]
            },
            {
                title: 'Resources',
                links: [
                    { name: 'Resume', href: '#', external: false },
                    { name: 'Blog', href: '#', external: false }
                ]
            }
        ]
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-background border-t border-gray/30 mt-12 sm:mt-16 lg:mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <h3 className="text-white font-bold text-lg sm:text-xl">Muhammad Ali</h3>
                        </div>
                        <p className="text-gray text-sm leading-relaxed mb-4">
                            Frontend Developer passionate about creating beautiful, functional, and user-centric web experiences.
                        </p>
                        <div className="flex items-center gap-3">
                            <a 
                                href="https://github.com/aaaliii-m" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray hover:text-primary transition-colors duration-200 cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/aaaliii-m/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray hover:text-primary transition-colors duration-200 cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            target={typeof (link as any).external === 'boolean' && (link as any).external ? '_blank' : '_self'}
                                            rel={typeof (link as any).external === 'boolean' && (link as any).external ? 'noopener noreferrer' : ''}
                                            className="text-gray hover:text-primary transition-colors duration-200 text-sm cursor-pointer"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray/30 pt-8 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <div className="text-gray text-sm text-center sm:text-left">
                        <p>© {currentYear} Muhammad Ali. All rights reserved.</p>
                    </div>

                    {/* Made with Love */}
                    <div className="flex items-center gap-2 text-gray text-sm">
                        <span>Made with</span>
                        <span className="text-red-500 text-lg animate-pulse">❤️</span>
                        <span>by Muhammad Ali</span>
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={handleScrollToTop}
                        className="flex items-center gap-2 text-gray hover:text-primary transition-colors duration-200 text-sm cursor-pointer"
                    >
                        <span>Back to top</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-gray/20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                        <div className="text-gray text-xs">
                            <p>📍 Brooklyn, NYC</p>
                            <p>Open to remote/hybrid opportunities</p>
                        </div>
                        <div className="text-gray text-xs">
                            <p>🎯 Frontend Development</p>
                            <p>React • Vue • TypeScript • Tailwind</p>
                        </div>
                        <div className="text-gray text-xs">
                            <p>🚀 Available for freelance</p>
                            <p>Let's build something amazing together</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 