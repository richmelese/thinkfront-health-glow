
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      organization: "",
      message: "",
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className={`section-padding bg-gradient-to-br from-mint-50 to-health-50 ${isVisible ? 'reveal-visible' : 'reveal'}`}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-mint-100 text-mint-800">
              <span className="text-xs font-medium uppercase tracking-wider">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">Let's Start a Conversation</h2>
            <p className="text-lg text-gray-700 mb-8">
              Ready to transform your healthcare organization? Contact us today to schedule a consultation with our expert team.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="p-3 bg-health-100 rounded-full text-health-600">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-700">info@thinkfronthealth.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="p-3 bg-health-100 rounded-full text-health-600">
                    <Phone className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-700">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="p-3 bg-health-100 rounded-full text-health-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-700">123 Health Avenue, Suite 500<br />Boston, MA 02116</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization
                </label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your organization"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help your organization?"
                  required
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-health-600 hover:bg-health-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
