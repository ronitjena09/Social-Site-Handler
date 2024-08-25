import Image from 'next/image';
import mathew_william from '/public/images/collaboration_social-feature-banner-2.png';
import admin_set from '/public/images/collaboration_social-feature-banner-4.png';
import charles_activity from '/public/images/collaboration_social-feature.png';
import Navbar from "../../page";
import Link from 'next/link';

export default function Collaboration() {
    return (
        <div className="bg-[#FFF3E0] min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                    <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                        A social media management tool with smart collaboration features.
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-700 mb-8">
                        Work together on all things social. Discuss popular posts, share custom reports, or plan a campaign together. Make decisions faster and save time when you collaborate with your team from within Zoho Social.
                    </p>
                    <Link
                    href="/loginpage/signup"
                    className="bg-red-500 text-sm text-white px-4 py-2 font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    TRY FOR FREE
                  </Link>
                </div>

                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-[500px] lg:h-auto flex justify-center items-start lg:items-center">
                    {/* Charles's Activity */}
                    <div className="absolute top-0 right-10 lg:right-[30%] transform lg:translate-y-0 translate-y-[10%] lg:scale-95 scale-75 shadow-lg">
                        <Image src={charles_activity} alt="Charles's Activity" className="rounded-xl" />
                    </div>

                    {/* Matthew William */}
                    <div className="absolute top-[35%] right-0 lg:right-[15%] transform lg:translate-y-0 translate-y-[10%] lg:scale-100 scale-90 shadow-lg">
                        <Image src={mathew_william} alt="Matthew William" className="rounded-xl" />
                    </div>

                    {/* Admin Set */}
                    <div className="absolute top-[70%] right-[25%] lg:right-[5%] transform lg:translate-y-0 translate-y-[10%] lg:scale-90 scale-85 shadow-lg">
                        <Image src={admin_set} alt="Admin Set" className="rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
