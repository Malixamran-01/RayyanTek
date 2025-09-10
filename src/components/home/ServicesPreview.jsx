import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Zap, 
  Palette, 
  Cloud, 
  ShoppingCart, 
  ArrowRight 
} from "lucide-react";
import silverbg from "@/assets/silverbg.png";

export default function ServicesPreview() {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description: "Scalable, responsive, and high-performance websites built with modern technologies.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Cross-platform mobile applications tailored to your specific business needs.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "IT Consultancy",
      description: "Strategic technology consulting to transform your business and optimize operations.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Modern, user-friendly interfaces that delight customers and drive engagement.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Secure, scalable cloud solutions with continuous deployment and monitoring.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development and optimization for maximum conversions.",
      color: "from-orange-500 to-orange-600"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to={createPageUrl("Services")}>
            <Button size="lg" className="bg-[#bfa45a] hover:bg-[#bfa45a]/90 text-black font-semibold px-8 group">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}