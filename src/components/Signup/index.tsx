"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CustomSelect } from "./Select";
import { FacebookIcon } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import StepCounter from "../stepCounter";

const SignUp = ({ onToggle }) => {
  const [nextPage, setNextPage] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
    const [hydrated, setHydrated] = useState(false);

  const [formData, setFormData] = useState({
    restaurantName: "",
    address: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    email: "",
    agreeTerms: false,
    firstName: "",
    lastName: "",
    cuisine: "",
    open: "",
  });

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Render nothing until hydrated
  }

  const cuisineGroups = [
    {
      label: "Cuisines",
      items: [
        { value: "chinese", label: "Chinese" },
        { value: "french", label: "French" },
        { value: "english", label: "English" },
        { value: "italian", label: "Italian" },
        { value: "mexican", label: "Mexican" },
        { value: "select", label: "" },
      ],
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCuisineChange = (value: string) => {
    setFormData({
      ...formData,
      cuisine: value,
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
      restaurantName: "",
      address: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      email: "",
      agreeTerms: false,
      firstName: "",
      lastName: "",
      open: "",
      cuisine: "",
    });
  };

  const handleNext = () => {
    setNextPage(true);
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setNextPage(false);
    setCurrentStep(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <form className="w-full relative" onSubmit={handleSubmit}>
      <div className="bg-white mr-12 m-12 h-full border-2 border-black/30 overflow-hidden rounded-3xl flex shadow-xl">
        {/* Form */}
        <div className="lg:w-2/3 w-full bg-white p-6 flex flex-col sm:h-fit-content ">
          {!nextPage ? (
            <div className="lg:px-36 py-12">
              {/* Heading */}
              <div className="mb-12">
                <StepCounter currentStep={currentStep} totalSteps={2} />
                <h4 className="font-semibold text-xl max-md:justify-center flex">Get started Now</h4>
              </div>
              {/* Input 1 */}
              <div className="mb-4">
                <Label className="text-black">Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  placeholder="Name"
                  size={12}
                  maxLength={30}
                  className="border-black/40 border-[1px] w-full h-10 rounded-md"
                />
              </div>
              {/* Input 2 */}
              <div className="mb-4">
                <Label className="text-black">Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  size={12}
                  maxLength={250}
                  className="border-[1px] border-black/40 w-full h-10 rounded-md"
                />
              </div>
              {/* Input 3 & 4 */}
              <div className="md:flex gap-x-4 mb-4">
                <div className="md:w-1/2 mb-4">
                  <Label className="text-black">Type of Cuisine</Label>
                  <CustomSelect
                    placeholder="Select"
                    groups={cuisineGroups}
                    value={formData.cuisine}
                    onChange={handleCuisineChange}
                  />
                </div>
                <div className="md:w-1/2 mb-4">
                  <Label className="text-black">Time Open & Closed</Label>
                  <Input
                    type="text"
                    name="open"
                    value={formData.open}
                    onChange={handleChange}
                    placeholder="e.g 9am-10pm"
                    size={12}
                    maxLength={20}
                    className="border-[1px] border-black/40 w-full h-10 rounded-md"
                  />
                </div>
              </div>
              {/* Checkbox */}
              <div className="mb-10">
                <Button
                  className="w-full bg-orange hover:bg-orange-hover h-12"
                  onClick={() => {
                    setCurrentStep(2);
                    setNextPage(true);
                  }}                >
                  Next
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
              <div className="text-center mb-6">
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-blue cursor-pointer hover:text-gray-hover/45"
                    onClick={onToggle}
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="xl:px-36 py-12">
              <div className="mb-12">
                <StepCounter currentStep={currentStep} totalSteps={2} />
                <h4 className="font-semibold text-xl max-md:justify-center flex">Additional Information</h4>
              </div>
              <div className="md:flex gap-x-4 mb-4">
                <div className="md:w-1/2 max-md:mb-2">
                  <Label className="text-black">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    size={12}
                    maxLength={50}
                    className="border-[1px] border-black/40 w-full h-10 rounded-md"
                  />
                </div>
                <div className="md:w-1/2 max-md:mb-2">
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
              <div className="flex gap-x-4 mb-4">
                <div className="w-1/2 mb-4">
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
                <div className="w-1/2 mb-4">
                  <Label className="text-black">Confirm Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    size={12}
                    maxLength={16}
                    className="border-[1px] border-black/40 w-full h-10 rounded-md"
                  />
                </div>
              </div>
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
                  className="w-full bg-orange hover:bg-orange-hover h-12"
                  onClick={() => {
                    setCurrentStep(1);
                    setNextPage(false);
                  }}
                >
                  Back
                </Button>
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
                  Already have an account?{" "}
                  <span
                    className="text-blue cursor-pointer hover hover:text-gray-hover/45"
                    onClick={onToggle}
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Image */}
        <Image
          src="/assets/coffeeshop.png"
          width={786}
          height={682}
          alt="restaurant"
          className="w-1/3 rounded-bl-3xl hidden lg:block rounded-tl-3xl object-cover"
        />
      </div>
    </form>
  );
};

export default SignUp;
