'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "./variants"
import { Button } from "@/components/ui/button"


const About = () => {

  return (
    <section className="w-full pt-12 gap-x-[74px] p-4 md:p-12 xl:p-0 lg:p-0 items-center" id="about">
      {/* text */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 px-12">

        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2 }}
          className="xl:pl-[100px]">
          <h1 className="text-orange-500  w-full max-sm:text-5xl mb-9">
            About Menu Tech
          </h1>
          <p className="mb-8">
            Mauris nam et ipsum ipsum in. Risus nullam in sit mi est justo at fringilla. Consequat ac fringilla quis enim, sit ipsum. Laoreet eget metus morbi convallis gravida elementum facilisis. Neque enim quis fusce amet. Pellentesque netus vel eu
          </p>
          <p className="mb-9">
            posuere ultrices facilisi. Senectus velit lobortis velit arcu varius lectus mattis. Dictum aenean duis aliquet Tortor purus egestas urna scelerisque vel ornare lectus ultricies. Nisi, eu ut ultricies enim enim amet porttitor. Volutpat ac tellus volutpat eget volutpat orci enim, ut a. Turpis adipiscing eleifend dignissim viverra euismod ultrices.
          </p>
          <Button className="mb-10 bg-orange hover:bg-orange-hover">
            Read more
          </Button>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.1 }}
          className="xl:pl-[100px] xl:pr-[100px] flex items-center justify-center"
        >
          <div>
            <Image
              src='/assets/background.jpeg'
              width={705}
              height={1000}
              alt=""
              className="hidden xl:flex lg:flex size-[500px] object-cover"
            />
          </div>
        </motion.div>
      </div>



    </section>
  )
}

export default About

