import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1f1f2b] text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Event<span className="text-[#5ac8fa]">Nexa</span></h3>
          <p className="text-sm text-gray-400">
            Empowering events with technology. Organize, scale, and engage like never before.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Features</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">FAQ</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect with Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-indigo-600 hover:bg-indigo-500 rounded-full transition"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-indigo-600 hover:bg-indigo-500 rounded-full transition"><FaTwitter /></a>
            <a href="#" className="p-2 bg-indigo-600 hover:bg-indigo-500 rounded-full transition"><FaInstagram /></a>
            <a href="#" className="p-2 bg-indigo-600 hover:bg-indigo-500 rounded-full transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} EventNexa. All rights reserved.
      </div>
    </footer>
  );
}
