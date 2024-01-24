"use client"
import axios from "axios"
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import linkedin from "/public/images/linkedin.svg";
import facebook from "/public/images/facebook.svg";
import instagram from "/public/images/instagram.svg";
import x from "/public/images/x.svg";
import { useState } from "react";


export default function Mainpage() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const logoutHandler = async () => {
        try {
            const res = await axios.get("/api/users/logout");
            router.push("/loginpage/login");
            toast.success(res.data.message);
        } catch (error: any) {
            toast.error(error.response.data.message);
        }
    }


    return (

        <div className="bg-gray-300  h-screen justify-center" >
            <div className="">
                <div className="container mr-40 ml-30 px-80 h-500 min-vh-30" >


                    <div className="bg-white rounded-lg shadow-md px-20 py-11 ">
                        <h2 className="text-2xl font-bold mb-4">Get started by setting up a Brand</h2>

                        <button
                            className="bg-white shadow p-2 rounded flex-col mx-2 gap-2 items-center justify-center"
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
                            className="bg-white shadow p-2 rounded flex-col mx-2 gap-2  items-center justify-center"
                            type="button"
                        >
                            <Image
                                src={instagram}
                                alt="Instagram logo"
                                width="24"
                                height="24"
                            />
                        </button>
                        <button
                            className="bg-white shadow p-2 rounded flex-col mx-2 gap-2 items-center justify-center"
                            type="button"
                        >
                            <Image
                                src={x}
                                alt="X logo"
                                width="24"
                                height="24"
                            />
                        </button>
                        <button
                            className="bg-white shadow p-2 rounded flex-col mx-2 items-center justify-center"
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
                        <span className="text-gray-500 items-center flex text-sm mb-4 line-con w-full mt-3">
                            <span className='border-[1px] h-[1px] border-gray-500 flex-1'></span><p></p><span className='border-[1px] flex-1 border-gray-500 h-[1px]'>
                            </span>
                        </span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">Connect Facebook</button>
                        <p className="mt-4 text-gray-600">
                            A Brand is a collection of social media channels that are all managed through a single dashboard. You can add one of each type of channel to a Brand.
                        </p>
                    </div>
                </div>
                <button onClick={logoutHandler} className='btn bg-red-500 rounded-lg flex width-full text-align-center px-2 py-1'>Sign Out</button>

            </div>

        </div>
    )
}
