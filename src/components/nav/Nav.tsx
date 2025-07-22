import { useState } from 'react';
import logo from '../../assets/muhammad-ali-logo.svg';
const Nav = () => {
    // states
    const [isOpen, setIsOpen] = useState(false);
    const [menuText, setMenuText] = useState('home');

    // event handlers
    const handleToggle = () => {
        setIsOpen(open => !open);
    }

    const handleHighlight = (eventObject) => {
        const menuItem = eventObject.target.textContent.replace('#', '');
        setMenuText(() => menuItem);
        if(isOpen) {
            setIsOpen(open => !open);
        }
    }

    return (
        <>
        <div className="flex justify-between text-white items-center text-base lg:text-lg relative">
            {/* logo */}
            <div className='flex items-center gap-x-2 lg:gap-x-4 cursor-pointer'>
                <img title="logo" src={logo} className='w-10 h-10 text-white' />
                <p className='text-white font-bold'>Muhammad Ali</p>
            </div>
            {/* nav */}
            <div className='flex flex-col gap-y-1 md:hidden cursor-pointer' onClick={handleToggle}>
                <div className='h-1 w-6 bg-gray'></div>
                <div className='h-1 w-6 bg-gray'></div>
                <div className='h-1 w-6 bg-gray'></div>
            </div>
            <ul className={`${!isOpen ? 'hidden': ''} border border-white md:border-none flex-col right-7 top-9 absolute md:relative md:top-auto md:right-auto md:flex-row md:flex md:gap-x-6 lg:gap-x-16 text-gray`}>
                <li className={`${menuText == 'home' ? 'font-bold text-white' : ''} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>home</li>
                <li className={`${menuText == 'projects' ? 'font-bold text-white' : ''} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>projects</li>
                <li className={`${menuText == 'skills' ? 'font-bold text-white' : ''} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>skills</li>
                <li className={`${menuText == 'about-me' ? 'font-bold text-white' : ''} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>about-me</li>
                <li className={`${menuText == 'contact' ? 'font-bold text-white' : ''} cursor-pointer px-8 md:px-[0px] py-2 md:py-[0px] my-3 md:my-[0px]`} onClick={(e) => handleHighlight(e)}><span className='text-primary'>&#35;</span>contact</li>
            </ul>
        </div>
        </>
    );
}

export default Nav;