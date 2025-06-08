import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-prcs-black-100 dark:bg-prcs-black-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-prcs-red-600" fill="currentColor" />
              <span className="text-lg font-bold text-prcs-black-900 dark:text-white">AI-D</span>
            </Link>
            <p className="mt-4 text-sm text-prcs-black-600 dark:text-prcs-black-300">
              An AI-powered first aid training platform developed for the Palestinian Red Crescent Society.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-prcs-black-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {['Home', 'About', 'Start', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-prcs-black-600 hover:text-prcs-red-600 dark:text-prcs-black-300 dark:hover:text-prcs-red-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-prcs-black-900 dark:text-white">
              Learning Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {['CPR', 'Burns', 'Fractures', 'Bleeding', 'Choking'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/topics/${item.toLowerCase()}`}
                    className="text-sm text-prcs-black-600 hover:text-prcs-red-600 dark:text-prcs-black-300 dark:hover:text-prcs-red-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-prcs-black-900 dark:text-white">
              Contact PRCS
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Phone className="mr-2 h-4 w-4 text-prcs-red-600" />
                <span className="text-sm text-prcs-black-600 dark:text-prcs-black-300">+970 599 989 846</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-4 w-4 text-prcs-red-600" />
                <span className="text-sm text-prcs-black-600 dark:text-prcs-black-300">info@palestinercs.org</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-prcs-red-600" />
                <span className="text-sm text-prcs-black-600 dark:text-prcs-black-300">
                  Nablus, Palestine
                </span>
              </li>
              <li className="flex items-start">
                <Globe className="mr-2 h-4 w-4 text-prcs-red-600" />
                <a 
                  href="https://www.palestinercs.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-prcs-black-600 hover:text-prcs-red-600 dark:text-prcs-black-300 dark:hover:text-prcs-red-500 flex items-center"
                >
                  palestinercs.org
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-prcs-black-200 pt-8 dark:border-prcs-black-700">
          <p className="text-center text-xs text-prcs-black-500 dark:text-prcs-black-400">
            &copy; {new Date().getFullYear()} AI-D for Palestinian Red Crescent Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};