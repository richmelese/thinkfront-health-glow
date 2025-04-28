
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Rahel Melese"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-100 rounded-lg -z-10"></div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-4">
                Hello! I'm Rahel Melese, a passionate fullstack developer with extensive experience 
                in building web applications. With over 10 successful projects under my belt, 
                I specialize in creating efficient, scalable, and user-friendly solutions.
              </p>
              <p className="text-gray-600 mb-6">
                I love tackling complex problems and turning ideas into reality through clean, 
                maintainable code. My experience spans from developing responsive front-end 
                interfaces to designing robust backend systems.
              </p>
              <div className="flex gap-4">
                <Button className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
