import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a scalable online store with custom integrations and payment processing for a growing retail business.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      category: "E-commerce",
      duration: "3 months",
      teamSize: "4 developers",
      results: ["300% increase in online sales", "50% faster checkout process", "99.9% uptime"]
    },
    {
      title: "SaaS Analytics Dashboard",
      description: "Developed an analytics-driven dashboard for enterprise clients with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      category: "Web Application",
      duration: "4 months", 
      teamSize: "5 developers",
      results: ["40% faster data processing", "Enhanced user insights", "Improved decision making"]
    },
    {
      title: "Healthcare Mobile App",
      description: "Delivered a secure and HIPAA-compliant mobile app for patient management and telemedicine.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["React Native", "AWS", "HIPAA", "Security"],
      category: "Mobile App",
      duration: "6 months",
      teamSize: "6 developers", 
      results: ["100% HIPAA compliance", "50,000+ users onboarded", "4.8★ app store rating"]
    },
    {
      title: "Financial Services Platform",
      description: "Created a comprehensive financial platform with advanced security and compliance features.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Angular", "Java", "Spring", "Oracle"],
      category: "Enterprise",
      duration: "8 months",
      teamSize: "8 developers",
      results: ["Bank-grade security", "$2M+ transactions processed", "Zero security incidents"]
    },
    {
      title: "EdTech Learning Platform",
      description: "Built an interactive learning management system with video streaming and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      tags: ["Next.js", "GraphQL", "AWS", "Video.js"],
      category: "Education",
      duration: "5 months",
      teamSize: "5 developers",
      results: ["10,000+ active students", "95% course completion rate", "Seamless video streaming"]
    },
    {
      title: "IoT Management System",
      description: "Developed a comprehensive IoT device management platform with real-time monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      tags: ["React", "MQTT", "InfluxDB", "Grafana"],
      category: "IoT",
      duration: "7 months",
      teamSize: "6 developers",
      results: ["1M+ devices managed", "Real-time monitoring", "30% cost reduction"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses transform digitally.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-900">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-slate-600 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group/btn">
                    View Case Study
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can bring your vision to life with our expertise and innovative approach.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 font-semibold px-8">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
