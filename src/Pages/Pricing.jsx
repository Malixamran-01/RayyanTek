import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      period: "one-time",
      description: "Perfect for small businesses getting started online",
      features: [
        "Landing page website (up to 5 pages)",
        "Responsive mobile design",
        "Basic SEO setup",
        "Contact form integration",
        "1 month of support",
        "Free hosting setup"
      ],
      recommended: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$1,499",
      period: "one-time", 
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Multi-page website (up to 15 pages)",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "3 months of support",
        "Free hosting & domain",
        "Analytics setup",
        "Social media integration"
      ],
      recommended: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom web/app development",
        "Advanced integrations",
        "Dedicated project manager", 
        "Ongoing consultancy",
        "24/7 priority support",
        "Security compliance",
        "Performance monitoring",
        "Team training"
      ],
      recommended: false,
      cta: "Contact Sales"
    }
  ];

  const addOns = [
    { name: "Additional Pages", price: "$99", description: "Per additional page beyond plan limits" },
    { name: "Custom Integrations", price: "$299", description: "Third-party API integrations" },
    { name: "Advanced Analytics", price: "$199", description: "Detailed user behavior tracking" },
    { name: "Priority Support", price: "$149/month", description: "24/7 dedicated support channel" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and excellence.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.recommended ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2">
                      <Badge className="bg-white/20 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.recommended ? 'pt-12' : 'pt-8'} pb-6`}>
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    {plan.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-slate-900">
                      {plan.price}
                      {plan.period !== "quote" && <span className="text-lg text-slate-500">+</span>}
                    </div>
                    <p className="text-slate-500 text-sm">{plan.period}</p>
                  </div>
                  <p className="text-slate-600 mt-4">{plan.description}</p>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={createPageUrl("Contact")}>
                    <Button 
                      className={`w-full ${plan.recommended ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' : 'bg-slate-900 hover:bg-slate-800'} text-white`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Add-ons & Extras</h2>
              <p className="text-slate-600">Extend your plan with additional features and services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <h3 className="font-bold text-slate-900 mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{addon.price}</div>
                  <p className="text-slate-600 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in the initial consultation?",
                answer: "We'll discuss your project requirements, timeline, budget, and provide you with a detailed proposal and project roadmap at no cost."
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer: "Yes, all our plans include maintenance and support. We offer extended support plans for long-term partnerships."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! You can upgrade your plan or add additional features at any time during or after your project."
              },
              {
                question: "What technologies do you use?",
                answer: "We use modern, proven technologies including React, Node.js, Python, AWS, and many others based on your project requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}