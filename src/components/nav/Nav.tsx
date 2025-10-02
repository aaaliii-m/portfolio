import {useState, useEffect} from 'react';
import logo from '../../assets/muhammad-ali-logo.svg';
import {Link} from "react-router";

const Nav = () => {
    // states
    const [isOpen, setIsOpen] = useState(false);
    const [menuText, setMenuText] = useState('home');
    const [hasBackground, setHasBackground] = useState(false);
    const menuItems = [
        {id: 'home', name: 'home'},
        {id: 'projects', name: 'projects'},
        {id: 'about-me', name: 'about-me'},
        {id: 'experience', name: 'experience'},
        {id: 'skills', name: 'skills'},
        {id: 'education', name: 'education'},
        {id: 'certifications', name: 'certifications'},
        {id: 'contact', name: 'contact'}
    ];

    // event handlers
    const handleToggle = () => {
        setIsOpen(open => !open);
    }

    // Scroll-based navigation highlighting and background
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                {id: 'top', name: 'home'},
                {id: 'projects', name: 'projects'},
                {id: 'about-me', name: 'about-me'},
                {id: 'experience', name: 'experience'},
                {id: 'skills', name: 'skills'},
                {id: 'education', name: 'education'},
                {id: 'certifications', name: 'certifications'},
                {id: 'contact', name: 'contact'},
                {id: 'footer', name: ''}
            ];

            const scrollPosition = window.scrollY + 100; // Offset for sticky navbar

            // Handle navbar background
            if (window.scrollY > 200) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }

            // Special handling for the home section
            if (scrollPosition < 200) {
                setMenuText('home');
                return;
            }

            // Find the current section based on scroll position
            let currentSection = 'home';

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.id === 'top') continue; // Skip the home section as it's handled above

                const element = document.getElementById(section.id);

                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;

                    // More generous tolerance for better detection, especially for shorter sections
                    if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom - 50) {
                        currentSection = section.name;
                        break;
                    }

                    if(scrollPosition > elementBottom) {
                        currentSection = '';
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
        if (isOpen) {
            setIsOpen(open => !open);
        }

        // Scroll to section
        const targetId = menuItem === 'home' ? 'top' : menuItem;
        const element = targetId === 'top' ? document.body : document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <>
            <div
                className={`mt-6 md:mb-6 xl:mb-12 flex justify-between text-white items-center text-sm sm:text-base sticky top-0 z-50 py-3 sm:py-4 transition-all duration-300 ${hasBackground ? 'bg-background border-b border-gray/20' : ''}`}>
                {/* logo */}
                <div className='flex items-center gap-x-1 md:gap-x-2 2xl:gap-x-4 cursor-pointer'>
                    <img title="logo" src={logo} className='w-6 h-6 sm:w-8 sm:h-8 text-white' alt="logo"/>
                    <Link to='/' className='text-white font-bold text-sm sm:text-base'>Muhammad Ali</Link>
                </div>
                {/* nav */}
                <div className='flex flex-col gap-y-1 lg:hidden cursor-pointer' onClick={handleToggle}>
                    <div className='h-1 w-5 sm:w-6 bg-gray'></div>
                    <div className='h-1 w-5 sm:w-6 bg-gray'></div>
                    <div className='h-1 w-5 sm:w-6 bg-gray'></div>
                </div>
                <ul className={`${!isOpen ? 'hidden' : ''} border border-white lg:border-none flex-col right-4 sm:right-7 top-12 md:top-11 sm:top-9 absolute lg:relative lg:top-auto lg:right-auto lg:flex-row lg:flex lg:gap-x-3 text-gray text-xs sm:text-sm bg-background`}>

                    {menuItems.map((item) => (
                        <li key={item.id}
                            className={`${item.name == menuText ? 'font-bold text-white bg-primary/20 lg:bg-transparent lg:border-b-2 lg:border-primary' : 'hover hover:bg-primary/20 lg:hover:bg-transparent hover:text-white lg:hover:border-b-2 lg:hover:border-primary transition-all duration-200'} cursor-pointer px-8 lg:px-0 py-3 lg:py-0 my-2 lg:my-0`}
                            onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>{item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Nav;