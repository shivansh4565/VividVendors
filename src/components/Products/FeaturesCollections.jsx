import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import feature from '../Assests/featured.webp';

const FeaturesCollections = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left; // mouse X position
    const y = e.clientY - rect.top;  // mouse Y position

    const rotateY = ((x / rect.width) - 0.5) * 20;  // range: -10deg to 10deg
    const rotateX = ((y / rect.height) - 0.5) * -20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="perspective-[1000px] flex justify-center">
      <section
        className="flex flex-col md:flex-row items-center justify-center bg-[#eaf6ef] rounded-2xl overflow-hidden my-8 mx-auto max-w-6xl min-h-[400px] transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Side: Text */}
        <div className="flex-1 p-10 md:p-16">
          <div className="mb-4 text-gray-700 font-semibold">Comfort and Style</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Apparel made for your everyday life
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Discover high-quality, comfortable clothing that effortlessly blends fashion and function. Designed to make you look and feel great every day.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
        {/* Right Side: Image */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-0">
          <Link to="/collections">
            <img
              src={feature}
              alt="Group in yoga apparel"
              className="rounded-2xl object-cover w-full h-[400px] md:h-[500px] max-w-xl cursor-pointer"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturesCollections;
