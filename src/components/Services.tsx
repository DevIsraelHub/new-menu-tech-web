'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Truck, Menu, HelpCircle, Users, Table, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { fadeIn } from './variants';

const Services = () => {
  const services = [
    {
      icon: <Truck size={40} className="text-orange " />,
      title: 'Online Ordering ',
      description: 'Integrate seamless online ordering for takeout and delivery.',
      textColor: 'text-[#f2f2f2]',
    },
    {
      icon: <Menu size={40} className="text-orange" />,
      title: 'Menu Management',
      description: "Easily update and manage your restaurant's menu with our intuitive menu management system",
      textColor: 'text-[#f2f2f2]',
    },
    {
      icon: <HelpCircle size={40} className="text-orange " />,
      title: 'AI Support 24/7',
      description: 'Get assistance anytime with our AI-powered 24/7 customer support.',
      textColor: 'text-[#f2f2f2]',
    },
    {
      icon: <Users size={40} className="text-orange" />,
      title: 'Employee Management',
      description: 'Efficiently manage your staff with our comprehensive employee management tools.',
      textColor: 'text-[#f2f2f2]',
    },
    {
      icon: <Table size={40} className="text-orange" />,
      title: 'Reservation System',
      description: 'Let customers book tables easily with our built-in reservation system.',
      textColor: 'text-[#f2f2f2]',
    },
    {
      icon: <BarChart2 size={40} className="text-orange" />,
      title: 'Analytics and Reporting',
      description: 'Track your site performance with detailed analytics and reports.',
      textColor: 'text-[#f2f2f2]',
    },
  ];

  return (
    <section className="relative bg-menu py-12 md:py-28" id='services'>
      <div className="container mx-auto text-center w-full">
        <motion.div
          variants={fadeIn('left', 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className=" mx-auto w-full xl:w-[50em] xl:text-right"
        >
          <h2 className="mb-3 relative">Services We Offer</h2>
          <Link href="/" className="text-orange flex justify-end items-center -scroll-mb-16 mb-6 md:mb-8">
            View All
            <IoIosArrowRoundForward className="text-3xl" />
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 gap-[50px] gap-y-[60px] md:grid-cols-2 md:gap-[15px] xl:grid-cols-3">
          {services.map((item, index) => (
            <div key={index} className=" bg-white hover:bg-body  hover:transition-colors hover:duration-500 shadow-xl lg mx-auto grid max-w-[30em] h-[20em] border rounded-xl xl:mx-0 group">
              <div className="flex justify-center items-center p-4">
                {item.icon}
              </div>
              <div className="p-4">
                <Link href="/">
                  <h3 className="font-poppins text-md text-black/80 mb-[14px]">{item.title}</h3>
                </Link>
                <div className="text-md font-poppins font-semibold text-black/45">{item.description}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
