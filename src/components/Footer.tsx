
import { Instagram, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-fashion-dark-gray text-white">
      <div className="content-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">THE FASHION WORLD</h3>
            <p className="text-gray-300 mb-6">
              Your Style, Our Passion – Explore the World of Fashion for the Modern Man
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-fashion-royal-blue transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-fashion-royal-blue transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-fashion-royal-blue transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-fashion-royal-blue transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#men" className="text-gray-300 hover:text-white transition-colors">Men's Collection</a>
              </li>
              <li>
                <a href="#women" className="text-gray-300 hover:text-white transition-colors">Women's Collection</a>
              </li>
              <li>
                <a href="#accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#men" className="text-gray-300 hover:text-white transition-colors">T-Shirts</a>
              </li>
              <li>
                <a href="#men" className="text-gray-300 hover:text-white transition-colors">Pants</a>
              </li>
              <li>
                <a href="#accessories" className="text-gray-300 hover:text-white transition-colors">Watches</a>
              </li>
              <li>
                <a href="#accessories" className="text-gray-300 hover:text-white transition-colors">Chains</a>
              </li>
              <li>
                <a href="#footwear" className="text-gray-300 hover:text-white transition-colors">Footwear</a>
              </li>
              <li>
                <a href="#lifestyle" className="text-gray-300 hover:text-white transition-colors">Lifestyle</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-fashion-royal-blue mr-3 mt-1" />
                <span className="text-gray-300">Main Road, Near Bus Stand, Amarpur, Bihar 813101</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-fashion-royal-blue mr-3" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-fashion-royal-blue mr-3" />
                <span className="text-gray-300">contact@thefashionworld.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="content-container flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} The Fashion World. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
