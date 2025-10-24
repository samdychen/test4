
import React from 'react';
import { FacebookIcon } from './icons/FacebookIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-green text-pale-green">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Terra</h3>
            <p className="max-w-md">Your gateway to exploring the world's natural wonders responsibly and authentically.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li className="mb-2"><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><FacebookIcon /></a>
              <a href="#" className="hover:text-white transition-colors"><TwitterIcon /></a>
              <a href="#" className="hover:text-white transition-colors"><InstagramIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-pine-green pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Terra. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
