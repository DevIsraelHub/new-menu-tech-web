// 'use client'

// import { motion } from "framer-motion"
// import Image from "next/image"
// import { fadeIn } from "./variants"
// import { Button } from "./ui/button"



// const About = () => {

//     const features = [
//         {
//           title: 'The Gourmet Bistro',
//           description: 'Elevating dining experiences with exquisite culinary creations that tantalize your taste buds and delight your senses.',
//           imgSrc: '/assets/image5.jpeg',
//           reverse: false
//         },
//         {
//           title: 'Urban Café',
//           description: 'Elevating dining experiences with exquisite culinary creations that tantalize your taste buds and delight your senses.',
//           imgSrc: '/assets/image3.jpeg',
//           reverse: true
//         },
//         {
//           title: 'Sea Breeze Diner',
//           description: 'Bringing fresh flavors and ocean vibes to every meal, offering a seaside escape right at your table.',
//           imgSrc: '/assets/image4.jpeg',
//           reverse: false
//         },
//         {
//           title: 'Spice Route',
//           description: 'Embark on a journey of taste with our diverse, flavorful dishes that transport you to exotic destinations.',
//           imgSrc: '/assets/image2.jpeg',
//           reverse: true
//         }
//      ];

//     return (
//         <section className="gap-x-[74px] p-8 md:p-12 xl:p-0 lg:p-0 items-center" id="about">
//             {/* text */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">

//             <motion.div
//             variants={fadeIn('right',0.3)}
//             initial='hidden'
//             whileInView={'show'} 
//             viewport={{once:false, amount: 0.2}}
//             className="xl:pl-[135px]">
//                 <h1 className="text-orange-500 mb-9">
//                 Lets Talk About WFood
//                 </h1>
//                 <p className="mb-8">
//                 Mauris nam et ipsum ipsum in. Risus nullam in sit mi est justo at fringilla. Consequat ac fringilla quis enim, sit ipsum. Laoreet eget metus morbi convallis gravida elementum facilisis. Neque enim quis fusce amet. Pellentesque netus vel eu  
//                 </p>
//                 {/* <p className="mb-9">
//                  posuere ultrices facilisi. Senectus velit lobortis velit arcu varius lectus mattis. Dictum aenean duis aliquet Tortor purus egestas urna scelerisque vel ornare lectus ultricies. Nisi, eu ut ultricies enim enim amet porttitor. Volutpat ac tellus volutpat eget volutpat orci enim, ut a. Turpis adipiscing eleifend dignissim viverra euismod ultrices.
//                 </p> */}
//                 <Button className="mb-10">
//                     Read more
//                 </Button>
//                 <Button className="mb-10">
//                     Read more
//                 </Button>
//                 </motion.div>
//                 <motion.div
//                 variants={fadeIn('left',0.3)}
//                 initial='hidden'
//                 whileInView={'show'} 
//                 viewport={{once:false, amount: 0.2}}
//                 className="xl:pl-[135px] lg:pr-[135px] flex items-center justify-center"
//                 >
//                     {/* img */}
//                     <div>
//                         <Image  src='/assets/Group 15.png' width={705} height={771}
//                         alt=""
//                         className="hidden xl:flex lg:flex"
//                         />
//                     </div>
//                 </motion.div>
//             </div>

           

//             </section>
//     )
// }

// export default About



'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "./variants"
import { Button } from "./ui/button"

const About = () => {
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
        <section className="gap-x-[74px] p-8 md:p-12 xl:p-0 lg:p-0 pl-24 items-center" id="about">
            
            {/* Dynamic content */}
            <div className="grid grid-cols-1 mt-16 gap-y-12 mb-32">
                {features.map((feature, index) => (
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        <motion.div
                            variants={fadeIn(feature.reverse ? 'left' : 'right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
                            className={`order-${feature.reverse ? '2 lg:order-1' : '1 lg:order-2'} xl:pl-[135px] lg:pr-[135px] flex items-center justify-center`}
                        >
                            <div>
                                <Image 
                                src={feature.imgSrc} 
                                width={705} 
                                height={771}
                                    alt=""
                                    className="hidden sm:flex  md:flex md:w-[300px] sm:w-[300px] xl:flex lg:flex lg:w-full rounded-full" />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeIn(feature.reverse ? 'right' : 'left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
                            className={`order-${feature.reverse ? '1 lg:order-2' : '2 lg:order-1'} mb-30 xl:pl-[135px]`}
                        >
                            <h1 className="text-orange mb-9">
                                {feature.title}
                            </h1>
                            <p className="mb-8">
                                {feature.description}
                            </p>
                            <div className="flex justify-center gap-x-10">
                            <Button className="bg-black-heavy mb-10 rounded-br-[20px] rounded-tl-[20px]">
                                Menu
                            </Button>
                            <Button className="bg-orange mb-10 rounded-br-[20px] rounded-tl-[20px]">
                                Book a table
                            </Button>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About
