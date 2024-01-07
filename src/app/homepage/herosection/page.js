'use client'
import React, { useState } from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import linkedin from "@/app/images/linkedin.svg";
import facebook from "@/app/images/facebook.svg";
import google from "@/app/images/google.svg";


const Hero = () => {
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
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    } else {
      setEmailError("");
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

  
  const handleSubmit = (e) => { //handle the form submission
    
    e.preventDefault(); // Prevent the default browser behavior

    
    if (validate()) { // Validate the form inputs
      
      console.log("Form submitted successfully"); // If the form is valid, sending the data to the backend
      console.log(companyName, url, email, password, phone, agree);
    }
  };

  return (
    <div>
      <section className="mx-auto flex max-w-6xl flex-col-reverse gap-2 px-4 pb-12 transition-all md:flex-row md gap-4">
        {/* left div */}
        <div className=" flex flex-col gap-6 pt-8 text-center md:w-1/2 md:items-start md:gap-10 md:pt-26 md:text-left">
          <h1 className="text-4xl font-semibold md:text-5xl">
            The easiest way to manage your brands on social media
          </h1>
          <Balancer>
            <h4 className="text-lg md:text:2xl">
              Schedule unlimited posts, monitor what matters, and create
              custom-reports to analyze your social media performance with Zoho
              Social.
            </h4>
          </Balancer>
        </div>
        {/* right div */}
        <section className="flex  gap-6 pb-2 justify-end items-center md:w-1/2 md:items-start md:gap-10 md:pt-22 md:text-left">
            <Balancer>
          <div className="p-6 pb-48 justify-center items-center h-screen flex">
            <form className="flex flex-col w-66" onSubmit={handleSubmit}>
              <h5 className="text-lg font-semibold mb-4">
                Get started in 30 seconds
              </h5>
              <div className="flex space-x-4 mb-4">
                <button
                  className="bg-gray-200 shadow-inner rounded p-2 flex-1"
                  type="button"
                >
                  For Businesses
                </button>
                <button
                  className="bg-gray-200 shadow-inner rounded p-2 flex-1"
                  type="button"
                >
                  For Agencies
                </button>
              </div>
              <input
                className="bg-gray-200 shadow-inner rounded text-xs p-2 mb-4"
                id="companyName"
                type="text"
                aria-label="company name"
                placeholder="Company Name*"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              {companyNameError && (
                <p className="text-red-500 text-sm mb-4">{companyNameError}</p>
              )}
                <h5 className="text-xs font- .min-vh-45">https://social.zoho.in/social/ </h5>
                
              {urlError && (
                <p className="text-red-500 text-sm mb-4">{urlError}</p>
              )}
              <input
                className="bg-gray-200 shadow-inner text-xs rounded p-2 mb-4"
                id="email"
                type="email"
                aria-label="email address"
                placeholder="Email address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="text-red-500 text-sm mb-4">{emailError}</p>
              )}
              <input
                className="bg-gray-200 shadow-inner text-xs rounded p-2 mb-4"
                id="password"
                type="password"
                aria-label="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="text-red-500 text-sm mb-4">{passwordError}</p>
              )}
              <input
                className="bg-gray-200 text-xs shadow-inner rounded p-2 mb-4"
                id="phone"
                type="tel"
                aria-label="phone number"
                placeholder="Phone number*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {phoneError && (
                <p className="text-red-500 text-sm mb-4">{phoneError}</p>
              )}
              <div className="flex items-center mb-4">
                <input
                  className="mr-2"
                  id="agree"
                  type="checkbox"
                  aria-label="agree to terms and privacy policy"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <label htmlFor="agree">
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
                <p className="text-red-500 text-sm mb-4">{agreeError}</p>
              )}
              <button
                className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded mb-4"
                type="submit"
              >
                SIGN UP FOR FREE
              </button>
              <p className="text-gray-500 text-sm mb-4">or sign in using</p>
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
            </form>
          </div>
          </Balancer>
        </section>
      </section>
    </div>
  );
};

export default Hero;