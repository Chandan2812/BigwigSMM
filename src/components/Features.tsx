
const FeatureSection = () => {
  const features = [
    {
      title: "Advanced Analytics",
      description: "Gain insights into audience behavior and post performance.",
      icon: "📊",
    },
    {
      title: "Content Calendar",
      description: "Plan and schedule posts in advance for consistent engagement.",
      icon: "📅",
    },
    {
      title: "Multi-Platform Management",
      description: "Manage all your social media accounts from one dashboard.",
      icon: "🌐",
    },
    {
      title: "Team Collaboration",
      description: "Collaborate with your team in real-time for efficient content creation.",
      icon: "👥",
    },
    {
      title: "Automated Posting",
      description: "Set up automated posting times to optimize your engagement.",
      icon: "⏰",
    },
    {
      title: "Hashtag Suggestions",
      description: "Get smart hashtag suggestions to improve the reach of your posts.",
      icon: "🔍",
    },
    {
      title: "Social Listening",
      description: "Track mentions and keywords to stay on top of your brand's conversation.",
      icon: "🦻",
    },
    {
      title: "Customizable Reports",
      description: "Generate detailed reports tailored to your needs and insights.",
      icon: "📄",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Key Features of Our Platform
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
