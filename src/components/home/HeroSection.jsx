import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import PokerCards from "./PokerCards";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const lastUpdateTime = useRef(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

    // Pin the entire hero section while cards animate
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=400%", // Extend scroll distance for all cards
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const now = Date.now();
        const progress = self.progress;
        const totalCards = 5; // Number of cards
        
        // Calculate which card should be active based on scroll progress
        const cardProgress = progress * totalCards;
        const newActiveIndex = Math.min(Math.floor(cardProgress), totalCards - 1);
        
        // Debounce updates to prevent jittery animations
        if (newActiveIndex !== activeCardIndex && (now - lastUpdateTime.current) > 100) {
          setActiveCardIndex(newActiveIndex);
          lastUpdateTime.current = now;
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [activeCardIndex]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black">
      {/* Spline background layer */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/14QvyROmPzhCZWIz/scene.splinecode" />
      </div> */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2a0d0f] to-[#220d0c] opacity-90" />
      <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-[#bfa45a]/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-[#2a0d0f]/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#bfa45a]/20 bg-[#2a0d0f]/30 px-3 py-1 mb-6">
              <span className="text-xs uppercase tracking-wide text-[#bfa45a]">IT Consultancy & Web Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Building Scalable Web Solutions for Your Business
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#bfa45a]/90 leading-relaxed max-w-2xl">
              We specialize in web development, IT consulting, and digital transformation services.
              Partner with a team that delivers modern, reliable, and growth-focused solutions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-gradient-to-r from-[#bfa45a] to-[#2a0d0f] hover:from-[#bfa45a]/90 hover:to-[#2a0d0f]/90 text-black font-semibold">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to={createPageUrl("Projects")}>
                <Button size="lg" variant="outline" className="border-[#bfa45a] text-[#bfa45a] hover:bg-[#bfa45a]/10">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Poker Cards */}
          <div className="hidden lg:flex items-center justify-center h-[500px]">
            <PokerCards activeCardIndex={activeCardIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}