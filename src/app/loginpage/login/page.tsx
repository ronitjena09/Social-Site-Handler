'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import linkedin from "/public/images/linkedin.svg";
import facebook from "/public/images/facebook.svg";
import google from "/public/images/google.svg";
import logo from "/public/images/logo.svg";
import axios from 'axios';
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: "",
  })
  const [userError, setUserError] = useState({
    emailError: "",
    passwordError: "",
  });
  const validate = () => {
    let isValid = true;
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
    return isValid;
  };
  const [disable, setDisable] = useState<boolean>(true);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisable(false);
      //console.log(user)
    } else {
      setDisable(true);
    }
  }, [user])
  const SubmitHandler = async (e: any) => {
    e.preventDefault();
    if (
      !validate()) {
      //console.log('Wrong User Input', user);
      return
    }
    //console.log('Correct User Input', user);
    try {
      const res = await axios.post("/api/users/login", user);

      console.log(res);
      toast.success(res.data.message);
      router.push("/mainpage");
    } catch (error: any) {
      console.log(error);
      toast(error.response.data.message);

    }

  }

  return (
    <div className='flex bg-[#e5e7eb] min-h-screen justify-center items-center '>
      <div className='bg-white p-10 rounded-lg shadow-lg '>
        <section className="p-2 mt-3 w-full my-1 mr-3 items-center ">
          <Link href="/src/components/homepage/navbar">
            <Image src={logo} alt="logo" style={{ width: "110px" }} />
          </Link>
        </section>
        <h1 className='font-bold'> Sign in </h1>
        <h3> to access social</h3>

        <div className='flex flex-col my-4'>
          <label></label>
          <input type='email'
            placeholder='Email address'
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
        </div>
        <div className='flex flex-col my-4'>
          <label></label>
          <input type='password'
            placeholder='Password'
            value={user.password}
            onChange={(e) => setUser(prevUserInfo => ({
              ...prevUserInfo,
              password: e.target.value
            }))}
          />
          {userError.passwordError && (
            <p className="text-red-500 text-xs mb-1">{userError.passwordError}</p>
          )}
        </div>
        <button onClick={SubmitHandler} className={`${disable ? "bg-[#e3e3e3] cursor-not-allowed" : "bg-[#06b6d4]"} w-full py-1 my-2 rounded-md text-white`}>Login</button>

        <span className="text-gray-500 items-center flex text-sm mb-4 line-con w-full mt-3">
          <span className='border-[1px] h-[1px] border-gray-500 flex-1'></span><p>Or</p><span className='border-[1px] flex-1 border-gray-500 h-[1px]'>
          </span>
        </span>
        <p className="text-gray-500 text-sm mb-4 w-full">sign in using </p>
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
        <div className="mt-4">Dont have a Zoho account? <Link href="/loginpage/signup" className="font-bold text-blue-400">Sign Up Now </Link></div>
      </div>

    </div>
  )
}

export default Login