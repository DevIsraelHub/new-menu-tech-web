'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "@/components/variants"
import { Button } from "@/components/ui/button"

const Features = () => {
  const features = [
    {
      title: 'The Gourmet Bistro',
      description: 'Elevating dining experiences with exquisite culinary creations that tantalize your taste buds and delight your senses.',
      imgSrc: '/assets/image5.jpeg',
      reverse: false
    },
    {
      title: 'Urban Café',
      description: 'Elevating dining experiences with exquisite culinary creations that tantalize your taste buds and delight your senses.',
      imgSrc: '/assets/image3.jpeg',
      reverse: true
    },
    {
      title: 'Sea Breeze Diner',
      description: 'Bringing fresh flavors and ocean vibes to every meal, offering a seaside escape right at your table.',
      imgSrc: '/assets/image4.jpeg',
      reverse: false
    },
    {
      title: 'Spice Route',
      description: 'Embark on a journey of taste with our diverse, flavorful dishes that transport you to exotic destinations.',
      imgSrc: '/assets/image2.jpeg',
      reverse: true
    }
  ];

  return (
    <section className="flex items-center justify-center w-full gap-x-[74px] p-8 md:p-12 lg:px-24" id="features">
      {/* Dynamic content */}
      <div className="grid grid-cols-1 mt-16 gap-y-12 mb-2">
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <motion.div
              variants={fadeIn(feature.reverse ? 'left' : 'right', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.1 }}
              className={`order-${feature.reverse ? '2 lg:order-1' : '1 lg:order-2'} flex items-center justify-center`}
            >
              <div>
                <Image
                  src={feature.imgSrc}
                  width={705}
                  height={771}
                  alt=""
                  className="flex md:flex max-w-[350px] xl:flex lg:flex lg:w-full rounded-full" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn(feature.reverse ? 'right' : 'left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.1 }}
              className={`order-${feature.reverse ? '1 lg:order-2' : '2 lg:order-1'} mb-30`}
            >
              <h1 className="text-orange mb-9">
                {feature.title}
              </h1>
              <p className="mb-8">
                {feature.description}
              </p>
              <div className="flex justify-center gap-x-10">
                <Button className="bg-black-heavy mb-10 hover:bg-gray-hover rounded-br-[20px] rounded-tl-[20px]">
                  Menu
                </Button>
                <Button className="bg-orange mb-10 hover:bg-orange-hover rounded-br-[20px] rounded-tl-[20px]">
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
