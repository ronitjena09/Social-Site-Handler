import Link from "next/link";
import Navbar from "../../page";
import Image from "next/image";
import Facebook from "/public/images/facebook.svg";
import Google from "/public/images/google.svg";
import Linkedin from "/public/images/linkedin.svg";
import Youtube from "/public/images/youtube.svg";
import Twitter from "/public/images/twitter.svg";
import Instagram from "/public/images/instagram.svg";
import Balancer from "react-wrap-balancer";

export default function Inbox() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Navbar should be above everything */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern"></div>

      <div className="relative z-10 flex justify-center items-center px-6 py-12">
        <div className="max-w-4xl pt-6 mx-auto text-center">
            <Balancer>
          <h1 className="text-7xl font-bold mb-4">
            Manage all your conversations in one place with{" "}
            <span className="text-blue-600">Inbox</span>
          </h1>
          <p className="text-gray-600 font-semibold text-lg mb-8">
            Manage, organize, and assign cross-channel communication in a single
            place and respond to your audience quickly.
          </p>
          <Link
            href="/loginpage/signup"
            className="bg-red-500 text-sm text-white px-4 py-2 font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
            GET STARTED FOR FREE
          </Link>
              </Balancer>
        </div>
      </div>

      <div className="relative z-10">
        {/* Emoji Cards */}
        <div className="absolute top-16 left-16">
          <div className="bg-white p-4 rounded-full shadow-lg flex items-center">
            <span role="img" aria-label="Heart" className="mr-2 text-2xl">
              ❤️
            </span>
            <span className="text-sm font-bold">264</span>
          </div>
        </div>

        <div className="absolute left-20 bottom-28">
          <div className="bg-white px-4 py-2 rounded-full transform rotate-[40deg] hover:rotate-0 transition duration-300 shadow-lg flex items-center">
            <span role="img" aria-label="Emoji" className="text-2xl">
              😁
            </span>
          </div>
        </div>

        <div className="absolute right-20 top-16">
          <div className="bg-white px-4 py-2 rounded-full transform rotate-[-10deg] hover:rotate-0 transition duration-300 shadow-lg flex items-center">
            <span role="img" aria-label="Question" className="text-2xl">
              🤔
            </span>
            <span className="text-sm ml-2">Where&apos;s the offer link?</span>
          </div>
        </div>

        <div className="absolute right-40 bottom-32">
          <div className="bg-white p-4 rounded-full transform rotate-[-45deg] hover:rotate-0 transition duration-300 shadow-lg flex items-center">
            <span role="img" aria-label="Hash" className="mr-2 text-2xl">
              🔔
            </span>
          </div>
        </div>

        {/* ALL IN ONE PLACE Section */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white px-8 py-4 rounded-lg shadow-lg inline-block">
            <p className="mb-2 text-sm font-bold text-center pb-2 ">
              ALL IN ONE PLACE
            </p>
            <div className="flex justify-center space-x-16 rounded-full">
              <Image
                src={Facebook}
                alt="Facebook"
                width={30}
                height={30}
                className="opacity-60"
                />
              <Image
                src={Twitter}
                alt="Twitter"
                width={30}
                height={30}
                className="opacity-60"
                />
              <Image
                src={Youtube}
                alt="YouTube"
                width={30}
                height={30}
                className="opacity-60"
              />
              <Image
                src={Instagram}
                alt="Instagram"
                width={30}
                height={30}
                className="opacity-60"
                />
              <Image
                src={Google}
                alt="Google"
                width={30}
                height={30}
                className="opacity-60"
                />
              <Image
                src={Linkedin}
                alt="LinkedIn"
                width={30}
                height={30}
                className="opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
