'use client'
import React, { useState } from 'react';
import { RiMenu2Line, RiHomeFill } from 'react-icons/ri';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const NavMobile = ({ containerStyles, iconStyles, linkStyles }: {
  containerStyles: string;
  iconStyles: string;
  linkStyles: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      icon: <RiHomeFill />,
      path: 'home',
      name: 'home',
      offset: 0,
    },
    {
      icon: <BiSolidFoodMenu />,
      path: 'menu',
      name: 'menu',
      offset: 0,
    },
    {
      icon: <FaUsers />,
      path: 'about',
      name: 'about',
      offset: 0,
    },
    {
      icon: <RiHomeFill />,
      path: 'contact',
      name: 'contact',
      offset: 0,
    },
  ];

  return (
    <div className={`${containerStyles}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-3xl text-white transition-all duration-200" />
      </div>
      <aside className={`${isOpen ? '-right-0' : '-right-full'} bg-black fixed x-20 w-full p-10 top-0 bottom-0 transition-all duration-500 `}>
        mobile Nav

        <div className='flex flex-col items-center justify-between h-full'>
          <div onClick={() => setIsOpen(false)} className={`'hidden xl:block cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 flex items-center justify-center'`}>
            <IoCloseOutline />
          </div>
          <Link href='/'>
            <Image
              className='w-full h-24'
              src='/assets/watermark.png' width={100} height={70} alt='' />
          </Link>
          <div className='flex flex-col gap-y-8'>
            {links.map((link, index) => {
              return <ScrollLink key={index} to={link.path} spy={true} smooth={false}
                offset={link.offset} duration={500} className='flex items-center gap-x-3'>
                <div className={`${iconStyles}`}>{link.icon}</div>
                <div className={`${linkStyles}`}>{link.name}</div>
              </ScrollLink>
            })}
          </div>
          <ScrollLink to='reservation' smooth offset={-150}>
            <Button variant='orange'>
              Book a table
            </Button>
          </ScrollLink>
        </div>

      </aside>
    </div>
  );
};

export default NavMobile;
