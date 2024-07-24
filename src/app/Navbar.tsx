"use-client"

import React, { useState } from "react";
import { Input } from "../components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import {Icon} from '@iconify/react'
const Navbar: React.FC = () => {
    const nav =[

        {
            name:'Home',
            path: '/',
            icon: 'mdi-light:home'
        },
        {
            name:'About',
            path: '/',
            icon: 'mdi:about'
        },
        {
            name:'Sign Up',
            path: '/'
        },
        {
            name:'Log In',
            path: '/'
        }
    ]
    
    return(
        <div className="fixed bg-[#f2f2f2] w-screen h-20 bg-opacity-80 flex items-center justify-between p-4">
            <span className="flex flex-row "><img className="w-24 h-24 md:w-32 md:h-24" 
            src="/assets/MS.png" 
            alt="logo" />

            <img className="md:w-[200px] h-15 w-[150px]" 
            src="/assets/watermark 1.png" 
            alt="logo name" />
            </span>
                <Input 
                className='h-8 w-[200px] md:w-[300px] text-gray-300 pl-4 border-2 border-[#f98222]'
                type='text'
                placeholder='Search'
                />
                
                <ul className="flex flex-row items-center hidden text-sm md:text-md lg:text-lg md:hidden lg:block lg:flex lg:flex-row justify-center gap-x-20 pr-4">
                {
                
                  
                    nav.map((items,index) => (


                    <li key={index} className="list-none justify-center items-center flex">
                        <Link href={items.path}>{items.name}</Link>
                    </li>

                ))
                }

                </ul>
                <div className="block lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-12 h-12 bg-gray-500 bg-opacity-40 border-none"></DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-200 bg-opacity-90">
            {nav.map((item, index) => (
              <DropdownMenuItem key={index}>
                <Link href={item.path}>{item.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

        </div>
    )
}
export default Navbar;