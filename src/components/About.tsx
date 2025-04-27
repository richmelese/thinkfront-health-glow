
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    "Evidence-based approach to healthcare transformation",
    "Client partnerships built on trust and transparency",
    "Innovation that drives measurable outcomes",
    "Commitment to healthcare equity and accessibility",
    "Sustainable solutions for long-term success",
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className={`section-padding bg-gradient-to-br from-health-50 to-white ${isVisible ? 'reveal-visible' : 'reveal'}`}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-mint-100 text-mint-800">
              <span className="text-xs font-medium uppercase tracking-wider">About ThinkFront Health</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Transforming Healthcare Through Strategic Innovation</h2>
            <p className="text-lg text-gray-700">
              ThinkFront Health Consulting LLC was founded on the belief that healthcare organizations deserve specialized expertise to navigate the rapidly evolving landscape of modern healthcare.
            </p>
            <p className="text-gray-700">
              Our team combines decades of experience in healthcare management, clinical practice, and business strategy to deliver tailored solutions that address the unique challenges facing healthcare providers, payers, and technology companies.
            </p>
            
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Our Core Values</h3>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-health-600 text-white">
                        <Check className="h-3 w-3" />
                      </div>
                    </div>
                    <p className="text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button className="mt-4 bg-health-600 hover:bg-health-700">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-mint-200 to-health-200 rounded-full blur-3xl opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Healthcare consulting team"
              className="rounded-xl shadow-xl relative z-10 object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
