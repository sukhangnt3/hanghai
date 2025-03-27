
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Ship, Menu, X } from "lucide-react";
import ConsultationForm from './ConsultationForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`${isScrolled ? 'bg-maritime-navy/95 py-2 backdrop-blur-md' : 'bg-maritime-navy/85 py-4'} fixed w-full top-0 z-50 shadow-lg backdrop-blur-sm transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <Ship className="h-8 w-8 text-maritime-gold transition-all group-hover:scale-110 duration-300" />
              <span className="ml-2 text-white font-bold text-xl group-hover:text-maritime-gold transition-colors duration-300">Biển Khơi</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/#home" label="Trang chủ" />
              <NavLink href="/#about" label="Giới thiệu" />
              <NavLink href="/#services" label="Dịch vụ" />
              <NavLink href="/#history" label="Lịch sử" />
              <NavLink href="/#contact" label="Liên hệ" />
              <ConsultationForm />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-maritime-gold focus:outline-none transition-colors duration-300"
              aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with animation */}
      <div 
        className={`md:hidden bg-maritime-navy/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/#home" label="Trang chủ" />
          <MobileNavLink href="/#about" label="Giới thiệu" />
          <MobileNavLink href="/#services" label="Dịch vụ" />
          <MobileNavLink href="/#history" label="Lịch sử" />
          <MobileNavLink href="/#contact" label="Liên hệ" />
          <div className="mt-3">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Helper navigation link components
const NavLink = ({ href, label }: { href: string; label: string }) => {
  const location = useLocation();
  const isActive = location.hash === href.split('#')[1] || 
                  (href === "/#home" && location.pathname === "/" && !location.hash);
  
  return (
    <a 
      href={href} 
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative hover:text-maritime-gold
        ${isActive ? 'text-maritime-gold' : 'text-white'}`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-maritime-gold transform scale-x-0 transition-transform duration-300 
        ${isActive ? 'scale-x-100' : ''} group-hover:scale-x-100`}
      ></span>
    </a>
  );
};

const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
  const location = useLocation();
  const isActive = location.hash === href.split('#')[1] || 
                  (href === "/#home" && location.pathname === "/" && !location.hash);
  
  return (
    <a 
      href={href} 
      className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-maritime-navy/50 transition-all duration-300
        ${isActive ? 'text-maritime-gold border-l-2 border-maritime-gold pl-3' : 'text-white'}`}
    >
      {label}
    </a>
  );
};

export default Navbar;
