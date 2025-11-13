// src/components/CategorySection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // 👈 AuthContext import

const categories = [
  { title: "Garbage", color: "bg-green-500" },
  { title: "Illegal Construction", color: "bg-red-500" },
  { title: "Broken Public Property", color: "bg-yellow-500" },
  { title: "Road Damage", color: "bg-blue-500" },
];

const CategorySection = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // 👈 user check

  const handleCategoryClick = (category) => {
    if (!user) {
      // ইউজার লগইন না থাকলে Login page এ redirect
      navigate("/login");
      return;
    }

    // ইউজার লগইন থাকলে category অনুযায়ী navigate
    switch (category) {
      case "Garbage":
        navigate("/issues/garbage");
        break;
      case "Illegal Construction":
        navigate("/issues/illegal-construction");
        break;
      case "Broken Public Property":
        navigate("/issues/broken-property");
        break;
      case "Road Damage":
        navigate("/issues/road-damage");
        break;
      default:
        navigate("/issues");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:mx-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {categories.map((cat) => (
        <button
          key={cat.title}
          className={`p-6 rounded-lg text-white flex items-center justify-center ${cat.color} h-32 font-bold text-xl transform transition hover:scale-105 hover:shadow-lg focus:outline-none`}
          onClick={() => handleCategoryClick(cat.title)}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
};

export default CategorySection;
