
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-heading font-bold text-health-700">
            ThinkFront<span className="text-mint-600">Health</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="font-medium text-gray-700 hover:text-health-600 transition-colors">
            Services
          </a>
          <a href="#about" className="font-medium text-gray-700 hover:text-health-600 transition-colors">
            About
          </a>
          <a href="#team" className="font-medium text-gray-700 hover:text-health-600 transition-colors">
            Team
          </a>
          <a href="#contact" className="font-medium text-gray-700 hover:text-health-600 transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-health-600 hover:bg-health-700">
            Schedule Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <a 
              href="#services" 
              className="px-4 py-2 font-medium text-gray-700 hover:text-health-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 font-medium text-gray-700 hover:text-health-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#team" 
              className="px-4 py-2 font-medium text-gray-700 hover:text-health-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 font-medium text-gray-700 hover:text-health-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-4 py-2">
              <Button className="w-full bg-health-600 hover:bg-health-700">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
