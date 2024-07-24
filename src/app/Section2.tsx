import React from "react";
import { Button } from "@/components/ui/button";
import {Icon} from '@iconify/react'
const Section2: React.FC =() =>{

    return(
        <div className="flex flex-col text-center items-center  justify-center h-fit-content w-screen md:h-[150vh] pl-20 pr-20">
            <div className="pl-12">
            <h2 className="text-4xl font-bold text-[#1e1e1e] mt-[200px] md:text-4xl  ">MenuTech For You</h2>
            <h4 className="text-xl text-[#f89222] justify-between mt-4 md:text-2xl font-semibold">Explore new features with the newly MenuTech</h4>

            <div className="flex flex-col  md:flex-row lg:flex-col justify-center mb-10">
            <div className="flex flex-col md:flex-col md:grid-column-2 lg:flex-row lg:pr-10 lg:pl-10 items-center justify-center">
                <div className="flex flex-col items-center w-1/2 p-4">
                    <div className="w-[200px] h-32 bg-orange-500 flex rounded-md items-center text-center justify-center mt-20 mb-4">
                        <Icon className="w-[100px] text-[#f2f2f2] h-[100px]" icon='solar:delivery-bold'/>
                    </div>
                    <h4 className="text-xl text-[#f89222] font-semibold md:text-2xl">Order Online</h4>
                    <p className="w-[360px] text-[#1e1e1e] text-sm md:text-lg">
                    Integrate seamless online ordering for takeout and delivery.
                    </p>

                </div>

                <div className="flex flex-col items-center w-1/2 p-4">
                <div className="w-[200px] h-32 bg-orange-500 flex rounded-md items-center text-center justify-center mt-20 mb-4">
                <Icon className="w-[100px] text-[#f2f2f2] h-[100px]" icon='solar:hamburger-menu-bold'/>

                    </div>
                    <h4 className="text-2xl text-[#f89222] font-semibold">Menu Management</h4>
                    <p className="w-[360px]">
                    Easily update and manage your restaurant's menu with our intuitive menu management system                        </p>

                </div>

                <div className="flex flex-col items-center w-1/2 p-4">
                <div className="w-[200px] h-32 bg-orange-500 flex rounded-md items-center text-center justify-center mt-20 mb-4">
                <Icon className="w-[100px] text-[#f2f2f2] h-[100px]" icon='tabler:ai'/>

                </div>
                    <h4 className="text-2xl text-[#f89222] font-semibold">Order Online</h4>
                    <p className="w-[360px]">
                    Get assistance anytime with our AI-powered 24/7 customer support.
                    </p>

                </div>

               

            </div>
            <div className="flex flex-col md:flex-col md:grid-column-2 lg:flex-row lg:pr-10 lg:pl-10 items-center justify-center ">
            <div className="flex flex-col  items-center justify-center w-1/2 p-4">
                    <div className="w-[200px] h-32 bg-[#f2f2f2] flex rounded-md items-center text-center justify-center mt-20 mb-4">
                    <Icon className="w-[100px] text-[#F15A24] h-[100px]" icon='fa6-solid:users-gear'/>

                    </div>
                    <h4 className="text-lg text-[#f89222] font-semibold md:text-xl w-[300px] lg:text-2xl">Employee Managment</h4>
                    <p className="w-[360px]">EEfficiently manage your staff with our comprehensive employee management tools.</p>

                </div>

                <div className="flex flex-col items-center w-1/2 p-4">
                <div className="w-[200px] h-32 bg-[#f2f2f2] flex rounded-md items-center text-center justify-center mt-20 mb-4">
                <Icon className="w-[100px] text-[#F15A24] h-[100px]" icon='hugeicons:table-round'/>
                </div>
                    <h4 className="text-2xl text-[#f89222] font-semibold w-[300px]"> Reservation System</h4>
                    <p className="w-[360px]">Let customers book tables easily with our built-in reservation system.</p>

                </div>

                <div className="flex flex-col items-center w-1/2 p-4">
                <div className="w-[200px] h-32 bg-[#f2f2f2] flex rounded-md items-center text-center justify-center mt-20 mb-4">
                <Icon className="w-[100px] text-[#F15A24] h-[100px]" icon='ion:bar-chart'/>
                </div>
                    <h4 className="text-2xl text-[#f89222] font-semibold w-[300px]">Analytics and Reporting</h4>
                    <p className="w-[360px]">Track your site’s performance with detailed analytics and reports.</p>

                </div>

                </div>
            </div>

            <Button className="rounded-full w-[200px] h-[50px] bg-[#f2f2f2] border-2 text-[#f15a2a] border-[#f89222] p-4 mb-10 mt-6"> Explore Features</Button>


            </div>
        </div>
    )
}
export default Section2;