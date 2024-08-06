'use client';
import React, { useState } from 'react';
import { RiMenu2Line, RiHomeFill } from 'react-icons/ri';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NavMobile = ({
  containerStyles,
  iconStyles,
  linkStyles,
}: {
  containerStyles: string;
  iconStyles: string;
  linkStyles: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      icon: <RiHomeFill />,
      path: 'home',
      name: 'Home',
      offset: -50,
    },
    {
      icon: <BiSolidFoodMenu />,
      path: 'services',
      name: 'Services',
      offset: -50,
    },
    {
      icon: <FaUsers />,
      path: 'about',
      name: 'About',
      offset: -50,
    },
    {
      icon: <RiHomeFill />,
      path: 'contact',
      name: 'Contact',
      offset: -50,
    },
  ];

  return (
    <div className={containerStyles}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className={`text-3xl text-white transition-all duration-200 ${iconStyles}`} />
      </div>
      <aside
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } z-10 bg-black fixed w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-white absolute top-5 right-5 flex items-center justify-center"
          >
            <IoCloseOutline />
          </div>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              className="w-full h-28"
              src="/assets/watermark.png"
              width={100}
              height={70}
              alt=""
            />
          </Link>
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.path}
                smooth={true}
                offset={link.offset}
                duration={500}
                onClick={() => setIsOpen(false)}
                className={`${linkStyles} flex items-center gap-x-2`}
              >
                {link.icon}
                {link.name}
              </ScrollLink>
            ))}
          </div>
          <Link href="/Form" onClick={() => setIsOpen(false)}>
            <Button variant="orange">Login</Button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
