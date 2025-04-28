
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Server } from "lucide-react";

const Services = () => {
  const skills = [
    {
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: "Frontend Development",
      description: "Building responsive and interactive web applications using React, TypeScript, and modern CSS frameworks.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      icon: <Server className="w-12 h-12 text-purple-600" />,
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs with focus on scalability and performance.",
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <Code className="w-12 h-12 text-purple-600" />,
      title: "Full Stack Solutions",
      description: "Creating end-to-end applications with seamless integration between frontend and backend.",
      technologies: ["REST APIs", "GraphQL", "Docker", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized in modern web technologies and best practices for building scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="service-card">
              <CardContent className="p-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-600 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
