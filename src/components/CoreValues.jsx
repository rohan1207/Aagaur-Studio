import React from "react";
import { Link } from "react-router-dom";

const CoreValues = () => {
  const values = [
    {
      title: "INNOVATION",
      image: "/innovation.jpg", // You'll need to add these images to your public folder
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

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Main Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 200}
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

          {/* Central Message */}
          <div
            className="text-center max-w-3xl mx-auto space-y-6"
            data-aos="fade-up"
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

          {/* USPs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
            {usps.map((usp, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
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

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-12 w-24 h-24 border border-black/10 rounded-full"></div>
        <div className="absolute bottom-1/3 -right-12 w-32 h-32 border border-black/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-black/5 rounded-full"></div>
      </div>
    </section>
  );
};

export default CoreValues;
