import React from "react";

const MainHero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.7 }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Content */}
      <div className="relative h-full z-10 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          {/* Main Title */}
          <h1 className="text-white font-cormorant text-6xl md:text-8xl leading-[1.2] tracking-wider mb-6">
            Designing Spaces
            <br />
            That Inspire & Endure
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 font-light tracking-widest text-lg md:text-xl mb-12">
            At Aagaur Studio, creativity meets sustainability — beautifully
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <p className="text-gray-300 font-light text-sm tracking-[0.3em] uppercase">
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

export default MainHero;
