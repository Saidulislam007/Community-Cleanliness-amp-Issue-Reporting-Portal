import React, { useState } from "react";

const images = [
  "https://i.ibb.co.com/hFtVrvyc/img-7569-1565079446035-1.webp",
  "https://i.ibb.co.com/5XmP6Hcm/tm-news-9f3b2601-64cf-4960-8cbd-f0a7544c9827.jpg",
  "https://i.ibb.co.com/239hdF0C/1751801138-5334-515678722-710386361918182-3754843977889604729-n.jpg",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="hero min-h-[65vh] mb-10 relative transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${images[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-black/40 p-6 rounded-2xl">
          <h1 className="text-4xl font-bold mb-4">Clean & Green City</h1>
          <p className="mb-6">
            Join our initiative to make your community cleaner and greener.
            Report issues and contribute to a better environment.
          </p>
        </div>
      </div>

      {/* Dots + Buttons */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="btn btn-circle btn-sm bg-white/40 hover:bg-white/70 text-black"
        >
          ❮
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="btn btn-circle btn-sm bg-white/40 hover:bg-white/70 text-black"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
