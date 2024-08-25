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
import Navbar from "../../page";

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

      <div className="gradient-hero min-h-screen bg-gradient-to-b from-blue-200 to-gray-100">
        {/* Top Section */}
        <Navbar />
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
                className="bg-red-500 text-sm text-white px-4 py-2 font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
