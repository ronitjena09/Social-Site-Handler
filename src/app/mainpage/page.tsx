"use client"
import axios from "axios"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Mainpage() {

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
        <div>
            Hello, I am in Home
            <button onClick={logoutHandler} className='btn bg-red-500 rounded-lg flex width-full text-align-center px-2 py-1'>Sign Out</button>
        </div>
    )
}
