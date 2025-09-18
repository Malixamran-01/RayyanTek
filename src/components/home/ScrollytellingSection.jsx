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
  const [scrollProgress, setScrollProgress] = useState(0);
  const stepRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, -sectionTop / (sectionHeight - windowHeight)));
      setScrollProgress(scrollProgress);
      
      // Calculate which step should be active based on scroll position
      const totalSteps = steps.length;
      const stepProgress = scrollProgress * (totalSteps - 1);
      const currentStepIndex = Math.floor(stepProgress);
      const stepTransitionProgress = stepProgress - currentStepIndex;
      
      setActiveStep(currentStepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
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
              
              {steps.map((step, index) => {
                const totalSteps = steps.length;
                const stepProgress = scrollProgress * (totalSteps - 1);
                const currentStepIndex = Math.floor(stepProgress);
                const stepTransitionProgress = stepProgress - currentStepIndex;
                
                // Calculate opacity and scale for smooth text transitions
                let textOpacity = 0.3;
                let textScale = 0.95;
                let isActive = false;
                
                if (index === currentStepIndex) {
                  // Current step - fully visible
                  textOpacity = 1;
                  textScale = 1;
                  isActive = true;
                } else if (index === currentStepIndex + 1) {
                  // Next step - becoming visible
                  textOpacity = 0.3 + stepTransitionProgress * 0.7;
                  textScale = 0.95 + stepTransitionProgress * 0.05;
                } else if (index === currentStepIndex - 1) {
                  // Previous step - fading out
                  textOpacity = 1 - (1 - stepTransitionProgress) * 0.7;
                  textScale = 1 - (1 - stepTransitionProgress) * 0.05;
                }
                
                return (
                  <div
                    key={step.id}
                    ref={(el) => (stepRefs.current[index] = el)}
                    data-step={index}
                    className="relative min-h-[80vh] flex items-center py-16"
                    style={{
                      opacity: textOpacity,
                      transform: `scale(${textScale})`,
                      transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
                    }}
                  >
                    <div className="ml-12">
                      <div className="text-[#2a0d0f] text-sm font-medium mb-2">
                        {step.subtitle}
                      </div>
                      <h3 className={clsx(
                        "text-4xl md:text-6xl font-bold mb-4 transition-colors duration-300",
                        isActive ? "text-[#bfa45a]" : "text-white"
                      )}>
                        {step.title}
                      </h3>
                      <p className="text-[#bfa45a]/80 text-lg md:text-xl max-w-xl leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Active dot */}
                    <div className={clsx(
                      "absolute left-6 w-4 h-4 rounded-full transition-all duration-300",
                      isActive 
                        ? "bg-[#bfa45a] ring-4 ring-black scale-125" 
                        : "bg-[#bfa45a]/20 scale-100"
                    )} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Sticky Image Frame */}
          <div className="md:col-span-6">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <div className="image-frame relative w-[90%] max-w-[400px] h-[80vh] overflow-hidden shadow-2xl border border-[#bfa45a]/20 bg-[#2a0d0f]"
                   style={{ borderRadius: "50% / 30%" }}>
                
                {/* Calculate stacking image transitions */}
                {steps.map((step, index) => {
                  const totalSteps = steps.length;
                  const stepProgress = scrollProgress * (totalSteps - 1);
                  const currentStepIndex = Math.floor(stepProgress);
                  const stepTransitionProgress = stepProgress - currentStepIndex;
                  
                  // Calculate position for stacking transitions
                  let translateY = 0;
                  let opacity = 0;
                  let zIndex = 0;
                  let scale = 1;
                  
                  if (index <= currentStepIndex) {
                    // Current and previous steps - visible and stacked
                    if (index === currentStepIndex) {
                      // Current step - fully visible on top
                      translateY = 0;
                      opacity = 1;
                      zIndex = 20 + index;
                      scale = 1;
                    } else if (index === currentStepIndex - 1) {
                      // Previous step - slightly behind current
                      translateY = 0;
                      opacity = 0.8;
                      zIndex = 20 + index;
                      scale = 0.98;
                    } else {
                      // Older steps - further back in stack
                      const stackDepth = currentStepIndex - index;
                      translateY = 0;
                      opacity = Math.max(0, 0.6 - stackDepth * 0.1);
                      zIndex = 20 + index;
                      scale = Math.max(0.9, 1 - stackDepth * 0.02);
                    }
                  } else if (index === currentStepIndex + 1) {
                    // Next step - sliding up from below
                    translateY = (1 - stepTransitionProgress) * 100;
                    opacity = 0.7 + stepTransitionProgress * 0.3;
                    zIndex = 20 + index;
                    scale = 0.95 + stepTransitionProgress * 0.05;
                  } else {
                    // Future steps - below view
                    translateY = 100;
                    opacity = 0;
                    zIndex = 0;
                    scale = 0.95;
                  }
                  
                  return (
                    <div
                      key={`img-${step.id}`}
                      className="absolute inset-0 transition-none"
                      style={{
                        transform: `translateY(${translateY}%) scale(${scale})`,
                        opacity: opacity,
                        zIndex: zIndex
                      }}
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