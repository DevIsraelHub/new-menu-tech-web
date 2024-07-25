'use client'
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setActive(true) : setActive(false);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <header className={`${active ? 'bg-black-heavy' : 'bg-none'} fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href='/' passHref>
            <Image
              className="w-full h-24"
              src='/assets/watermark.png' width={100} height={40} alt="Logo" />
          </Link>
          {/* Nav */}
          <Nav containerStyles='hidden xl:flex h-12  xl:flex-row items-center xl:gap-x-12 text-white' linkStyles='capitalize' />
          {/* Button */}
          <ScrollLink className="max-xl:hidden" to='reservation' smooth={true}>
            <Button variant='orange' size='sm'>Book a table</Button>
          </ScrollLink>
          {/* Mobile Nav */}
          <NavMobile containerStyles='xl:hidden ' iconStyles='text-3xl' linkStyles='uppercase' />
        </div>
      </div>
    </header>
  );
}

export default Header;
