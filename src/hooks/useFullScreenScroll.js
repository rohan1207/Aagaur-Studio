import { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const useFullScreenScroll = (numSections) => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animatingRef = useRef(false);

  const LOCK_MS = 1250; // 1s tween + 250ms cooldown

  const scrollToSection = useCallback((index) => {
    if (index < 0 || index >= numSections) return;

    animatingRef.current = true;
    setIsAnimating(true);
    setSectionIndex(index);

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: index * window.innerHeight, autoKill: false },
      ease: 'power2.out',
      onComplete: () => {
        setTimeout(() => {
          animatingRef.current = false;
          setIsAnimating(false);
        }, 250); // 250ms cooldown after tween ends
      },
    });


  }, [numSections]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (animatingRef.current) {
        e.preventDefault();
        return;
      }

      if (Math.abs(e.deltaY) < 20) return; // ignore very small wheel movements

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = sectionIndex + direction;

      if (newIndex >= 0 && newIndex < numSections) {
        e.preventDefault();
        scrollToSection(newIndex);
      }
    };

    let touchStart = 0;
    const handleTouchStart = (e) => {
        touchStart = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        if (animatingRef.current) {
            e.preventDefault();
            return;
        }

        const touchEnd = e.touches[0].clientY;
        const deltaY = touchStart - touchEnd;

        if (Math.abs(deltaY) > 50) { // Threshold
            const direction = deltaY > 0 ? 1 : -1;
            const newIndex = sectionIndex + direction;
            if (newIndex >= 0 && newIndex < numSections) {
                e.preventDefault();
                scrollToSection(newIndex);
            }
        }
    };

    // We add passive: false to be able to preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isAnimating, sectionIndex, numSections, scrollToSection]);

  return { sectionIndex, isAnimating };
};
