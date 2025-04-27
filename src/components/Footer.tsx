
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-16">
        {/* Newsletter Section */}
        <div className="bg-health-700 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-health-100">
                Stay updated with the latest trends in healthcare consulting and industry insights.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-health-800/50 border-health-500 text-white placeholder:text-health-300"
                />
                <Button className="bg-white text-health-700 hover:bg-health-100">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-heading font-bold text-white mb-6">
              ThinkFront<span className="text-mint-500">Health</span>
            </div>
            <p className="text-gray-400 mb-6">
              Strategic healthcare consulting to transform organizations and improve patient outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-health-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-health-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">Strategic Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">Operational Excellence</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">Quality & Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">Financial Performance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-health-400 transition-colors">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-health-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-health-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-health-400 transition-colors">HIPAA Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ThinkFront Health Consulting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
