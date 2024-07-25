'use client'

import Image from "next/image";
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import { fadeIn } from './variants';
import { Icon, InstagramIcon } from "lucide-react";
import { Twitter, Instagram, Facebook } from "lucide-react";


const Hero = () => {
  return (
    <section className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0" id="home">
      <div className="container mx-auto">
        {/* Text and Image */}
        <div className="flex items-center xl:h-[960px]">
          {/* Text */}
          <motion.div
            variants={fadeIn('down', 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className="w-full xl:max-w-[550px] text-center xl:text-left">
            <h1
              className='text-white mb-7'
            >
              Build Your Restaurant&apos;s Online <br className="lg:hidden" />
              Presence Effortlessly

            </h1>

            <p

              className="text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0">
              Welcome to MenuTech Solutions! Easily create a professional website for your restaurant to showcase your menu, accept reservations, and engage with customers online.
            </p>
            <div
            >
              <Button className="bg-orange hover:bg-orange-hover">Get Started</Button>
            </div>

          </motion.div>
          {/* Image */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='hidden xl:flex xl:absolute xl:top-[100px] xl:right-0'>
            <Image
              src="/assets/Group 13.png"
              width={786}
              height={682}
              alt="restaurant"
            />
          </motion.div>
        </div>
      </div>
      {/* Coffee Image */}
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className="hidden xl:flex xl:relative xl:-top-12">
        <Image
          width={350}
          height={350}
          alt="Menu assurance"
          src="/assets/menu.png"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
