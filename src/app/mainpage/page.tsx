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
    const [whatClicked, setWhatClicked] = useState('');
    console.log('xxxxxxxxxxxxxxxxxxx', whatClicked)
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

        <main className="h-screen justify-center border-4 border-red-700  bg-black opacity-[85%]" >
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
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">Connect Facebook</button>
                                <p className="mt-4 text-gray-600">
                                    A xxxxxxxxxxxxxxxxxx media channels that are all managed through a single dashboard. You can add one of each type of channel to a Brand.
                                </p>
                            </div>
                        }
                        {
                            whatClicked === 'instagram' && <div className={` border-2 border-red-500 `}>
                                {/* INSTAGRAM DIV */}
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">Connect Facebook</button>
                                <p className="mt-4 text-gray-600">
                                    A Bryyyyyyyyyyyyys that are all managed through a single dashboard. You can add one of each type of channel to a Brand.
                                </p>
                            </div>
                        }
                        {
                            whatClicked === 'x' &&
                            <div className={` border-2 border-red-500 `}>
                                {/* FACEBOOK TWITTER */}
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">Connect Facebook</button>
                                <p className="mt-4 text-gray-600">
                                    A Brand isjjjjjjjjjjjjjjjjjjjjjjjjjjjjthat are all managed through a single dashboard. You can add one of each type of channel to a Brand.
                                </p>
                            </div>
                        }
                        {
                            whatClicked === 'linkedin' &&
                            <div className={` border-2 border-red-500 `}>
                                {/* LINKED IN */}
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">Connect Facebook</button>
                                <p className="mt-4 text-gray-600">
                                    ttttttttttttttttttttttttttre all managed through a single dashboard. You can add one of each type of channel to a Brand.
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
