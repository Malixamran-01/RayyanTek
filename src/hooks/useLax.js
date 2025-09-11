import { useEffect, useRef } from 'react';

export const useLax = () => {
  const laxRef = useRef(null);

  useEffect(() => {
    // Import lax only on client side
    if (typeof window !== 'undefined') {
      import('../utils/lax.js').then(() => {
        if (window.lax && !laxRef.current) {
          laxRef.current = window.lax;
          
          // Add scroll driver
          laxRef.current.addDriver("scrollY", () => window.scrollY);
          
          // Initialize lax
          laxRef.current.init();
        }
      });
    }

    return () => {
      // Cleanup if needed
      if (laxRef.current) {
        laxRef.current.removeDriver("scrollY");
      }
    };
  }, []);

  return laxRef.current;
};

export default useLax;
