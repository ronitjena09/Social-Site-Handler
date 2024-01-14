
"use client";
import React, { useState } from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import linkedin from "/public/images/linkedin.svg";
import facebook from "/public/images/facebook.svg";
import google from "/public/images/google.svg";
import Link from "next/link";

import logo from "/public/images/logo.svg";

const SignIn = () => {
  const [companyName, setCompanyName] = useState("");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState("");

  const [companyNameError, setCompanyNameError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [agreeError, setAgreeError] = useState("");
  const validate = () => {
    let isValid = true;

    // Checking  the company name,url,email,pass,phonenum,agreement is empty or not
    if (!companyName) {
      setCompanyNameError("Company name is required");
      isValid = false;
      console.log(companyName)
    } else {
      setCompanyNameError("");
    }

    if (!url) {
      setUrlError("URL is required");
      isValid = false;
    } else if (
      !/^(https?:\/\/)?[a-z0-9]+([-.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(
        url
      )
    ) {
      setUrlError("URL is invalid");
      isValid = false;
    } else {
      setUrlError("");
      console.log(url)
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    } else {
      setEmailError("");
      console.log(email)
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!phone) {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Phone number must be 10 digits");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!agree) {
      setAgreeError("You must agree to the terms and privacy policy");
      isValid = false;
    } else {
      setAgreeError("");
    }

    return isValid;
  };

  return (
    <div className=' bg-[#f6f6f8] flex justify-center md:px-16 sm:px-14 flex-col items-center '>
      <div className="width-full flex-1 border-2 ">

      </div>
      <div className=' '>

        <div className="p-6 pb-48 justify-center items-center h-screen flex">
          <form className="flex flex-col w-66" >
          <section className="p-2 flex items-center ">
            <Link href="/src/components/homepage/navbar">
              <Image src={logo} alt="logo" style={{ width: "110px" }} />
            </Link>
          </section>
            <h5 className="text-lg font-semibold mb-4">
              Get started in 30 seconds.
            </h5>
            <div className="flex space-x-4 mb-4">
              <input
                className="ml-1 "
                type="radio"
                name="submit"
              />
              For Businesses
              <input
                className=" mx-3 "
                type="radio"
                name="submit"
              />
              For Agencies
            </div>
            <input
              className="bg-gray-100 shadow-inner rounded text-xs p-2 mb-4"
              id="companyName"
              type="text"
              aria-label="company name"
              placeholder="Company Name*"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            {companyNameError && (
              <p className="text-red-500 text-xs mb-1">
                {companyNameError}
              </p>
            )}
            <h5 className="text-xs font- .min-vh-45">
              https://social.zoho.in/social/{" "}
            </h5>

            {urlError && (
              <p className="text-red-500 text-xs mb-1">{urlError}</p>
            )}
            <input
              className="bg-gray-100 shadow-inner text-xs rounded p-2 mb-4"
              id="email"
              type="email"
              aria-label="email address"
              placeholder="Email address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-red-500 text-xs mb-1">{emailError}</p>
            )}
            <input
              className="bg-gray-100 shadow-inner text-xs rounded p-2 mb-4"
              id="password"
              type="password"
              aria-label="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-500 text-xs mb-1">{passwordError}</p>
            )}
            <input
              className="bg-gray-100 text-xs shadow-inner rounded p-2 mb-4"
              id="phone"
              type="tel"
              aria-label="phone number"
              placeholder="Phone number*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && (
              <p className="text-red-500 text-xs mb-1">{phoneError}</p>
            )}
            <div className="flex items-center mb-4">
              <input
                className="mr-2"
                id="agree"
                type="checkbox"
                aria-label="agree to terms and privacy policy"

              />
              <label htmlFor="agree" className=" width-full text-sm">
                I agree to the{" "}
                <a href="/" className="text-blue-600 underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/" className="text-blue-600 underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            {agreeError && (
              <p className="text-red-500 text-xs mb-1">{agreeError}</p>
            )}
            <button
              className="bg-red-500 hover:bg-red-700 duration-300 text-white shadow p-2 rounded mb-4"
              type="submit"
            >
              SIGN UP FOR FREE
            </button>
            <p className="text-gray-500 text-sm mb-4">or sign in using </p>
            <div className="flex space-x-4">
              <button
                className="bg-white shadow p-2 rounded flex items-center justify-center"
                type="button"
              >
                <Image
                  src={google}
                  alt="Google logo"
                  width="24"
                  height="24"
                />
              </button>
              <button
                className="bg-white shadow p-2 rounded flex items-center justify-center"
                type="button"
              >
                <Image
                  src={facebook}
                  alt="Facebook logo"
                  width="24"
                  height="24"
                />
              </button>
              <button
                className="bg-white shadow p-2 rounded flex items-center justify-center"
                type="button"
              >
                <Image
                  src={linkedin}
                  alt="LinkedIn logo"
                  width={24}
                  height={24} // Adjust height as needed
                  className="d-inline-block align-middle"
                />
              </button>

            </div>
            <div className="mt-4">Have a Zoho account? <Link href="/loginpage/login" className="font-bold text-red-600">SIGN IN</Link></div>

          </form>

        </div>


      </div>

    </div>
  )
}

export default SignIn