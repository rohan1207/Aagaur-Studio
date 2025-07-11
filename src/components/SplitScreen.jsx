import React, { useState, useEffect } from "react";

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

const SplitScreen = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectsData.length);
      setCurrentEvent((prev) => (prev + 1) % eventsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-black">
      {/* Projects Side */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-end p-4">
        <h2 className="text-white font-cormorant text-4xl md:text-5xl mb-8 tracking-wide">
          Featured Projects
        </h2>
        <div className="flex-1 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: `url(${projectsData[currentProject].image})`,
              transform: "scale(1.1)",
            }}
          >
            <div className="absolute inset-x-0 bottom-1 p-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent min-h-[180px] flex flex-col justify-end">
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
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-end p-4">
        <h2 className="text-white font-cormorant text-4xl md:text-5xl mb-8 tracking-wide">
          Upcoming Events
        </h2>
        <div className="flex-1 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: `url(${eventsData[currentEvent].image})`,
              transform: "scale(1.1)",
            }}
          >
            <div className="absolute inset-x-0 bottom-1 p-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent min-h-[180px] flex flex-col justify-end">
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
    </div>
  );
};

export default SplitScreen;
