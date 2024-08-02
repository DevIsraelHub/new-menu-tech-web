'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/variants';

const DynamicMap = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
});

const MenuMap = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className='relative xl:after:w-full xl:after:h-[240px]'
      id='contact'
    >
      <DynamicMap />
    </motion.section>
  );
};

export default MenuMap;
