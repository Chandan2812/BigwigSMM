import React from "react";

const SocialMediaHero: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-blue-50 py-12 px-4 lg:px-24 mt-16">
      {/* Left Section */}
      <div className="max-w-lg space-y-6 text-center lg:text-left">
        <h4 className="text-blue-500 font-semibold text-lg flex items-center justify-center lg:justify-start">
          Built for Scalability
          <span className="ml-1 text-blue-500">✨</span>
        </h4>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          The only social media management tool that scales to your needs
        </h1>
        <p className="text-gray-600 leading-relaxed">
          SocialPilot offers everything you need to scale your social media
          management. From planning and bulk scheduling to analytics, AI
          assistant, and collaboration tools, all in one platform.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center lg:justify-start">
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition">
            Start 14-day Free Trial
          </button>
        </div>
        <p className="text-gray-500 text-sm">
          No CC Required | Cancel Anytime
        </p>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
        <img
          src="https://themelooks.us/demo/smm24/html/preview/rtl/img/banner-img/slider-img-02.png" // Replace with your actual image URL
          alt="Happy User"
          className="w-60 mx-auto md:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default SocialMediaHero;
