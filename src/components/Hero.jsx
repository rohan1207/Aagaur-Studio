import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const overlayRef = useRef(null);

  // Handle initial load with sequential animations
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsInitialLoad(false);
    }, 500);

    const timer2 = setTimeout(() => {
      setTextVisible(true);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <img
          src="/hero.png"
          className="absolute w-full h-full object-cover"
          style={{
            opacity: 0.7,
          }}
        />
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 z-20 bg-black opacity-40" />

      {/* Hero Content */}
      <div
        ref={overlayRef}
        className={`relative z-30 h-full flex items-center justify-center
          ${!isInitialLoad ? "opacity-100" : "opacity-0"}`}
        style={{
          transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-full max-w-7xl mx-auto px-4">
          {/* Main Headline */}
          <div className="overflow-hidden mb-6">
            <div
              className={`transform transition-all duration-300
                ${
                  !isInitialLoad
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
            >
              <h1 className="text-white font-cormorant text-6xl md:text-8xl leading-[1.2] tracking-wider text-center">
                Designing Spaces
                <br />
                That Inspire & Endure
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden">
            <div
              className={`transform transition-all duration-1000 delay-700
                ${
                  textVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
            >
              <p className="text-gray-200 font-light tracking-widest text-lg md:text-xl text-center mb-6">
                At Aagaur Studio, creativity meets sustainability — beautifully
              </p>
            </div>
          </div>

          {/* Scroll Prompt */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000
              ${
                textVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
          >
            <p className="text-gray-300 font-light text-sm tracking-[0.3em] uppercase text-center">
              Scroll to explore
            </p>
            <div className="mt-4 animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-gray-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
