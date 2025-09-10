import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function PricingPreview() {
  const plans = [
    { name: "Starter", price: "$499+", blurb: "Perfect for getting started" },
    { name: "Professional", price: "$1,499+", blurb: "For growing businesses" },
    { name: "Enterprise", price: "Custom Quote", blurb: "Tailored solutions" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Transparent Pricing</h2>
          <p className="text-slate-600 mt-2">Flexible plans to fit your goals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <Card key={p.name} className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-sm uppercase tracking-wide text-slate-500">{p.name}</div>
                <div className="mt-2 text-3xl font-bold text-slate-900">{p.price}</div>
                <div className="mt-2 text-slate-600 text-sm">{p.blurb}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to={createPageUrl("Pricing")}>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">See Full Pricing</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


