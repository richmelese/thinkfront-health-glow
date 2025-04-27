
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-health-50 to-mint-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-health-200/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-mint-200/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-mint-100 text-mint-800">
              <span className="text-xs font-medium uppercase tracking-wider">Healthcare Innovation Partners</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Strategic Health <br />
              <span className="text-health-600">Consulting Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Transforming healthcare organizations with data-driven strategies, operational excellence, and innovative solutions for improved patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-health-600 hover:bg-health-700 text-white">
                Our Services
              </Button>
              <Button variant="outline" size="lg" className="group border-health-600 text-health-600">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-health-200 to-mint-200 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white p-4 rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Healthcare professionals in meeting"
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 mb-10">
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-health-700">10+</div>
            <div className="text-gray-600 mt-2">Years Experience</div>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-health-700">200+</div>
            <div className="text-gray-600 mt-2">Clients Served</div>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-health-700">95%</div>
            <div className="text-gray-600 mt-2">Client Satisfaction</div>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-health-700">$500M+</div>
            <div className="text-gray-600 mt-2">Revenue Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
