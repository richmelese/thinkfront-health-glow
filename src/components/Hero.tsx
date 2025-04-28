
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            Rahel Melese
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 animate-fade-in delay-100">
            Fullstack Developer
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in delay-200">
            Building robust and scalable web applications with modern technologies.
            Passionate about creating intuitive user experiences and efficient backend solutions.
          </p>
          <div className="flex justify-center gap-4 mb-12 animate-fade-in delay-300">
            <Button className="flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
