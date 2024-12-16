import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Social Media Icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Branding Section */}
          <div className="space-y-4">
          <span className="text-red-500 text-2xl font-bold">B</span>
        <span className="text-blue-500 text-2xl font-bold">i</span>
        <span className="text-yellow-500 text-2xl font-bold">g</span>
        <span className="text-green-500 text-2xl font-bold">w</span>
        <span className="text-purple-500 text-2xl font-bold">i</span>
        <span className="text-pink-500 text-2xl font-bold">g</span>
        <span className="text-teal-500 text-2xl font-bold">SMM</span>
            <p className="text-lg text-gray-400">
              The best place for social media management tools and insights. Boost your online presence effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@yourwebsite.com</li>
              <li className="text-gray-400">1234 Your Street, City, Country</li>
              <li className="text-gray-400">+1 234 567 890</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest news and offers. Subscribe to our newsletter now!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md text-gray-900"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <FontAwesomeIcon icon={faFacebook} className="h-8 w-8 text-blue-600 hover:text-blue-700" />
          <FontAwesomeIcon icon={faInstagram} className="h-8 w-8 text-pink-600 hover:text-pink-700" />
          <FontAwesomeIcon icon={faTwitter} className="h-8 w-8 text-blue-400 hover:text-blue-500" />
          <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 text-blue-700 hover:text-blue-800" />
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2024 Bigwig Media. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
