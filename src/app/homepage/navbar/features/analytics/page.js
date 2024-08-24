"use client";
import Head from "next/head";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import logo from "/public/images/logo.svg";
import Image from "next/image";
import banner from "/public/images/analytics-banner-screen.png";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Balancer from "react-wrap-balancer";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Analytics() {
  // Data for Organic vs Paid Likes
  const organicPaidData = {
    labels: ["Organic", "Paid"],
    datasets: [
      {
        data: [86.34, 13.66],
        backgroundColor: ["#0047AB", "#6495ED"], // Green for Organic, Yellow for Paid
        hoverBackgroundColor: ["#00008B", "#6F8FAF"],
      },
    ],
  };

  // Data for Engagement by Post Type
  const engagementData = {
    labels: ["Image", "Text", "Video", "Link"],
    datasets: [
      {
        data: [62.73, 28.35, 4.75, 4.17],
        backgroundColor: ["#0047AB", "#6495ED", "#A7C7E7", "#4682B4"], // Colors for each post type
        hoverBackgroundColor: ["#00008B", "#6F8FAF", "#B6D0E2", "#87CEEB"],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Head>{/* Meta tags, etc. */}</Head>

      <div className="gradient-hero min-h-screen bg-gradient-to-b from-gray-100 to-blue-200">
        {/* Top Section */}
        <div className="container mx-auto text-center text-gray py-5 flex w-full max-w-7xl justify-between px-4 text-sm md:px-10 sm:px-14">
          {" "}
          {/* NavBar */}
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
                <div className="absolute right-1 top-10 hidden w-auto flex-col items-center gap-0 rounded-lg bg-white py-1 shadow-md transition-all group-hover:flex">
                  <Link
                    href={"/homepage/navbar/features/publishing"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Publishing</span>
                  </Link>
                  <Link
                    href={"/homepage/navbar/features/scheduling"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Scheduling</span>
                  </Link>
                  <Link
                    href={"/homepage/navbar/features/monitoring"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Monitoring</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Analysis</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">
                      Collaboration
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Inbox</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Integration</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Mobile</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">
                      zShare Browser Extension
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">All Features</span>
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
                <div className="absolute right-1 top-10 hidden w-auto flex-col items-center gap-0 rounded-lg bg-white py-1 shadow-md transition-all group-hover:flex">
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Agencies</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Remote Teams</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Individuals</span>
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
                <div className="absolute right-1 top-10 hidden w-auto flex-col items-center gap-0 rounded-lg bg-white py-1 shadow-md transition-all group-hover:flex">
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Facebook</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">
                      X(Formerly Twitter)
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">LinkedIn</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Instagram</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">
                      Google Business Profile
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">YouTube</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Pinterest</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">TikTok</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Threads</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">zLink.bio</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">Blog</span>
                  </Link>
                  <Link
                    href={"#"}
                    className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                  >
                    <span className="whitespace-nowrap pl-3">
                      Custom RSS Feeds
                    </span>
                  </Link>
                </div>
              </p>
            </Link>
            <Link
              href={"/homepage/navbar/resources"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 group-hover:text-black">
                <span>Resources</span>
              </p>
            </Link>
            <Link
              href={"/homepage/navbar/blog"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 group-hover:text-black">
                <span>Blog</span>
              </p>
            </Link>
            <Link
              href={"/homepage/navbar/contact"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 group-hover:text-black">
                <span>Contact</span>
              </p>
            </Link>
          </div>
        </div>
        {/* End of NavBar */}

        {/* Main Content */}
        <div className="container mx-auto mt-20 md:flex items-center justify-between px-4 md:px-10">
          {/* Left Side */}
          <div className="text-left md:w-1/2">
            <Balancer>
              <h1 className="text-4 mt-8 font-bold md:text-5xl">
                A social media analytics tool that measures what matters to your
                brand
              </h1>
              <h4 className="text-lg md:text:2xl pt-2 pb-4">
                Analyze the impact of your social media strategy. Create
                insightful reports that help you understand your audience and
                track social media performance.
              </h4>

              <Link
                href="/loginpage/signup"
                className="bg-red-500 text-white px-4 py-2 font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                TRY FOR FREE
              </Link>
            </Balancer>
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 flex justify-center">
            <div className="mt-10 relative">
              <Image
                src={banner}
                alt="Social Media Analytics Dashboard"
                width={800}
                height={400}
                className="rounded-lg"
              />
              {/* Organic vs Paid Likes */}
              <div className="absolute top-4 left-4 bg-white shadow-lg p-4 rounded-lg">
                <h3 className="font-bold text-sm ">ORGANIC VS PAID LIKES</h3>
                <Pie data={organicPaidData} width={100} height={100} />
              </div>
              {/* Engagement by Post Type */}
              <div className="absolute bottom-4 right-4 bg-white shadow-lg p-4 rounded-lg">
                <h3 className="font-bold text-sm">ENGAGEMENT BY POST TYPE</h3>
                <div className="flex items-center">
                  <div className="h-20 w-20">
                    {/* A simple pie chart representation using CSS */}
                    <Pie data={engagementData} width={100} height={100} />
                  </div>
                  <div className="ml-4 text-sm">
                    <p>Image - 62.73%</p>
                    <p>Text - 28.35%</p>
                    <p>Video - 4.75%</p>
                    <p>Link - 4.17%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
