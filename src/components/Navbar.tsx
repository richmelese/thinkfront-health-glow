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
        <a href="/" className="flex items-center">
          <span className="text-2xl font-heading font-bold text-purple-700">
            Rahel<span className="text-pink-600">Melese</span>
          </span>
        </a>

        <div className="hidden md:flex space-x-8">
          <a href="#skills" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">
            Skills
          </a>
          <a href="#about" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">
            About
          </a>
          <a href="/projects" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">
            Projects
          </a>
          <a href="/blog" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">
            Blog
          </a>
          <a href="#contact" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Get in Touch
          </Button>
        </div>

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

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <a 
              href="#skills" 
              className="px-4 py-2 font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/projects" 
              className="px-4 py-2 font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="/blog" 
              className="px-4 py-2 font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-4 py-2">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
