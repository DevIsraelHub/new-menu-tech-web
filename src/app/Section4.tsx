import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {Icon} from '@iconify/react'
const Section4: React.FC =() =>{
    return(
        <div className="flex flex-col h-screen text-[#f2f2f2]">
            <div className="w-screen h-fit-content md:h-1/2 bg-[#f89222] pt-6 pl-10">
                <h2 className="font-semibold text-3xl md:text-6xl">We Are Here to Help</h2>
                    <div className="flex flex-col md:flex-row gap-x-8  pt-8">

                        <div className="flex flex-col">
                            <div className="flex flex-row gap-x-2  pt-4">
                            <Icon  className=" relative top-1 w-12 h-12"icon="ph:question-duotone" />
                                <div className="w-[300px] h-32 flex flex-col gap-y-1">
                                    <p className="text-sm font-thin">Visit or help center</p>
                                    <p className="text-lg">12 chille street,Food city, Lagos.</p>
                                </div>
                             </div>
                            <div className="flex flex-row gap-x-2 pt-4">
                            <Icon className=" relative top-1 w-12 h-12" icon="entypo:email" />
                                <span className="w-32 h-32 flex flex-col">
                                    <p className="font-thin">Email Us</p>
                                    <p className="text-lg">menutech@gmail.com</p>
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-row gap-x-2 ">
                        <Icon className=" relative top-1 w-12 h-12" icon="f7:phone-fill" />
                        <span className="w-32 h-32 flex flex-col">
                                <p className="font-thin">Call Us</p>
                                <p className="text-lg">09065048467</p>
                            </span>
                        </div>

                     </div>
            
            
            </div>
            
            <div className="flex flex-col md:flex-row w-screen gap-x-20 gap-y-10 p-4 text-[10px]  font-thin h-fit-content md:h-1/2 bg-black pl-10">
            <img className="w-32 h-32 mt-10"src="./assets/image.png" alt="logo" />
                <div className="flex flex-col md:flex-row mt-10">
                <div className="flex flex-col gap-y-4">
                    <h5 className="text-white font-semibold text-[15px]">Getting Started</h5>
                    <p>Email: menutech@gmail.com</p>
                    <p>Phone: 09065048467</p>
                    <p>Address:12 chille street,Food city, Lagos.</p>
                    <p></p>
                    <p></p>
                </div>
                </div>

                <div className="flex flex-col md:flex-row mt-10">
                <div className="flex flex-col flex-col gap-y-4">
                    <h5 className="text-white font-semibold text-[15px]">Quick Links</h5>
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Contact</p>
                </div>
                </div>

                </div>

                <footer className=" text-gray-300 h-7 bg-black w-screen">
                    <Separator />
                    <div className="flex items-center justify-between pl-10">
                    <p>@ 2009 - 2024 Menu Tech, LLC All Rights reserved.</p>
                    <div className="flex flex-row gap-x-4">

                    </div>
                    </div>
                </footer>
           
                
            </div>
    )
}
export default Section4;