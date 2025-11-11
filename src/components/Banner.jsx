import { useState } from "react";

const HeroSection = () => {
  const images = [
    "https://i.ibb.co.com/hFtVrvyc/img-7569-1565079446035-1.webp",
    "https://i.ibb.co.com/5XmP6Hcm/tm-news-9f3b2601-64cf-4960-8cbd-f0a7544c9827.jpg",
    "https://i.ibb.co.com/239hdF0C/1751801138-5334-515678722-710386361918182-3754843977889604729-n.jpg",
  ];

  const buttonColors = ["bg-green-500", "bg-yellow-400", "bg-pink-400", "bg-blue-400"];
  const [bgImage, setBgImage] = useState(images[0]);

  return (
    <div className="relative mb-10">
      {/* 🌼 Hero Section */}
      <div
        className="hero min-h-[75vh] bg-cover bg-center transition-all duration-700 rounded-2xl"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="hero-overlay bg-white/60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse relative z-10">
          <img
            src="https://i.ibb.co.com/tpjm4Y4g/clean1.webp "
            alt="Indoor Plant"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-green-800 drop-shadow-lg">
              Clean City
            </h1>
            <h1 className="text-3xl font-bold text-green-800 drop-shadow-lg">Smart City Solutions</h1>
            <p className="py-6 text-xl text-gray-800 font-medium">
              Join our initiative to make your community cleaner and greener.
            Report issues and contribute to a better environment.
            </p>
          </div>
        </div>

        {/* 🌿 Dotted Image Change Buttons */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
          {images.map((img, index) => (
            <button
              key={index}
              className={`w-5 h-5 rounded-full border-2 border-white ${buttonColors[index]} transition-transform hover:scale-125`}
              onClick={() => setBgImage(img)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
