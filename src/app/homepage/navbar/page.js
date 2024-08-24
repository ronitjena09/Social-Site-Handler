import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import { IoIosArrowDown } from "react-icons/io";

const NavItem = {
  label: "",
  link: null,
  children: null,
};
const navItems = [
  {
    label: "Features",
    link: "#",
    children: [
      {
        label: "Publishing",
        link: "#",
      },
      {
        label: "Scheduling",
        link: "#",
      },
      {
        label: "Monitoring",
        link: "#",
      },
      {
        label: "Analysis",
        link: "#",
      },
      {
        label: "Collaboration",
        link: "#",
      },
      {
        label: "Inbox",
        link: "#",
      },
      {
        label: "Integration",
        link: "#",
      },
      {
        label: "Mobile",
        link: "#",
      },
      {
        label: "zShare Browser Extension",
        link: "#",
      },
      {
        label: "All Features",
        link: "#",
      },
    ],
  },
];
const Navbar = () => {
  return (
    <>
      <div className="bg-misty-moss">
        <div className=" mx-auto flex  w-full max-w-7xl justify-between px-4 py-5 text-sm md:px-16 sm:px-14">
          <section className="flex items-center gap-10">
            <Link href="/src/components/homepage/navbar">
              <Image src={logo} alt="logo" style={{ width: "110px" }} />
            </Link>
          </section>

          <div className="navbar-right md:flex items-center gap-2 transition-all">
            <Link href={""} className="relative group px-2 py-3 transition-all">
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
                    href={"/homepage/navbar/features/scheduling"}
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
                    href={"/homepage/navbar/features/analytics"}
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
            <Link href={""} className="relative group px-2 py-3 transition-all">
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
            <Link href={""} className="relative group px-2 py-3 transition-all">
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
            <Link href={""} className="relative group px-2 py-3 transition-all">
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
            <Link
              href="/loginpage/signup"
              className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
