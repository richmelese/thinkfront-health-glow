
import { useState, useEffect, useRef } from 'react';

const services = [
  {
    title: "Strategic Planning",
    description: "Develop comprehensive strategic plans tailored to healthcare organizations focusing on sustainable growth, market positioning, and competitive advantage.",
    icon: "📈",
  },
  {
    title: "Operational Excellence",
    description: "Streamline clinical and administrative workflows, reduce waste, and enhance productivity to deliver exceptional patient care while controlling costs.",
    icon: "⚙️",
  },
  {
    title: "Digital Transformation",
    description: "Guide healthcare organizations through technology adoption, EHR optimization, telehealth implementation, and data analytics strategies.",
    icon: "🖥️",
  },
  {
    title: "Quality & Compliance",
    description: "Ensure adherence to regulatory standards, implement quality improvement initiatives, and develop robust risk management frameworks.",
    icon: "✓",
  },
  {
    title: "Financial Performance",
    description: "Optimize revenue cycles, improve billing practices, negotiate favorable contracts, and develop sustainable financial models for healthcare providers.",
    icon: "💰",
  },
  {
    title: "Mergers & Acquisitions",
    description: "Provide due diligence, transaction support, and post-merger integration assistance for healthcare organizations seeking strategic partnerships.",
    icon: "🤝",
  },
];

const Services = () => {
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

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className={`section-padding bg-white ${isVisible ? 'reveal-visible' : 'reveal'}`}
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
          <div className="h-1 w-24 bg-health-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We provide comprehensive consulting solutions to help healthcare organizations optimize operations, 
            improve patient outcomes, and navigate the complex healthcare landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white rounded-xl p-8 border border-gray-100 shadow-sm"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0 
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
