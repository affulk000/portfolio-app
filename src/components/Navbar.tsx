// create navigation bar with tailwindcss style
// header bar to perform scroll changes to transparent background else fixed
// on mobile, table, show humburger at the buttom

import React, { useState } from 'react'
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [active, setActive] = useState<string | null >(null);

  const handleLinkClick = (link: string) => {
    setActive(link);
    scrollToSection(link);
   
    setTimeout(() => {
      setActive(null);
    }, 1000);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <header>
      {/* desktop and laptop navigation */}
      <nav className='hidden lg:flex justify-around items-center h-16 bg-white px-4 shadow-md'>
        <div className='text-xl font-mono block lg:block sm:hidden md:hidden'>
          <a href='#'>EMMANUEL AFFUL </a>
        </div>

        <ul className='flex flex-row self-end h-12 gap-4'>
          <li>
            <a href='#home' onClick={() => handleLinkClick('home')} className={active == 'home' ? 'active:text-black active:after:border-b transition duration-75' : 'text-gray-500'}>Home </a>
          </li>
          <li className='nav-item'>
            <a href='#about' onClick={() => handleLinkClick('about')} className={active == 'about' ? 'active:text-black' : 'text-gray-500'}>About</a>
          </li>
          <li>
            <a href='#skills' onClick={() => handleLinkClick('skills')} className={active == 'skills' ? 'active:text-black' : 'text-gray-500'}>Skills</a>
          </li>
          <li>
            <a href='#service' onClick={() => handleLinkClick('service')} className={active == 'service' ? 'active:text-black' : 'text-gray-500'}>Service</a>
          </li>
          <li>
            <a href='#portfolio' onClick={() => handleLinkClick('portfolio')} className={active == 'portfolio' ? 'active:text-black' : 'text-gray-500'}>Portfolio</a>
          </li>
          <li>
            <a href='#contact' onClick={() => handleLinkClick('contact')} className={active == 'contact' ? 'active:text-black' :'text-gray-500'}>Contact</a>
          </li>
        </ul>
      </nav>

      {/* mobile navigation */}
      <nav className="flex items-center justify-center">
        <ul className='flex justify-center items-center gap-5 bottom-1 fixed transition-all duration-100 px-5 min-w-max h-11 shadow rounded-md shadow-slate-800 lg:hidden'>
          <li>
            <a href='#home' onClick={() => handleLinkClick('home')} className={`${active =='home' ? ' animate-dotIndicator': 'navbar-mobile_link'} `}> <Icon icon="iconoir:home" className='lg:hidden text-3xl'/></a>
          </li>
          <li>
            <a href='#about' onClick={() => handleLinkClick('about')}  className={`${active == 'about' ? 'animate-indicator' : 'navbar-active'}`}><Icon icon="octicon:people-24" className='lg:hidden text-3xl'/></a>
          </li>
          <li>
            <a href='#skills' onClick={() => handleLinkClick('skills')} className={`${active == 'skills' ? 'animate-dotIndicator' : 'navbar-active'}`}><Icon icon="akar-icons:skills" className='lg:hidden text-3xl'/></a>
          </li>
          <li>
            <a href='#service' onClick={() => handleLinkClick('service')} className={`${active == 'service' ? 'animate-indicator' : 'navbar-active'}`}><Icon icon="eos-icons:service" className='lg:hidden text-3xl'/></a>
          </li>
          <li>
            <a href='#portfolio' onClick={() => handleLinkClick('portfolio')} className={`${active == 'portfolio' ? 'animate-dotIndicator' : 'navbar-active'}`}><Icon icon="fluent:portfolio-20-regular" className='lg:hidden text-3xl'/></a>
          </li>
          <li>
            <a href='#contact' onClick={() => handleLinkClick('contact')} className={`${active == 'contact' ? 'animate-indicator' : 'navbar-active'}`}><Icon icon="fluent:contact-card-16-regular" className='lg:hidden text-3xl'/></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;