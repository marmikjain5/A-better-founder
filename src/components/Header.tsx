import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navItems = [
    { name: 'Banking', path: '/banking' },
    { name: 'Industrial', path: '/industrial' },
    { name: 'FMCG', path: '/fmcg' },
    { name: 'Food', path: '/food' },
    { name: 'Clothing', path: '/clothing' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center text-primary-800 font-bold text-2xl"
          >
            <Briefcase className="mr-2 h-7 w-7" />
            <span>A Better Founder</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `transition hover:text-accent-500 ${isActive ? 'nav-active' : 'text-neutral-800'}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <NavLink 
              to="/contact" 
              className="btn-primary"
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-800 hover:text-primary-800 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `block py-3 px-4 rounded-md transition ${
                  isActive ? 'text-accent-500 bg-neutral-100 font-medium' : 'text-neutral-800 hover:bg-neutral-50'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink 
            to="/contact" 
            className="block w-full py-3 px-4 mt-2 text-center bg-primary-800 text-white rounded-md font-medium hover:bg-primary-900"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;