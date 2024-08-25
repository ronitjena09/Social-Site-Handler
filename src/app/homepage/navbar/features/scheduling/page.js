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
            <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8 flex items-center">
                {/* Text Section */}
                <div className="w-full lg:w-1/2">
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
                <div className="relative w-full lg:w-1/2 h-full flex justify-center items-center">
                    <div className="absolute top-0 left-0 transform shadow-lg" style={{ width: '130px', height: '180px' }}>
                        <Image src={charles_activity} alt="Charles's Activity" className="rounded-xl" layout="fixed" width={130} height={180} />
                    </div>

                    <div className="absolute top-[25%] right-[10%] transform shadow-lg" style={{ width: '130px', height: '180px' }}>
                        <Image src={mathew_william} alt="Matthew William" className="rounded-xl" layout="fixed" width={130} height={180} />
                    </div>

                    <div className="absolute top-[60%] left-[15%] transform shadow-lg" style={{ width: '130px', height: '180px' }}>
                        <Image src={admin_set} alt="Admin Set" className="rounded-xl" layout="fixed" width={130} height={180} />
                    </div>
                </div>
            </div>
        </div>
    )
}
