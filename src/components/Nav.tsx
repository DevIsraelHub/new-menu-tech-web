import React from 'react';
import { Link as ScrollLink } from 'react-scroll';


const links = [
  { path: 'home', name: 'Home', offset: -50 },
  { path: 'services', name: 'Services', offset: -50 },
  { path: 'about', name: 'About', offset: -110 },
  { path: 'features', name: 'Features', offset: -50 },
  { path: 'contact', name: 'Contact', offset: -50 },
];

const Nav = ({ }) => {

  
  return (
    <nav className={` hidden xl:flex items-center xl:flex-row xl:gap-x-12 text-white gap-x-12 h-12`}>
      {links.map((link, index) => (
          <ScrollLink
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={`capitalize`}
          >
            {link.name}
          </ScrollLink>
       
          
      ))}
    </nav>
  );
};

export default Nav;
