import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Smartphone, 
  Zap, 
  Palette, 
  Cloud, 
  ShoppingCart, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Users,
  Award,
  TrendingUp
} from "lucide-react";

import HeroSection from "../components/home/HeroSection";
import SkewedAnimatedRow from "../components/home/SkewedRows";
import ServicesPreview from "../components/home/ServicesPreview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import TestimonialsSection from "../components/home/TetsimonialSection";
import PricingPreview from "../components/home/PricingPreview";
import ScrollytellingSection from "../components/home/ScrollytellingSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Skewed Animated Row */}
      <div className="relative">
        <SkewedAnimatedRow 
          text=" INNOVATION • QUALITY • RELIABILITY • EXCELLENCE • FLEXIBILITY • SUSTAINABILITY • SECURITY "
          direction="right" 
          speed={45}
          backgroundColor="#000000"
          textColor="#bfa45a"
          skew="skew-y-1"
          border={false}
        />
      </div>
      
      <ServicesPreview />
      <ScrollytellingSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <PricingPreview />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-[#2a0d0f] to-[#220d0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#bfa45a]/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-[#bfa45a] text-black hover:bg-[#bfa45a]/90 font-semibold px-8">
                Get Free Consultation
              </Button>
            </Link>
            <Link to={createPageUrl("Projects")}>
              <Button size="lg" variant="outline" className="border-[#bfa45a] text-[#bfa45a] hover:bg-[#bfa45a] hover:text-black px-8">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}