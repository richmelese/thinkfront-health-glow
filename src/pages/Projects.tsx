import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://github.com/your-username/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspace, and progress tracking features.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://github.com/your-username/task-manager"
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media management with data visualization and reporting features.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "https://github.com/your-username/social-dashboard"
    },
    {
      title: "Real Estate Platform",
      description: "A property listing and management platform with search, filter, and booking capabilities.",
      technologies: ["React", "Next.js", "MongoDB", "AWS"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "https://github.com/your-username/realestate"
    },
    {
      title: "Healthcare Management System",
      description: "A comprehensive healthcare management system for clinics and small hospitals.",
      technologies: ["React", "Node.js", "MySQL", "Docker"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "https://github.com/your-username/healthcare"
    },
    {
      title: "Learning Management System",
      description: "An educational platform for online course delivery and student progress tracking.",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://github.com/your-username/lms"
    },
    {
      title: "Weather Application",
      description: "A weather forecasting application with location-based services and interactive maps.",
      technologies: ["React", "OpenWeather API", "Mapbox", "PWA"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://github.com/your-username/weather"
    },
    {
      title: "Budget Tracker",
      description: "A personal finance management application with expense tracking and budget planning features.",
      technologies: ["React", "Firebase", "ChartJS", "PWA"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "https://github.com/your-username/budget"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project demonstrates different aspects of my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 font-medium"
                >
                  View Project →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "default" : "outline"}
              onClick={() => handlePageChange(pageNum)}
              className="w-10 h-10"
            >
              {pageNum}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
