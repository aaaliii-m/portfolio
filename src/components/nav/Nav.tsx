import { useState, useEffect } from 'react';
import logo from '../../assets/muhammad-ali-logo.svg';
const Nav = () => {
    // states
    const [isOpen, setIsOpen] = useState(false);
    const [menuText, setMenuText] = useState('home');
    const [hasBackground, setHasBackground] = useState(false);

    // event handlers
    const handleToggle = () => {
        setIsOpen(open => !open);
    }

    // Scroll-based navigation highlighting and background
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'top', name: 'home' },
                { id: 'projects', name: 'projects' },
                { id: 'about-me', name: 'about-me' },
                { id: 'experience', name: 'experience' },
                { id: 'skills', name: 'skills' },
                { id: 'education', name: 'education' },
                { id: 'certifications', name: 'certifications' },
                { id: 'contact', name: 'contact' }
            ];

            const scrollPosition = window.scrollY + 100; // Offset for sticky navbar

            // Handle navbar background
            if (window.scrollY > 200) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }

            // Special handling for home section
            if (scrollPosition < 200) {
                setMenuText('home');
                return;
            }

            // Find the current section based on scroll position
            let currentSection = 'home';
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.id === 'top') continue; // Skip home section as it's handled above
                
                const element = document.getElementById(section.id);
                
                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;
                    
                    // More generous tolerance for better detection, especially for shorter sections
                    if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom - 50) {
                        currentSection = section.name;
                        break;
                    }
                }
            }
            
            setMenuText(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHighlight = (eventObject: React.MouseEvent<HTMLLIElement>) => {
        const menuItem = (eventObject.target as HTMLLIElement).textContent?.replace('#', '') || '';
        setMenuText(() => menuItem);
        if(isOpen) {
            setIsOpen(open => !open);
        }
        
        // Scroll to section
        const targetId = menuItem === 'home' ? 'top' : menuItem;
        const element = targetId === 'top' ? document.body : document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
        <div className={`flex justify-between text-white items-center text-sm sm:text-base sticky top-0 z-50 py-3 sm:py-4 px-4 sm:px-6 transition-all duration-300 ${hasBackground ? 'bg-background border-b border-gray/20' : ''}`}>
            {/* logo */}
            <div className='flex items-center gap-x-2 lg:gap-x-4 cursor-pointer'>
                <img title="logo" src={logo} className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                <p className='text-white font-bold text-sm sm:text-base'>Muhammad Ali</p>
            </div>
            {/* nav */}
            <div className='flex flex-col gap-y-1 md:hidden cursor-pointer' onClick={handleToggle}>
                <div className='h-1 w-5 sm:w-6 bg-gray'></div>
                <div className='h-1 w-5 sm:w-6 bg-gray'></div>
                <div className='h-1 w-5 sm:w-6 bg-gray'></div>
            </div>
            <ul className={`${!isOpen ? 'hidden': ''} border border-white md:border-none flex-col right-4 sm:right-7 top-12 sm:top-9 absolute md:relative md:top-auto md:right-auto md:flex-row md:flex md:gap-x-3 lg:gap-x-6 text-gray text-xs sm:text-sm`}>
                <li className={`${menuText == 'home' ? 'font-bold text-white border-b-2 border-primary' : 'hover:border-b-2 hover:border-primary transition-all duration-200'} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>home</li>
                <li className={`${menuText == 'projects' ? 'font-bold text-white border-b-2 border-primary' : 'hover:border-b-2 hover:border-primary transition-all duration-200'} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>projects</li>
                <li className={`${menuText == 'about-me' ? 'font-bold text-white border-b-2 border-primary' : 'hover:border-b-2 hover:border-primary transition-all duration-200'} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>about-me</li>
                <li className={`${menuText == 'experience' ? 'font-bold text-white border-b-2 border-primary' : 'hover:border-b-2 hover:border-primary transition-all duration-200'} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>experience</li>
                <li className={`${menuText == 'skills' ? 'font-bold text-white border-b-2 border-primary' : 'hover:border-b-2 hover:border-primary transition-all duration-200'} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>skills</li>
                <li className={`${menuText == 'education' ? 'font-bold text-white border-b-2 border-primary' : 'hover:border-b-2 hover:border-primary transition-all duration-200'} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>education</li>
                <li className={`${menuText == 'certifications' ? 'font-bold text-white border-b-2 border-primary' : 'hover:border-b-2 hover:border-primary transition-all duration-200'} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>certifications</li>
                <li className={`${menuText == 'contact' ? 'font-bold text-white border-b-2 border-primary' : 'hover:border-b-2 hover:border-primary transition-all duration-200'} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>contact</li>
            </ul>
        </div>
        </>
    );
}

export default Nav;