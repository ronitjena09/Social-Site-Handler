import Head from "next/head";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import logo from "/public/images/logo.svg";

import Image from "next/image";
import Navbar from "../../page";

export default function Publishing() {
  return (
    <div className="min-h-screen">
      <Head>{/* Meta tags, etc. */}</Head>

      <div className="gradient-hero min-h-screen bg-gradient-to-b from-indigo-100 to-purple-200 ">
        {/* Top Purple Section */}
        <Navbar />
        <header className=" ">
          <div className="container mx-auto flex flex-col items-center">
            <div className="text-center py-12 px-80 mb-8">
              <h1 className="text-6xl font-bold mb-4 flex flex-col gap-6 pt-8 text-center ">
                A robust scheduling tool to manage social media posts easily and
                plan better
              </h1>
              <p className="text-lg text-black-600">
                The only scheduling tool you&apos;ll ever need to manage your
                social media marketing. Ease your marketing journey with
                power-packed features to help you schedule your posts in bulk,
                know the best time to post, repeat posts, and more.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/loginpage/signup"
                className="bg-red-500 text-white px-4 py-2 font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                SIGN UP FOR FREE
              </Link>
            </div>
          </div>
        </header>

        <div className="white-content  py-12 px-6">
          <div className="container mx-auto flex flex-col items-center">
            {/* Bottom section content (text, grids, etc.) */}
          </div>
        </div>
      </div>
    </div>
  );
}
