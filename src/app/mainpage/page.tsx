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
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";



export default function Mainpage() {
    const [menuClicked, setMenuClicked] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState(false);
    const [whatClicked, setWhatClicked] = useState('');
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
        ;

    return (

        <main className="h-screen justify-center border-4 border-red-700  bg-black opacity-[85%] relative" >
            <button onClick={() => setMenuClicked(true)} className=" bg-white p-2 rounded-full absolute top-2 right-2"
            >
                <IoMenu className="text-2xl" />
            </button>
            {
                menuClicked &&
                <div className={` w-1/4 border-4 border-green-600 bg-white absolute right-0 top-0 bottom-0 slide-left transform: translateX(-100%);`}>
                    <button onClick={() => setMenuClicked(false)} className=" absolute -left-[15%] bg-white rounded-lg   p-2 "><RxCross2 /></button>
                    {/* USER DETAILS AND SIGN OUT HERE */}

                </div>
            }
            <div className="container mr-40 ml-30 px-80 h-500 min-vh-30  border-4 border-blue-700 h-full " >
                <div className="bg-white rounded-lg shadow-md px-20 py-11 border-4 border-green-800 ">
                    <h2 className="text-2xl font-bold mb-4">Get started by setting up a Brand</h2>

                    <div className='border-4'>
                        <button
                            onClick={() => setWhatClicked('facebook')}
                            className="bg-white shadow p-2 rounded-full flex-col mx-2 gap-2 items-center justify-center"
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
                            onClick={() => setWhatClicked('instagram')}
                            className="bg-white shadow p-2 rounded-full flex-col mx-2 gap-2  items-center justify-center"
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
                            className="bg-white shadow p-2 rounded-full flex-col mx-2 gap-2 items-center justify-center"
                            type="button"
                            onClick={() => setWhatClicked('x')}
                        >
                            <Image
                                src={x}
                                alt="X logo"
                                width="24"
                                height="24"
                            />
                        </button>
                        <button
                            className="bg-white shadow p-2 rounded-full flex-col mx-2 items-center justify-center "
                            type="button"
                            onClick={() => setWhatClicked('linkedin')}
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
                    <span className="text-gray-500 items-center flex text-sm mb-4 line-con w-full mt-3">
                        <span className='border-[1px] h-[1px] border-gray-500 flex-1'></span><p></p><span className='border-[1px] flex-1 border-gray-500 h-[1px]'>
                        </span>
                    </span>
                    <div className={`border-4 border-yellow-400 h-0 overflow-hidden ${whatClicked.length > 0 && 'h-fit'}`}>
                        {
                            whatClicked === 'facebook' && <div className={` border-2 border-red-500 `}>
                                {/* FACEBOOK DIV */}
                                <p className="mt-4 text-sm text-black font-medium"> Connect a Facebook account associated with the Business Page or Facebook Group you&apos;d like to add.</p>
                                <br></br>
                                <button className="bg-blue-500 text-white px-4 text-sm py-2 rounded-full ">Connect Facebook</button>
                                <br></br> <br></br>
                                <p className="mt-4 text-sm text-gray-500">
                                    A Brand is a collection of social media channels that are all managed through a single dashboard. You can add one of each type of channel to a Brand.
                                </p>
                            </div>
                        }
                        {
                            whatClicked === 'instagram' && <div className={` border-2 border-red-500 `}>
                                {/* INSTAGRAM DIV */}
                                <p className="mt-4 text-sm text-black font-medium">Connect an Instagram Professional Account you&apos;d like to add.</p>
                                <br></br>
                                <button className="bg-red-600 text-white text-sm px-4 py-2 rounded-full ">Connect Instagram</button>
                                <br></br>
                                <p className="text-sm mt-4 font-medium">You will be redirected to Facebook for authorization. Know Why?</p>
                                <br></br>
                                <p className="mt-4 text-sm text-gray-600">
                                    A Brand is a collection of social media channels that are all managed through a single dashboard. You can add one of each type of channel to a Brand.Learn more.
                                </p>
                            </div>
                        }
                        {
                            whatClicked === 'x' &&
                            <div className={` border-2 border-red-500 `}>
                                {/*  TWITTER */}
                                <p className="text-sm mt-4 font-medium">Connect a X account you&apos;d like to add.</p>
                                <br></br>
                                <button className="bg-black text-white px-4 text-sm py-2 rounded-full ">Connect X</button>
                                
                                
                                <br></br>
                                <input
                                    type="checkbox"
                                    id="name"
                                    checked={isChecked}
                                    placeholder=""
                                    onChange={() => setIsChecked(!isChecked)}
                                    className="rounded  border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                                /> <label htmlFor="name" className="text-sm font-medium mt-4">Follow Zoho Social for news, updates, and social media tips.</label>
                                <br></br>
                                <br></br>
                                <p className="mt-4 text-sm text-gray-600">

                                    A Brand is a collection of social media channels that are all managed through a single dashboard. You can add one of each type of channel to a Brand. Learn more.
                                </p>
                            </div>
                        }
                        {
                            whatClicked === 'linkedin' &&
                            <div className={` border-2 border-red-500 `}>
                                {/* LINKED IN */}
                                <p className="text-sm mt-4 font-medium">Connect a LinkedIn account associated with the Profile and/or Company Page you&apos;d like to add.</p>
                                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full ">Connect Instagram</button>
                                <br></br>
                                <p className="mt-4 text-sm text-gray-600">
                                A Brand is a collection of social media channels that are all managed through a single dashboard. You can add one of each type of channel to a Brand.Learn more.
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
