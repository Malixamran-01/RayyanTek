import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import ideateImg from "@/assets/images/Ideate.jpg";
import designImg from "@/assets/images/design.jpg";
import developImg from "@/assets/images/develop.jpg";
import testImg from "@/assets/images/test.jpg";
import shipImg from "@/assets/images/ship.jpg";

const steps = [
  {
    id: "ideate",
    title: "Ideate",
    subtitle: "01/06",
    description: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
    image: ideateImg,
    alt: "Ideate"
  },
  {
    id: "design", 
    title: "Design",
    subtitle: "02/06",
    description: "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
    image: designImg,
    alt: "Design"
  },
  {
    id: "develop",
    title: "Develop", 
    subtitle: "03/06",
    description: "Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile processes to ensure rapid, high-quality delivery.",
    image: developImg,
    alt: "Develop"
  },
  {
    id: "test",
    title: "Test",
    subtitle: "04/06", 
    description: "Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.",
    image: testImg,
    alt: "Test"
  },
  {
    id: "ship",
    title: "Ship",
    subtitle: "05/06",
    description: "Deploying with monitoring, rollback plans and automation so releases are predictable and low-risk.",
    image: shipImg,
    alt: "Ship"
  },
  {
    id: "iterate",
    title: "Iterate",
    subtitle: "06/06",
    description: "Post-launch analysis, telemetry-driven improvements, and continuous delivery to grow product-market fit.",
    image: ideateImg, // Using ideate as placeholder
    alt: "Iterate"
  }
];

export default function ScrollytellingSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-step'));
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.3
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Additional scroll listener for more responsive updates
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementCenter = elementTop + rect.height / 2;
          const viewportCenter = scrollY + windowHeight / 2;
          
          // If element center is within 200px of viewport center, make it active
          if (Math.abs(elementCenter - viewportCenter) < 200) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full min-h-screen py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10 md:mb-12">
          <p className="text-2xl md:text-3xl font-bold text-[#bfa45a]">Our product</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#bfa45a]">
            development process
          </h2>
        </header>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Left Column - Steps */}
          <div className="md:col-span-6">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-[#bfa45a]/20" />
              
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => (stepRefs.current[index] = el)}
                  data-step={index}
                  className="relative min-h-[80vh] flex items-center py-16"
                >
                  <div className="ml-12">
                    <div className="text-[#2a0d0f] text-sm font-medium mb-2">
                      {step.subtitle}
                    </div>
                    <h3 className={clsx(
                      "text-4xl md:text-6xl font-bold mb-4 transition-colors duration-500",
                      activeStep === index ? "text-[#bfa45a]" : "text-white"
                    )}>
                      {step.title}
                    </h3>
                    <p className="text-[#bfa45a]/80 text-lg md:text-xl max-w-xl leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Active dot */}
                  <div className={clsx(
                    "absolute left-6 w-4 h-4 rounded-full transition-all duration-500",
                    activeStep === index 
                      ? "bg-[#bfa45a] ring-4 ring-black scale-125" 
                      : "bg-[#bfa45a]/20 scale-100"
                  )} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sticky Image Frame */}
          <div className="md:col-span-6">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <div className="image-frame relative w-[90%] max-w-[680px] h-[70vh] rounded-[9999px] overflow-hidden shadow-2xl border border-[#bfa45a]/20 bg-[#2a0d0f]">
                {steps.map((step, index) => {
                  const isActive = activeStep === index;
                  const isNext = activeStep === index - 1;
                  const isPrevious = activeStep === index + 1;
                  
                  return (
                    <div
                      key={`img-${step.id}`}
                      className={clsx(
                        "absolute inset-0 transition-transform duration-700 ease-out",
                        isActive && "translate-y-0 z-20",
                        isNext && "translate-y-full z-10",
                        isPrevious && "-translate-y-full z-10",
                        !isActive && !isNext && !isPrevious && "translate-y-full z-0"
                      )}
                    >
                      <img
                        src={step.image}
                        alt={step.alt}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}