'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeIn } from './variants';
import { company, contact, site, siteAbbreviation, socialLink, support } from "./index";

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat text-white pt-16">
      <div className="container mx-auto">
        <div className='flex flex-col justify-between xl:flex-row'>
          {/* logo */}
          <div className="w-[160px] mb-8 xl:mb-0">
            <Link href="/">
              <Image
                className='w-32'
                src="/assets/watermark.png"
                width={90}
                height={36}
                alt="" />
            </Link>
          </div>
          {/* grid items */}
          <div className='flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mb-8 xl:mb-16'>
            {/* blog */}
            <div>
              <h4 className='font-semibold mb-5'>
                Company
              </h4>
              <ul className='flex flex-col gap-y-6 text-sm'>
                {
                  company.map((item, index) => (
                    <li className="text-[#f2f2f2] text-sm pb-4 hover:underline hover:text-[#f89222] cursor-pointer" key={index}>
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-5'>
                Support
              </h4>
              <ul className='flex flex-col gap-y-6 text-sm'>
                {
                  support.map((item, index) => (
                    <li className="text-[#f2f2f2] text-sm pb-4 hover:underline hover:text-[#f89222] cursor-pointer" key={index}>
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* socials */}
            <div>
              <h4 className='font-semibold mb-5'>
                Contact
              </h4>
              <ul className='flex flex-col gap-y-6 text-sm'>
                {
                  contact.map((item, index) => (
                    <li className="text-[#f2f2f2] text-sm pb-4 hover:underline hover:text-[#f89222] cursor-pointer" key={index}>
                      <Link href={item.path}>
                        <span className='flex gap-x-4 '>
                          <p className='  text-white hover:text-[#f89222]'>{item.icon} </p>
                          <p className='  text-white hover:text-[#f89222]'>{item.title}</p>
                        </span></Link>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div>
              <h4 className='font-semibold mb-5'>
                Socials
              </h4>
              <ul className='flex flex-col gap-y-6 text-sm'>
                {
                  socialLink.map((item, index) => (
                    <li className="text-[#f2f2f2] text-sm pb-4 hover:underline hover:text-[#f89222] cursor-pointer" key={index}>
                      <Link href={item.path}>
                        <span className='flex gap-x-4 '>
                          <p className='  text-white hover:text-[#f89222]'>{item.icon} </p>
                          <p className='  text-white hover:text-[#f89222]'>{item.title}</p>
                        </span></Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

        </div>
        {/* copywright text */}
        <div className='py-4 border-t border-white/10'>
          <p className='text-white/60 text-center text-sm'>
            Copywright&copy; Menu Tech | All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
