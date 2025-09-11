import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Zap, 
  Palette, 
  Cloud, 
  ShoppingCart, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import silverbg from "@/assets/silverbg.png";

export default function ServicesPreview() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description: "Scalable, responsive, and high-performance websites built with modern technologies. We create custom solutions that grow with your business and deliver exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Cross-platform mobile applications tailored to your specific business needs. From iOS to Android, we build apps that engage users and drive business growth.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "IT Consultancy",
      description: "Strategic technology consulting to transform your business and optimize operations. We help you make informed decisions about technology investments and digital transformation.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Modern, user-friendly interfaces that delight customers and drive engagement. We create intuitive designs that convert visitors into loyal customers.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Secure, scalable cloud solutions with continuous deployment and monitoring. We ensure your applications are always available and performing at their best.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development and optimization for maximum conversions. We build e-commerce platforms that drive sales and provide seamless shopping experiences.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const scrollToService = (index) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    setCurrentIndex(index);
    
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      const scrollPosition = index * cardWidth;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
    
    setTimeout(() => setIsScrolling(false), 500);
  };

  const nextService = () => {
    const nextIndex = (currentIndex + 1) % services.length;
    scrollToService(nextIndex);
  };

  const prevService = () => {
    const prevIndex = (currentIndex - 1 + services.length) % services.length;
    scrollToService(prevIndex);
  };

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
            Our Services
          </h2>
          <p className="text-xl text-black/90 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in today's competitive market.
          </p>
        </div>

        {/* Horizontal Scrolling Services */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevService}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-[#2a0d0f]/90 text-[#bfa45a] p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#bfa45a]/30"
            disabled={isScrolling}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextService}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-[#2a0d0f]/90 text-[#bfa45a] p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#bfa45a]/30"
            disabled={isScrolling}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Services Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-center px-4"
              >
                <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border border-[#bfa45a]/20">
                  <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                    {/* Left Side - Content */}
                    <div className="p-12 flex flex-col justify-center bg-black">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#2a0d0f] mb-8 border border-[#bfa45a]/30">
                        <service.icon className="w-10 h-10 text-[#bfa45a]" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#bfa45a] mb-6">
                        {service.title}
                      </h3>
                      <p className="text-lg text-white/90 leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <Link to={createPageUrl("Services")}>
                        <Button size="lg" className="bg-[#bfa45a] hover:bg-[#bfa45a]/90 text-black font-semibold px-8 group border border-[#bfa45a]/50">
                          Learn More
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                     {/* Right Side - Image */}
                     <div className="relative overflow-hidden bg-black" style={{ borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%' }}>
                       <img
                         src={service.image}
                         alt={service.title}
                         className="w-full h-full object-cover opacity-80"
                         style={{ borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%' }}
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-[#2a0d0f]/50 to-transparent" style={{ borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%' }} />
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#bfa45a]/10 to-transparent" style={{ borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%' }} />
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToService(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#bfa45a] scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                disabled={isScrolling}
              />
            ))}
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link to={createPageUrl("Services")}>
            <Button size="lg" className="bg-[#bfa45a] hover:bg-[#bfa45a]/90 text-black font-semibold px-8 group">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}