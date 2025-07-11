import React, { useState, useEffect, useRef } from "react";
import { useFullScreenScroll } from "../hooks/useFullScreenScroll";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    name: "Modern Serenity Villa",
    description:
      "Luxury residential project embracing minimalist design philosophy",
    image: "/proj3.jpg",
  },
  {
    id: 2,
    name: "Harmony Heights",
    description: "Contemporary urban living with sustainable architecture",
    image: "/proj2.jpg",
  },
  {
    id: 3,
    name: "Ethereal Spaces",
    description: "Blend of artistry and functionality in commercial design",
    image: "/proj1.jpg",
  },
  {
    id: 4,
    name: "Urban Oasis",
    description: "Innovative mixed-use development in the heart of the city",
    image: "/proj4.jpg",
  },
  {
    id: 5,
    name: "Sustainable Retreat",
    description: "Eco-friendly resort design in harmony with nature",
    image: "/proj5.jpg",
  },
  {
    id: 6,
    name: "Cultural Heritage Center",
    description: "Preserving history through modern architectural techniques",
    image: "/proj6.jpg",
  },
];

const eventsData = [
  {
    id: 1,
    name: "Design Excellence Awards",
    description: "Recognition for outstanding architectural innovation",
    image: "/event1.png",
  },

  {
    id: 2,
    name: "Design Thinking Workshop",
    description: "Exploring innovative design methodologies",
    image: "/event4.avif",
  },

  {
    id: 3,
    name: "Architecture Masterclass",
    description: "Sharing expertise in modern architectural solutions",
    image: "/event6.png",
  },
  {
    id: 4,
    name: "Design Thinking Workshop",
    description: "Exploring innovative design methodologies",
    image: "/event7.png",
  },
  {
    id: 5,
    name: "Sustainable Future Summit",
    description: "Leading the way in eco-conscious design",
    image: "/event8.avif",
  },
];

const values = [
  {
    title: "INNOVATION",
    image: "/innovation.jpg",
    description: "Pushing boundaries in architectural design",
  },
  {
    title: "SUSTAINABILITY",
    image: "/sustainability.jpg",
    description: "Harmonizing with nature, preserving for tomorrow",
  },
  {
    title: "PURPOSE",
    image: "/purpose.jpg",
    description: "Creating spaces that inspire and endure",
  },
];

const usps = [
  {
    icon: "🌱",
    title: "Eco-Friendly Materials",
    description: "We design with the Earth in mind",
  },
  {
    icon: "⌛",
    title: "Timeless Aesthetics",
    description: "Minimal, functional, and future-ready",
  },
  {
    icon: "🎯",
    title: "Purpose-Driven Spaces",
    description: "Where sustainability meets soul",
  },
  {
    icon: "🔄",
    title: "Holistic Design",
    description: "From blueprint to product, green at every step",
  },
];

const Homepage = () => {
  const { sectionIndex } = useFullScreenScroll(3);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(0);
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



  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectsData.length);

      setCurrentEvent((prev) => (prev + 1) % eventsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-white">
      {/* Section 0: Hero Text */}
      <section
        ref={overlayRef}
        className={`h-screen w-full absolute top-0 left-0 flex items-center justify-center transition-all duration-1000 ease-in-out`}
        style={{
          opacity: sectionIndex === 0 ? 1 : 0,
          transform: sectionIndex > 0 ? "translateY(-50%)" : "translateY(0)",
          zIndex: 30,
        }}
      >
        <div
          className="absolute inset-0 z-10"
        >
          <img
            src="/hero.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
          <div className="overflow-hidden mb-6">
            <div
              className={`transform transition-all duration-300 ${
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

          <div className="overflow-hidden">
            <div
              className={`transform transition-all duration-1000 delay-700 ${
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

          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 z-50 ${
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
      </section>

      {/* Section 1: Split Screen */}
      <section
        className={`h-screen w-full absolute top-0 left-0 flex flex-col md:flex-row transition-transform duration-1000 ease-in-out md:gap-[2px] pt-24 px-4 pb-4`}
        style={{
          transform: sectionIndex === 1 ? "translateY(0)" : "translateY(100%)",
          zIndex: 40,
        }}
      >
        {/* Projects Side */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: `url(${projectsData[currentProject].image})`,
              transform: sectionIndex === 1 ? "scale(1.1)" : "scale(1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/95">
              <h2 className="text-white font-cormorant text-xl md:text-2xl tracking-wide p-5 md:p-10">
                Featured Projects
              </h2>
              <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end">
                <h3 className="text-white font-light text-2xl md:text-3xl tracking-wider mb-3">
                  {projectsData[currentProject].name}
                </h3>
                <p className="text-gray-200 font-light tracking-wide text-sm md:text-base max-w-2xl">
                  {projectsData[currentProject].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Events Side */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: `url(${eventsData[currentEvent].image})`,
              transform: sectionIndex === 1 ? "scale(1.1)" : "scale(1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/95">
              <h2 className="text-white font-cormorant text-xl md:text-2xl tracking-wide p-5 md:p-10 ">
                Upcoming Events
              </h2>
              <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end">
                <h3 className="text-white font-light text-2xl md:text-3xl tracking-wider mb-3">
                  {eventsData[currentEvent].name}
                </h3>
                <p className="text-gray-200 font-light tracking-wide text-sm md:text-base max-w-2xl">
                  {eventsData[currentEvent].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Values */}
      <section
        className={`h-screen w-full absolute top-16 left-0 bg-white transition-transform duration-1000 ease-in-out overflow-y-auto`}
        style={{
          transform: sectionIndex === 2 ? "translateY(0)" : "translateY(100%)",
          zIndex: 50,
        }}
      >
        <div className="min-h-screen py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="relative group"
                    style={{
                      opacity: sectionIndex === 2 ? 1 : 0,
                      transform: sectionIndex === 2 ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.8s ease-out ${index * 0.2}s`,
                    }}
                  >
                    <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-cormorant text-3xl mb-3 tracking-wider">
                      {value.title}
                    </h3>
                    <p className="text-black/70 font-light tracking-wide">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="text-center max-w-3xl mx-auto space-y-6"
                style={{
                  opacity: sectionIndex === 2 ? 1 : 0,
                  transform: sectionIndex === 2 ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease-out 0.6s",
                }}
              >
                <h2 className="font-cormorant text-4xl md:text-5xl tracking-wide leading-tight">
                  BUILT FOR IMPACT.
                  <br />
                  DESIGNED FOR A BETTER TOMORROW.
                </h2>
                <p className="text-black/70 font-light tracking-wider text-lg">
                  At the core of every design, we blend innovation with
                  responsibility.
                </p>
                <Link
                  to="/about"
                  className="inline-block mt-8 text-sm tracking-[0.2em] font-light group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    Read more about our philosophy →
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
                {usps.map((usp, index) => (
                  <div
                    key={index}
                    className="text-center group"
                    style={{
                      opacity: sectionIndex === 2 ? 1 : 0,
                      transform: sectionIndex === 2 ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.8s ease-out ${0.8 + index * 0.2}s`,
                    }}
                  >
                    <div className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-110">
                      {usp.icon}
                    </div>
                    <h4 className="font-cormorant text-xl mb-2 tracking-wide">
                      {usp.title}
                    </h4>
                    <p className="text-black/70 font-light tracking-wide text-sm">
                      {usp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-12 w-24 h-24 border border-black/10 rounded-full"></div>
            <div className="absolute bottom-1/3 -right-12 w-32 h-32 border border-black/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-black/5 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
