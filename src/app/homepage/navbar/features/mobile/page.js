import Image from 'next/image';
import Navbar from "../../page";
import mobileImage from '/public/images/zoho-mobile.png';
import { FaApple, FaGooglePlay, FaImages, FaStickyNote } from 'react-icons/fa';
import Balancer from 'react-wrap-balancer';

export default function Mobile() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-10 px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 md:w-1/2 text-center"> {/* Centering the contents */}
          <Balancer>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              On the move?
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take Zoho Social with you
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Capture moments, create drafts, and engage your audience with the Zoho Social mobile app for iOS and Android.
            </p>
            <div className="flex justify-center space-x-4"> {/* Centering the buttons */}
              <a href="https://itunes.apple.com/app/apple-store/id906377559?pt=423641&mt=8" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
              <FaApple className="mr-2" />
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.zoho.zohosocial" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                <FaGooglePlay className="mr-2" />
                Google Play
              </a>
            </div>
          </Balancer>
        </div>
        <div className="flex-1 md:w-1/2 mt-12 md:mt-0 md:ml-12 flex justify-center relative">
          <Image src={mobileImage} alt="Mobile App" width={300} height={300} className="max-w-full h-auto" />
          <div className="absolute top-20 left-12 text-green-400 text-3xl animate-pulse border-2 border-green-400 rounded-full p-2">
            <FaImages />
          </div>
          <div className="absolute bottom-10 right-12 text-orange-400 text-3xl animate-pulse border-2 border-orange-400 rounded-full p-2">
            <FaStickyNote />
            </div>
        </div>
      </div>
    </div>
  );
}
