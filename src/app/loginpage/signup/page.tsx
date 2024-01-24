
"use client";
import React, { useState } from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import linkedin from "/public/images/linkedin.svg";
import facebook from "/public/images/facebook.svg";
import google from "/public/images/google.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

import logo from "/public/images/logo.svg";
import axios from "axios";
import toast from "react-hot-toast";

const SignIn = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    companyName: '',
    url: '',
    email: '',
    password: '',
    phone: '',
  })

  const [agree, setAgree] = useState(false);
  const [userError, setUserError] = useState({
    companyNameError: '',
    urlError: '',
    emailError: '',
    passwordError: '',
    phoneError: '',
    agreeError: '',
  })
  const [agreeError, setAgreeError] = useState("");
  const validate = () => {
    let isValid = true;

    // Checking  the company name,url,email,pass,phonenum,agreement is empty or not
    if (!user.companyName) {
      setUserError(err => ({
        ...err,
        companyNameError: "Company Name is Required"
      })
      )
      isValid = false;

    } else {
      setUserError(err => ({
        ...err,
        companyNameError: ""
      }))
      //console.log(user.companyName)
    }

    if (!user.url) {
      setUserError(err => ({
        ...err,
        urlError: "URL is Required"
      })
      )
      isValid = false;

    } else if (
      !/^(https?:\/\/)?[a-z0-9]+([-.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(
        user.url
      )
    ) {
      setUserError(err => ({
        ...err,
        urlError: 'URL is Invalid'
      }))
      isValid = false;
    } else {
      setUserError(err => ({
        ...err,
        urlError: ""
      }))
      //console.log(user.url)
    }

    if (!user.email) {
      setUserError(err => ({
        ...err,
        emailError: 'URL is Invalid'
      }))
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      setUserError(err => ({
        ...err,
        emailError: 'URL is Invalid'
      }))
      isValid = false;
    } else {
      setUserError(err => ({
        ...err,
        emailError: ""
      }))
      //console.log(user.email)
    }

    if (!user.password) {
      setUserError(err => ({
        ...err,
        passwordError: 'Password is required'
      }))
      isValid = false;
    } else if (user.password.length < 8) {
      setUserError(err => ({
        ...err,
        passwordError: 'Password must be atleast 8 Characters long'
      }))
      isValid = false;
    } else {
      setUserError(err => ({
        ...err,
        passwordError: ''
      }))
      //console.log(user.password)
    }

    if (!user.phone) {
      setUserError(err => ({
        ...err,
        phoneError: 'Phone Number is required'
      }))
      isValid = false;
    } else if (!/^\d{10}$/.test(user.phone)) {
      setUserError(err => ({
        ...err,
        phoneError: 'Phone Number must be atleast 10 digits'
      }))
      isValid = false;
    } else {
      setUserError(err => ({
        ...err,
        phoneError: ''
      }))
      //console.log(user.phone)
    }

    if (!agree) {
      setAgreeError("You must agree to the terms and privacy policy");
      isValid = false;
    } else {
      setAgreeError("");
      // console.log(agree)
    }

    return isValid;
  };
  const SubmitHandler = async (e:any) => {
    e.preventDefault();
    if (
      !validate()) {
      console.log('Wrong User Input', user);
      return
    }
    console.log('Correct User Input', user);
    try {
      const res = await axios.post("/api/users/signup", user);

      console.log(res);
      toast.success(res.data.message);
      router.push("/loginpage/login");
    } catch (error: any) {
      console.log(error);
      toast(error.response.data.message);

    }

  }
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
              value={user.companyName}
              onChange={(e) => setUser(prevUserInfo => ({
                ...prevUserInfo,
                companyName: e.target.value
              }))}
            />
            {userError.companyNameError && (
              <p className="text-red-500 text-xs mb-1">
                {userError.companyNameError}
              </p>
            )}
            <h5 className="text-xs font- .min-vh-45">
              https://social.zoho.in/social/{" "}
            </h5>
            <input
              className="bg-gray-100 shadow-inner text-xs rounded p-2 mb-4"
              id="url"
              type="url"
              aria-label="URL"
              placeholder="Enter URL*"
              value={user.url}
              onChange={(e) => setUser(prevUserInfo => {
                return {
                  ...prevUserInfo,
                  url: e.target.value
                }
              })}
            />
            {userError.urlError && (
              <p className="text-red-500 text-xs mb-1">{userError.urlError}</p>
            )}
            <input
              className="bg-gray-100 shadow-inner text-xs rounded p-2 mb-4"
              id="email"
              type="email"
              aria-label="email address"
              placeholder="Email address*"
              value={user.email}
              onChange={(e) => setUser(prevUserInfo => {
                return {
                  ...prevUserInfo,
                  email: e.target.value
                }
              })}
            />
            {userError.emailError && (
              <p className="text-red-500 text-xs mb-1">{userError.emailError}</p>
            )}
            <input
              className="bg-gray-100 shadow-inner text-xs rounded p-2 mb-4"
              id="password"
              type="password"
              aria-label="password"
              placeholder="Password*"
              value={user.password}
              onChange={(e) => setUser(prevUserInfo => ({
                ...prevUserInfo,
                password: e.target.value
              }))}
            />
            {userError.passwordError && (
              <p className="text-red-500 text-xs mb-1">{userError.passwordError}</p>
            )}
            <input
              className="bg-gray-100 text-xs shadow-inner rounded p-2 mb-4"
              id="phone"
              type="tel"
              aria-label="phone number"
              placeholder="Phone number*"
              value={user.phone}
              onChange={(e) => setUser(prevUserInfo => ({
                ...prevUserInfo,
                phone: e.target.value
              }))}
            />
            {userError.phoneError && (
              <p className="text-red-500 text-xs mb-1">{userError.phoneError}</p>
            )}
            <div className="flex items-center mb-4">
              <input
                className="mr-2"
                id="agree"
                type="checkbox"
                aria-label="agree to terms and privacy policy"
                onChange={(e) => setAgree(!agree)}

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
              onClick={SubmitHandler}
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