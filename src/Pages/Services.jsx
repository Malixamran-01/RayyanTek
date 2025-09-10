import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Code2, 
  Smartphone, 
  Zap, 
  Palette, 
  Cloud, 
  ShoppingCart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description: "Scalable, responsive, and high-performance websites built with modern technologies.",
      features: [
        "Responsive web design",
        "Progressive Web Apps (PWA)",
        "API integration & development",
        "Performance optimization",
        "SEO-friendly architecture"
      ],
      technologies: ["React", "Node.js", "Next.js", "TypeScript"],
      color: "from-blue-500 to-blue-600",
      pricing: "Starting from $1,499"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications tailored to your specific business needs.",
      features: [
        "iOS & Android development",
        "Cross-platform solutions",
        "Native performance",
        "App Store optimization",
        "Push notifications"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-purple-500 to-purple-600",
      pricing: "Starting from $2,999"
    },
    {
      icon: Zap,
      title: "IT Consultancy",
      description: "Strategic technology consulting to transform your business and optimize operations.",
      features: [
        "Digital transformation strategy",
        "Technology roadmapping",
        "System architecture review",
        "Process optimization",
        "Team training & mentoring"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
      color: "from-green-500 to-green-600",
      pricing: "$150/hour"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Modern, user-friendly interfaces that delight customers and drive engagement.",
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "Visual design systems",
        "Usability testing",
        "Design system creation"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Framer"],
      color: "from-pink-500 to-pink-600",
      pricing: "Starting from $899"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Secure, scalable cloud solutions with continuous deployment and monitoring.",
      features: [
        "Cloud migration",
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Monitoring & logging",
        "Security implementation"
      ],
      technologies: ["AWS", "Docker", "Jenkins", "Terraform"],
      color: "from-cyan-500 to-cyan-600",
      pricing: "Starting from $1,999"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development and optimization for maximum conversions.",
      features: [
        "Custom e-commerce platform",
        "Payment gateway integration",
        "Inventory management",
        "Analytics & reporting",
        "Mobile-optimized checkout"
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe"],
      color: "from-orange-500 to-orange-600",
      pricing: "Starting from $2,499"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {service.pricing}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-slate-900">
                    {service.title}
                  </CardTitle>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to={createPageUrl("Contact")}>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 group/btn">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with regular updates" },
              { step: "04", title: "Launch", description: "Deploying and providing ongoing support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}