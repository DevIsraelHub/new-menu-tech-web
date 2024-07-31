"use client"
import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Label } from '@radix-ui/react-label'
import { FacebookIcon } from 'lucide-react'
import { Input } from '../ui/input'
import { FaGoogle } from 'react-icons/fa'
import { Checkbox } from '../ui/checkbox'
import Image from 'next/image'


const LogIn = ({ onToggle }: { onToggle: () => void }) => {
  const [hydrated, setHydrated] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    phoneNumber: "",
    email: "",
    agreeTerms: false,
    firstName: "",
    lastName: "",

  });

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Render nothing until hydrated
  }



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

    <form className="w-full  relative" onSubmit={handleSubmit}>
      <div className="bg-white mr-12  m-12 h-full border-2 border-black/30 overflow-hidden rounded-3xl flex shadow-xl">
        {/* Image */}
        <Image
          src="/assets/coffeeshop.png"
          width={786}
          height={682}
          alt="restaurant"
          className="w-1/3 rounded-bl-3xl hidden lg:block rounded-tl-3xl object-cover"
        />
        {/* Form */}
        <div className="lg:w-2/3 w-full bg-white p-6 justify-start flex flex-col sm:h-fit-content ">

          <div className="xl:px-36 py-12">
            <div className="mb-12">
              <h4 className="font-semibold text-xl">Log In</h4>
            </div>
            <div className="md:flex  gap-x-4 mb-4">
              <div className="md:w-1/2">
                <Label className="text-black">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  size={12}
                  maxLength={50}
                  className="border-[1px] border-black/40 w-full h-10  rounded-md"
                />
              </div>
              <div className="md:w-1/2">
                <Label className="text-black">Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  size={12}
                  maxLength={50}
                  className="border-[1px] border-black/40 w-full h-10 rounded-md"
                />
              </div>
            </div>
            <div className="mb-4">
              <Label className="text-black">Phone Number</Label>
              <Input
                type="alphanumeric"
                maxLength={11}
                min={11}
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                size={12}
                className="border-[1px] border-black/40 w-full h-10 rounded-md"
              />
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
                <span className="text-blue cursor-pointer" onClick={onToggle}>Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LogIn