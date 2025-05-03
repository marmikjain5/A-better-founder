import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Briefcase className="mr-2 h-6 w-6" />
              <h3 className="text-xl font-bold">A Better Founder</h3>
            </div>
            <p className="text-neutral-200 mb-4">
              Empowering entrepreneurs with industry-specific expertise to build better businesses for the nation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/banking" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  Banking
                </Link>
              </li>
              <li>
                <Link to="/industrial" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  Industrial
                </Link>
              </li>
              <li>
                <Link to="/fmcg" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  FMCG
                </Link>
              </li>
              <li>
                <Link to="/food" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  Food
                </Link>
              </li>
              <li>
                <Link to="/clothing" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  Clothing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-200">
                  312,Prestige misty waters<br />
                  Bengaluru(56064),India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-accent-400 flex-shrink-0" />
                <a href="tel:+14155555555" className="text-neutral-200 hover:text-accent-400 transition-colors">
                  +91 8955015524
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-accent-400 flex-shrink-0" />
                <a href="mailto:info@abetterfounder.com" className="text-neutral-200 hover:text-accent-400 transition-colors">
               marmikjain53@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-700 text-center text-neutral-300 text-sm">
          <p>© {currentYear} A Better Founder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;