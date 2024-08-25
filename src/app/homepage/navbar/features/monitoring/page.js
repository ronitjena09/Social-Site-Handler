import Image from 'next/image';
import Navbar from "../../page";
import instagram from '/public/images/travel-blog-instagram.webp';
import airbnb from '/public/images/travel-blog-airbnb.webp';
import voyager2 from '/public/images/travel-blog-voyager2.webp';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export default function Monitoring() {
  return (
    <div className="bg-[#E9EDCC] h-full w-full">
      <Navbar />
      <div className="container mx-auto py-16 px-4 md:px-6 lg:px-8 xl:px-12 flex">
        <div className="text-center max-w-2xl mx-auto">
            <Balancer>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-black mb-4 pt-8">
            <div className='font-bold'>Social media monitoring software</div> for businesses and agencies
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 pt-8">
            Monitor core keywords, brand hashtags, product reviews, and more. Discover new leads and listen to what people are saying about the brands you manage across your social channels.
          </p>
          <Link
                    href="/loginpage/signup"
                    className="bg-red-500 text-sm text-white px-4 py-2 font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    GET STARTED FOR FREE
                  </Link>
                  </Balancer>
          <div>
            <button className="text-black text-sm md:text-lg font-medium pt-8">
              <span className="inline-block transform -translate-y-1">▶</span> Watch video
            </button>
          </div>
        </div>
        <div className=" justify-center mt-12 space-x-2 md:space-x-4 pr-8">
          <div className="relative w-40 h-64 sm:w-48 sm:h-72 md:w-60 md:h-80 lg:w-60 lg:h-96 transform rotate-[10deg] hover:rotate-0 transition duration-300">
            <Image src={airbnb} alt="Airbnb Post" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
          </div>
          <div className="relative w-40 h-64 sm:w-48 sm:h-72 md:w-60 md:h-80 lg:w-60 lg:h-96 transform -rotate-[10deg] hover:rotate-0 transition duration-300">
            <Image src={instagram} alt="Instagram Post" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="justify-center mt-12 space-x-2 md:space-x-4 pr-8">
          <div className="relative w-40 h-64 sm:w-48 sm:h-72 md:w-60 md:h-80 lg:w-60 lg:h-96 transform rotate-[10deg] hover:rotate-0 transition duration-300">
            <Image src={voyager2} alt="Voyager Post" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
          </div>
          <div className="relative w-40 h-64 sm:w-48 sm:h-72 md:w-60 md:h-80 lg:w-60 lg:h-96 transform -rotate-[10deg] hover:rotate-0 transition duration-300">
            <Image src={instagram} alt="Instagram Post" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
