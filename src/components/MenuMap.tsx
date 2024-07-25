'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const DynamicMap = dynamic(() => import('./MapComponent'), {
  ssr: false,
});

const MenuMap = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className='relative xl:after:w-full xl:after:h-[240px]'
      id='contact'
    >
      <DynamicMap />
    </motion.section>
  );
};

export default MenuMap;
