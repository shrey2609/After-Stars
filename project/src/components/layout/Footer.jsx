import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Apple
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Apple size={32} className="text-red-500" /> {/* Changed apple color to red */}
              <span className="text-xl font-bold">AFTER STARS</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Connecting food donors with those in need. Join us in fighting hunger and reducing food waste in communities around the world.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-800 dark:text-gray-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-800 dark:text-gray-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-800 dark:text-gray-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400">
                  Find Food
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-primary-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  C-80B Dayal Residency,Lucknow, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-primary-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  +91 (888) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-primary-500" />
                <a 
                      href="mailto:silentkiller.grp@gmail.com" 
                     className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                    silentkiller.grp@gmail.com
                 </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Subscribe to Our Newsletter</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Stay updated with our latest news and events.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="input"
                required
              />
              <button type="submit" className="btn btn-primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
          <p className="flex items-center justify-center">
            <span>© {new Date().getFullYear()} <strong> After Stars</strong>  Made with</span>
            <Heart size={16} className="mx-1 text-accent-500" fill="currentColor" />
            <span>for a better world.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;