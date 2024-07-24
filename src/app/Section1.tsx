import React from "react";
import Navbar from './Navbar'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Icon} from '@iconify/react'
const Section1: React.FC =() =>{
    return(
        <div 
      className="relative bg-cover bg-center items-center flex flex-wrap h-screen" 
      style={{ backgroundImage: 'url(/assets/background.jpeg)', backgroundRepeat: 'no-repeat'
      }}
    
    >
            <div className="bg-[#F89222] md:w-1/2 w-[400px] h-screen rounded-r-full bg-opacity-50">

                <div className="bg-[#F89222]  md:w-[500px] lg:w-[600px] w-[450px] h-screen rounded-r-full bg-opacity-50">
                    <Navbar />
                    <div className=" fixed flex items-center justify-center top-40 right-0 bg-[#f2f2f2] w-16 h-16 md:w-32 md:h-32 rounded-full bg-opacity-80">
                    <Icon className=" text-[#1e1e1e] relative top-1 md:h-12 md:w-32 w-8 h-8" icon="f7:phone-fill" />

                    </div>
                    <h6 className="pl-10 pt-60 md:text-5xl lg:text-6xl text-4xl font-bold text-[#f2f2f2] w-[400px] md:w-[490px] lg:w-[650px]">Build Your Restaurant’s Online Presence Effortlessly</h6>
                    <p className="pl-10 text:sm  md:text-md font-semibold w-[400px] lg:w-[650px] 
                   lg:text-lg text-[#f2f2f2] pt-10 pb-6">
                        Welcome to MenuTech Solutions! Easily create a professional website for your restaurant to showcase your menu, accept reservations, and engage with customers online.

                    </p>
                        <div className="">
                    <Button className="ml-10 flex items-center rounded-full w-[200px] border-2 border-white justify-center bg-[#f89222] ">Get Started</Button>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
export default Section1