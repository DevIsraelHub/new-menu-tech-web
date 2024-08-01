"use client"
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'
import Link from 'next/link'


const LogIn = () => {
    const [formData, setFormData] = useState({

        password: "",

        phoneNumber: "",
        email: "",
        agreeTerms: false,
        firstName: "",
        lastName: "",

    });

    



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    const handleCheckboxChange = () => {
        setFormData({
            ...formData,
            agreeTerms: !formData.agreeTerms,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // handle form submission here
        setFormData({

            password: "",

            phoneNumber: "",
            email: "",
            agreeTerms: false,
            firstName: "",
            lastName: "",

        });
    };


    return (

        <form className="w-full  relative h-screen overflow-hidden" onSubmit={handleSubmit}>
            
                <Image
                    src="/assets/coffeeshop.png"
                    width={786}
                    height={682}
                    alt="restaurant"
                    className="w-[50%] fixed hidden lg:block h-screen object-cover"
                />
                {/* Form */}
                <div className=" fixed right-0 lg:w-[50%] w-full bg-white p-6 justify-start flex flex-col sm:h-fit-content ">

                    <div className="xl:px-12 py-12">
                        <div className="mb-12">
                            <h4 className="font-semibold text-xl">Log In</h4>
                        </div>
                        
                        <div className="mb-4">
                            <Label className="text-black">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                size={12}
                                maxLength={200}
                                className="border-[1px] border-black/40 w-full h-10 rounded-md"
                            />
                        </div>

                        <div className=" mb-4">
                            <Label className="text-black">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                size={12}
                                maxLength={16}
                                className="border-[1px] border-black/40 w-full h-10 rounded-md"
                            />
                        </div>

                        {/* Checkbox */}
                        <div className="mb-4">
                            <p className="text-[10px] flex gap-2 items-center">
                                <Checkbox
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onCheckedChange={handleCheckboxChange}
                                />
                                I agree to the <u>terms of service</u>
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-6 mb-4">

                            <Button
                                type="submit"
                                className="w-full bg-orange hover:bg-orange-hover h-12"
                                disabled={!formData.agreeTerms}
                            >
                                Submit
                            </Button>
                        </div>
                        {/* Divider */}
                        <div className="flex items-center my-4 w-full">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-2 text-gray-500">or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        {/* Authenticators */}
                        <div className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-6 mb-4">
                            <Button className="w-full h-10 bg-white border text-left text-sm flex items-center text-gray hover:bg-gray-hover/45">
                                <Image
                                    src='/assets/icons8-google.svg'
                                    width={160}
                                    height={170}
                                    alt=""
                                    className="google mr-2 w-8"
                                />

                                Continue with Google
                            </Button>
                            <Button className="w-full h-10 bg-white border text-sm text-gray hover:bg-gray-hover/45">
                                <Image
                                    src='/assets/icons8-facebook.svg'
                                    width={160}
                                    height={170}
                                    alt=""
                                    className="google mr-2 w-8"
                                />
                                Continue with Facebook
                            </Button>
                        </div>
                        <div className="text-center ">
                            <p>
                                Dont have an account?{" "}
                                <span className="text-blue cursor-pointer" >
                                    <Link href='/Signup' className='text-orange' >
                                    Sign Up
                                    </Link>
                                    </span>
                            </p>
                        </div>
                    </div>
                </div>
        </form>
    )
}

export default LogIn