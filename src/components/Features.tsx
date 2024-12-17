import { motion } from "framer-motion";

function Features() {
  const featureData = [
    {
      title: "Streamline social publishing across networks and locations",
      description:
        "Easily scale your social media efforts with bulk publishing tools that customize posts for each channel and location. Utilize personalization tokens to automatically tailor content for every location, ensuring each post is both personalized and locally relevant.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v4/img-bulk-publishing.png",
    },
    {
      title: "Generate engaging social content with AI",
      description:
        "Effortlessly create engaging posts with Birdeye Social's AI powered content generator. Tailor content specifically to your industry and customers, and receive contextually relevant image recommendations based on your prompts to bring your posts to life.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v3/img-social-publishing.png",
    },
    {
      title: "Manage your social calendar",
      description:
        "Schedule multiple posts across accounts and networks simultaneously and track them all through an intuitive visual calendar — filtering by date, status, channel, location, and region.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v4/img-social-scheduling.png",
    },
    {
      title: "Time your posts perfectly for maximum impact",
      description:
        "Get AI powered suggestions on the best time to publish your social content. Get multiple suggestions by channel and the desired goal such as maximizing reach or engagement. View post performance across days and time slots to identify performance trends and optimize your content performance.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v3/img-increase-engagement.png",
    },
    {
      title: "Build a shared library of social posts",
      description:
        "Build a library of pre-approved posts that can be quickly published by location managers. Repurpose proven posts to boost engagement and streamline your publishing process.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v4/img-post-library.png",
    },
    {
      title: "Streamline approvals with automated workflows",
      description:
        "Seamlessly collaborate, review, and approve content in real-time, ensuring a flawless brand presence. Empower locations to create their own posts and route them to corporate for approval to ensure on-brand and consistent content across locations.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v3/img-approval-workflows-v1.png",
    },
    {
      title: "Monitor social engagement",
      description:
        "Engage your followers in real time with instant notifications — answering questions, responding to comments, and driving the conversation around your brand from a centralized inbox.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v4/img-social-engagement.png",
    },
    {
      title: "Track performance by location",
      description:
        "Measure top performing content, social reach, engagement, and audience growth by location or region — uncovering insights and trends you can use to optimize social strategy.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/social/track-performance.png", // Keep the same image for now
    },
  ];

  const variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="features" className="py-16 px-8 sm:px-12">
      {featureData.map((feature, index) => (
        <div
          key={index}
          className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-${
            index === 0 ? 0 : 16
          }`}
        >
          {/* Text Section */}
          <motion.div
            className={`col-span-1 ${
              index % 2 === 0 ? "" : "md:col-start-3 order-1 md:order-2"
            }`}
            custom={index % 2 === 0 ? "left" : "right"}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight transition-colors duration-300">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">{feature.description}</p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className={`col-span-2 flex justify-center ${
              index % 2 === 0 ? "" : "md:col-start-1 order-2 md:order-1"
            }`}
            custom={index % 2 === 0 ? "right" : "left"}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-full object-cover rounded-lg transition-transform duration-300"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Features;
