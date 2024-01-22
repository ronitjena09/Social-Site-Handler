
import Head from 'next/head';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import logo from "/public/images/logo.svg";

import Image from "next/image";

export default function Publishing() {
  return (
    <div className="min-h-screen">
      <Head>
        {/* Meta tags, etc. */}
      </Head>

      <div className="gradient-hero min-h-screen bg-gradient-to-b from-indigo-100 to-purple-200 ">
          {/* Top Purple Section */}
        <div className="container mx-auto text-center text-gray py-5  flex  w-full max-w-7xl justify-between px-4  text-sm md:px-10 sm:px-14"> {/* NavBar */}
        <section className="flex items-center gap-10">
            <Link href="/src/components/homepage/navbar">
              <Image src={logo} alt="logo" style={{ width: "110px" }} />
            </Link>
          </section>
           
             <div className="navbar-right md:flex items-center gap-2 transition-all">
            <Link
              href={"/homepage/navbar/features"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 group-hover:text-black">
                <span>Features</span>
                <IoIosArrowDown className=" transition-all group-hover:rotate-180" />
                <div className="absolute   right-1   top-10 hidden w-auto  flex-col items-center gap-0   rounded-lg bg-white py-1 shadow-md  transition-all group-hover:flex ">
                  <Link
                    href={"/homepage/navbar/features/publishing"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Publishing
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Scheduling
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Monitoring
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Analysis</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Collaboration
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Inbox</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Integration
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Mobile</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      zShare Browser Extension
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      All Features
                    </span>
                  </Link>
                </div>
              </p>
            </Link>
            <Link
              href={"/homepage/navbar/pricing"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 group-hover:text-black">
                <span>Pricing</span>
              </p>
            </Link>
            <Link
              href={"/homepage/navbar/solutions"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 group-hover:text-black">
                <span>Solutions</span>
                <IoIosArrowDown className=" transition-all group-hover:rotate-180" />
                <div className="absolute   right-1   top-10 hidden w-auto  flex-col items-center gap-0   rounded-lg bg-white py-1 shadow-md  transition-all group-hover:flex ">
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Agencies</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Remote Teams
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Individuals
                    </span>
                  </Link>
                </div>
              </p>
            </Link>
            <Link
              href={"/homepage/navbar/channels"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 group-hover:text-black">
                <span>Channels</span>
                <IoIosArrowDown className=" transition-all group-hover:rotate-180" />
                <div className="absolute   right-1   top-10 hidden w-auto  flex-col items-center gap-0   rounded-lg bg-white py-1 shadow-md  transition-all group-hover:flex ">
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Facebook</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      X(Formerly Twitter)
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Linkedin</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Instagram
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Google Business Profile
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Youtube</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Pinterest
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> TikTok</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Mastodon</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-blue"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      All Channels
                    </span>
                  </Link>
                </div>
              </p>
            </Link>
            <Link
              href={"/homepage/navbar/nav_social"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 group-hover:text-black">
                <span>Navigating Social</span>
              </p>
            </Link>
            <Link
              href={"/homepage/navbar/resources"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2  group-hover:text-black">
                <span>Resources</span>
                <IoIosArrowDown className=" transition-all group-hover:rotate-180" />
                <div className="absolute   right-1   top-10 hidden w-auto  flex-col items-center gap-0   rounded-lg bg-white py-1 shadow-md  transition-all group-hover:flex ">
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      User Guide
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Glossary</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Videos</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Webinars</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> Blogs</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Social Journal
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Community
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      Whats New
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap   pl-3 "> FAQs</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-blue"
                  >
                    <span className="whitespace-nowrap   pl-3 ">
                      {" "}
                      All Resources
                    </span>
                  </Link>
                </div>
              </p>
            </Link>
        </div>
      </div>
      <header className=" ">
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-center py-12 px-80 mb-8">
            <h1 className="text-6xl font-bold mb-4 flex flex-col gap-6 pt-8 text-center ">A robust scheduling tool to manage social media posts easily and plan better</h1>
            <p className="text-lg text-black-600">The only scheduling tool you'll ever need to manage your social media marketing. Ease your marketing journey with power-packed features to help you schedule your posts in bulk, know the best time to post, repeat posts, and more.</p>
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
