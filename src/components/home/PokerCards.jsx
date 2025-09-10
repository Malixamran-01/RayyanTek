import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import clsx from 'clsx';

export default function PokerCards({ activeCardIndex = 0 }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern, scalable web applications",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Cross-platform mobile solutions",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=500&fit=crop",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=500&fit=crop",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=500&fit=crop",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 5,
      title: "DevOps",
      description: "Automated deployment & monitoring",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=500&fit=crop",
      color: "from-green-500 to-green-600"
    }
  ];

  useEffect(() => {
    if (!cardsRef.current.length) return;

    const cards = cardsRef.current;
    
    // Kill any existing animations to prevent conflicts
    gsap.killTweensOf(cards);
    
    // Animate cards based on their position relative to active card
    cards.forEach((card, index) => {
      if (!card) return;
      
      const isActive = activeCardIndex === index;
      const isNext = activeCardIndex === (index - 1 + services.length) % services.length;
      const isPrevious = activeCardIndex === (index + 1) % services.length;
      const isHidden = Math.abs(index - activeCardIndex) > 1;
      
      let targetTransform = {};
      let targetOpacity = 1;
      let targetZIndex = 1;
      
      if (isActive) {
        targetTransform = {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1.0
        };
        targetOpacity = 1;
        targetZIndex = 10;
      } else if (isNext) {
        targetTransform = {
          x: 60,
          y: 10,
          rotation: 2,
          scale: 0.92
        };
        targetOpacity = 0.8;
        targetZIndex = 2;
      } else if (isPrevious) {
        targetTransform = {
          x: -60,
          y: 10,
          rotation: -2,
          scale: 0.88
        };
        targetOpacity = 0.6;
        targetZIndex = 1;
      } else if (isHidden) {
        targetTransform = {
          x: 0,
          y: 20,
          rotation: 0,
          scale: 0.8
        };
        targetOpacity = 0.3;
        targetZIndex = 1;
      }
      
      // Animate the card to its target position with smooth easing
      gsap.to(card, {
        duration: 1.2,
        ease: "power3.out",
        ...targetTransform,
        opacity: targetOpacity,
        zIndex: targetZIndex,
        overwrite: "auto"
      });
    });
  }, [activeCardIndex, services.length]);

  return (
    <div ref={containerRef} className="poker-cards-container">
      <div className="poker-cards-wrapper">
        {services.map((service, index) => {
          const isActive = activeCardIndex === index;
          const isNext = activeCardIndex === (index - 1 + services.length) % services.length;
          const isPrevious = activeCardIndex === (index + 1) % services.length;
          const isHidden = Math.abs(index - activeCardIndex) > 1;
          
          return (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className={clsx(
                "poker-card",
                isActive && "poker-card-active",
                isNext && "poker-card-next",
                isPrevious && "poker-card-previous",
                isHidden && "poker-card-hidden"
              )}
            >
              <div className="poker-card-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="poker-card-image"
                />
                <div className={`poker-card-overlay bg-gradient-to-t ${service.color}`} />
              </div>
              <div className="poker-card-content">
                <h3 className="poker-card-title">{service.title}</h3>
                <p className="poker-card-description">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
