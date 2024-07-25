import { Link as ScrollLink } from 'react-scroll';

const links = [
  {
    path: 'home',
    name: 'home',
    offset: -50

  },
  {
    path: 'menu',
    name: 'menu',
    offset: -50

  },
  {
    path: 'about',
    name: 'about',
    offset: -50
  },
  {
    path: 'features',
    name: 'features',
    offset: -50
  },
]

const Nav = (containerStyles: any, linkStyles: any) => {
  return (
    <nav className={`${containerStyles} hidden xl:flex items-center xl:flex-row xl:gap-x-12 text-white gap-x-12 h-12 `}>
      {links.map((link, index) => {
        return <ScrollLink key={index} to={link.path} spy={true} smooth={true}
          offset={link.offset} duration={500} className={`${linkStyles}`}>{link.name}</ScrollLink>
      })}</nav>
  )
}
export default Nav;