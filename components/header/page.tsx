'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HeaderComponent() {
  const [open, setOpen] = useState(false);

  const NavMenu = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skill' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const NavMenuList = () => {
    return (
      <nav aria-label='Main Navigation'>
        <ul className='flex flex-col lg:flex-row lg:justify-center lg:gap-6'>
          {NavMenu.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className='text-md text-background font-medium tracking-[-3%]'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  const MobileMenu = () => {
    return (
      <section
        className={`${open ? 'top-4 translate-y-0' : '-top-4 -translate-y-full'} absolute left-4 z-50 flex h-203 w-90.25 flex-col gap-4 rounded-2xl bg-black/20 p-4 text-white backdrop-blur-2xl transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className='flex h-8.5 w-82.25 items-center justify-between'>
          <Link
            href='/'
            className='text-md text-background flex font-medium lg:hidden'
          >
            JSJafriel
          </Link>
          <button
            type='button'
            onClick={() => setOpen(false)}
            className='flex size-6 cursor-pointer hover:scale-110 lg:hidden'
          >
            <img
              src='/assets/x-close.svg'
              alt='Close Menu'
              className='top-1.5 left-1.5 size-6'
            />
          </button>
        </div>
        <div className='h-69 w-82.25'>{NavMenuList()}</div>
      </section>
    );
  };

  return (
    <div className='fixed top-4 z-40 flex h-12 w-90.25 lg:top-8 lg:w-138.25 lg:justify-center'>
      <header className='flex h-12 w-90.25 items-center justify-between rounded-[100px] bg-black/20 px-4 backdrop-blur-2xl lg:top-8 lg:w-138.25 lg:justify-center lg:px-6'>
        <Link
          href='/'
          className='text-md text-background flex font-medium lg:hidden'
        >
          JSJafriel
        </Link>
        <button
          type='button'
          onClick={() => setOpen(true)}
          className='flex size-6 cursor-pointer hover:scale-110 lg:hidden'
        >
          <img src='/assets/icon-hamburger.svg' alt='Mobile Menu' />
        </button>
        <div className='hidden lg:block'>{NavMenuList()}</div>
      </header>
      <MobileMenu />
    </div>
  );
}
