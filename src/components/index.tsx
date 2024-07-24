import { FaFacebook, FaInstagram,FaYoutube } from "react-icons/fa"
import {Mail, MapPin, Phone } from "lucide-react"

export const siteAbbreviation = "site"
export const siteFounder = "founder"
export const siteName = "MenuTech"
export const phoneNumber = "+000 0000 000 000"
export const email = `contact@${siteName}.com`
export const address = "Lagos, Nigeria"

export const site = {
  title: siteName,
  description: `Menutech is the best`,
  url: "http://localhost:3000/"
}
export const services = [
  {
    icon: 'solar:delivery-bold',
    title: 'Order Online',
    description: 'Integrate seamless online ordering for takeout and delivery.',
    bgColor: 'bg-orange-500',
    textColor: 'text-[#f2f2f2]'
  },
  {
    icon: 'solar:hamburger-menu-bold',
    title: 'Menu Management',
    description: "Easily update and manage your restaurant's menu with our intuitive menu management system",
    bgColor: 'bg-orange-500',
    textColor: 'text-[#f2f2f2]'
  },
  {
    icon: 'tabler:ai',
    title: 'AI Support 24/7',
    description: 'Get assistance anytime with our AI-powered 24/7 customer support.',
    bgColor: 'bg-orange-500',
    textColor: 'text-[#f2f2f2]'
  },
  {
    icon: 'fa6-solid:users-gear',
    title: 'Employee Management',
    description: 'Efficiently manage your staff with our comprehensive employee management tools.',
    bgColor: 'bg-[#f2f2f2]',
    textColor: 'text-[#F15A24]'
  },
  {
    icon: 'hugeicons:table-round',
    title: 'Reservation System',
    description: 'Let customers book tables easily with our built-in reservation system.',
    bgColor: 'bg-[#f2f2f2]',
    textColor: 'text-[#F15A24]'
  },
  {
    icon: 'ion:bar-chart',
    title: 'Analytics and Reporting',
    description: 'Track your site’s performance with detailed analytics and reports.',
    bgColor: 'bg-[#f2f2f2]',
    textColor: 'text-[#F15A24]'
  }
]; 
export const nav = [

    {
      id: 1,
      name: 'Home',
      path: '/',
      icon: 'mdi-light:home'
    },
    {
      id: 2,
      name: 'About',
      path: '/',
      icon: 'mdi:about'
    },
    {
      id: 3,
      name: 'Sign Up',
      path: '/'
    },
    {
      id: 4,
      name: 'Log In',
      path: '/'
    }
  ]

export const socialLink = [
  {
    id: 1,
    title: "FaFacebook",
    icon: <FaFacebook className="w-8 h-8" />,
    path: "https://web.facebook.com/"
  },
  {
    id: 2,
    title: "Instagram",
    icon: <FaInstagram className="w-8 h-8" />,
    path: "https://www.instagram.com/"
  },
  {
    id: 3,
    title: "Youtube",
    icon: <FaYoutube className="w-9 h-9" />,
    path: "https://youtube.com/"
  },

]

export const company = [
  {
    id: 1,
    name: "About",
    path: "/about"
  },
  {
    id: 2,
    name: "Features",
    path: "/#"
  },
  {
    id: 3,
    name: "FAQ",
    path: "/#"
  },
  {
    id: 4,
    name: "Team",
    path: "/#"
  },
  {
    id: 5,
    name: "Sponsors",
    path: "/#"
  },
]

export const support = [
  {
    id: 1,
    name: "Contact",
    path: "/contact"
  },
  {
    id: 2,
    name: "Help",
    path: "/#"
  },
  {
    id: 3,
    name: "Videos",
    path: "/#"
  },
  {
    id: 4,
    name: "Prvacy Policy",
    path: "/privacy-policy"
  },
  {
    id: 5,
    name: "Downloads & Resources",
    path: "/#"
  },
]

export const contact = [
  {
    id: 1,
    title: "email",
    icon: <Mail />,
    path: `mailto:${email}`,
    name: email,
  },
  {
    id: 2,
    title: "phone number",
    icon: <Phone />,
    path: `tel:${phoneNumber}`,
    name: phoneNumber,
  },
  {
    id: 3,
    title: "address",
    icon: <MapPin />,
    path: "/#",
    name: address,
  }
]