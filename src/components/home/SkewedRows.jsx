import { useEffect, useRef } from 'react';

const SkewedAnimatedRow = ({
  text = '',
  direction = 'left',
  speed = 45,
  backgroundColor = '#D51414',
  textColor = '#fff',
  skew = 'skew-y-1',
  border = true
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative py-4 transform ${skew} ${border ? 'border-y border-red-100' : ''}`}
      style={{ backgroundColor }}
    >
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className={`inline-block font-bold text-2xl lg:text-3xl tracking-wider ${
            direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
          }`}
          style={{
            color: textColor,
            animationDuration: `${speed}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {/* Create seamless cyclic text */}
          {Array(8).fill(text).join(' • ')}
        </div>
        {/* Duplicate for seamless loop */}
        <div
          className={`inline-block font-bold text-2xl lg:text-3xl tracking-wider ${
            direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
          }`}
          style={{
            color: textColor,
            animationDuration: `${speed}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {Array(8).fill(text).join(' • ')}
        </div>
      </div>
    </div>
  );
};

export default SkewedAnimatedRow;


