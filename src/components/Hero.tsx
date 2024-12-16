import React from "react";
import Hero from "../assets/hero.avif"

const SocialMediaHero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-between bg-white py-12 px-4 lg:px-24">
      {/* Left Section */}
      <div className="max-w-lg space-y-6">
        <h4 className="text-blue-500 font-semibold text-lg flex items-center">
          Built for Scalability
          <span className="ml-1 text-blue-500">✨</span>
        </h4>
        <h1 className="text-4xl font-bold text-gray-900 leading-snug">
          The only social media management tool that scales to your needs
        </h1>
        <p className="text-gray-600 leading-relaxed">
          SocialPilot offers everything you need to scale your social media
          management. From planning and bulk scheduling to analytics, AI
          assistant, and collaboration tools, all in one platform.
        </p>
        <div className="flex space-x-4 items-center">
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition">
            Start 14-day Free Trial
          </button>
          <button className="flex items-center text-blue-600 font-semibold hover:underline">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.293 9.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L18.586 13H3a1 1 0 110-2h15.586l-1.293-1.293a1 1 0 010-1.414z"></path>
            </svg>
            Watch Demo
          </button>
        </div>
        <p className="text-gray-500 text-sm">
          No CC Required | Cancel Anytime
        </p>
      </div>

      {/* Right Section */}
      <div className="relative hidden lg:block">
        <img
          src="https://themelooks.us/demo/smm24/html/preview/rtl/img/banner-img/slider-img-02.png" // Replace with your actual image URL
          alt="Happy User"
          className="w-96 h-96 object-cover"
        />
        {/* Floating Icons */}
        <div className="absolute -bottom-6 left-16 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shadow-md">
          <svg
            className="text-yellow-500 w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 11-.001 20.001A10 10 0 0112 2m0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 right-16 flex items-center">
          <div className="text-orange-400 text-2xl font-bold">★★★★★</div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaHero;
