import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import silverbg from "@/assets/silverbg.png";

export default function FeaturedProjects() {

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Built a scalable online store with custom integrations and payment processing.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&q=80",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      category: "E-commerce"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Developed an analytics-driven dashboard for enterprise clients with real-time data.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      category: "Web App"
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      description: "Delivered a secure and HIPAA-compliant mobile app for patient management.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80",
      technologies: ["React Native", "AWS", "Security", "Firebase"],
      category: "Mobile App"
    },
    {
      id: 4,
      title: "AI Chatbot Platform",
      description: "Created an intelligent chatbot platform with natural language processing capabilities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80",
      technologies: ["Python", "TensorFlow", "FastAPI", "Redis"],
      category: "AI/ML"
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Developed a secure and transparent voting system using blockchain technology.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&q=80",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      category: "Blockchain"
    },
    {
      id: 6,
      title: "IoT Monitoring Dashboard",
      description: "Built a real-time monitoring system for IoT devices with data visualization.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MQTT", "Chart.js"],
      category: "IoT"
    }
  ];


  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url(${silverbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-black/90 max-w-3xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="featured-projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="featured-project-card group relative overflow-hidden rounded-2xl border border-[#bfa45a]/20 shadow-lg hover:shadow-2xl hover:border-[#bfa45a]/40 transition-all duration-500 cursor-pointer"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px'
              }}
            >
              {/* Project Card Overlay */}
              <div className="project-card-overlay absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/90 group-hover:via-black/70 group-hover:to-transparent transition-all duration-500"></div>
              

              {/* Project Info Hover */}
              <div className="project-info-hover absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <h3 className="project-title text-2xl font-bold text-[#bfa45a] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="project-short-description text-white/90 mb-4 leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.description}
                </p>
                <div className="project-tech-tags-hover flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <div key={tech} className="tech-tag-homepage bg-[#2a0d0f] text-[#bfa45a] text-xs px-3 py-1 rounded-full border border-[#bfa45a]/30 hover:bg-[#bfa45a] hover:text-black transition-all duration-300">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags (Always Visible) */}
              <div className="project-tech-tags absolute bottom-4 left-4 flex flex-wrap gap-2 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                {project.technologies.slice(0, 4).map((tech) => (
                  <div key={tech} className="tech-tag-homepage bg-black/80 text-[#bfa45a] text-xs px-2 py-1 rounded-full border border-[#bfa45a]/30 backdrop-blur-sm">
                    {tech}
                  </div>
                ))}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#2a0d0f] text-[#bfa45a] text-xs font-semibold px-3 py-1 rounded-full border border-[#bfa45a]/30">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center">
          <Link to={createPageUrl("Projects")}>
            <Button size="lg" className="bg-black border-2 border-[#bfa45a] text-[#bfa45a] hover:bg-[#bfa45a] hover:text-black font-semibold px-8 group transition-all duration-300">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}