import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLink, faCalendar, faChartBar } from '@fortawesome/free-solid-svg-icons';  // Import light icons

function HowItWorks() {
  const steps = [
    {
      title: "Sign Up",
      description: "Create an account and log in to your dashboard.",
      icon: <FontAwesomeIcon icon={faUser} className="mx-auto mb-4 h-16 w-16 text-blue-600" />,
    },
    {
      title: "Connect Social Accounts",
      description: "Link your social media accounts like Facebook, Instagram, Twitter, and more.",
      icon: <FontAwesomeIcon icon={faLink} className="mx-auto mb-4 h-16 w-16 text-blue-600" />,
    },
    {
      title: "Plan & Post Content",
      description: "Create and schedule posts with ease using our content calendar.",
      icon: <FontAwesomeIcon icon={faCalendar} className="mx-auto mb-4 h-16 w-16 text-blue-600" />,
    },
    {
      title: "Analyze Performance",
      description: "Get real-time analytics and insights to track the performance of your posts.",
      icon: <FontAwesomeIcon icon={faChartBar} className="mx-auto mb-4 h-16 w-16 text-blue-600" />,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center"
            >
              {step.icon}
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
