import React from "react";
import { useNavigate } from "react-router-dom";

const issues = [
  {
    id: 101,
    title: "Overflowing garbage bin in park",
    description: "The garbage bin near Central Park entrance is overflowing for the last 3 days...",
    category: "Garbage",
    location: "Dhaka",
    image: "https://i.ibb.co.com/4ZfhJ0tD/istockphoto-1570261439-612x612.jpg",
  },
  {
    id: 102,
    title: "Illegal construction near river",
    description: "A building is being constructed illegally near the river bank...",
    category: "Illegal Construction",
    location: "Dhaka",
    image: "https://i.ibb.co.com/MyDLrvZG/buriganga-16.jpg",
  },
  {
    id: 103,
    title: "Broken public bench in park",
    description: "The bench in the central park is broken and unsafe for use...",
    category: "Broken Public Property",
    location: "Dhaka",
    image: "https://i.ibb.co.com/jPvP51Z9/istockphoto-2148479468-612x612.jpg",
  },
  {
    id: 104,
    title: "Pothole on main road",
    description: "A large pothole has appeared on the main road near the market...",
    category: "Road Damage",
    location: "Dhaka",
    image: "https://i.ibb.co.com/jPbVQFHp/savar-1-20250710201330-20250710203112.webp",
  },
  {
    id: 105,
    title: "Overflowing garbage bin in school",
    description: "The garbage bin in front of ABC School is overflowing and attracting pests...",
    category: "Garbage",
    location: "Dhaka",
    image: "https://i.ibb.co.com/RkY4M6BB/p5-waste-infront-of-school-photo-by-md-jahidul-islam-3.jpg",
  },
  {
    id: 106,
    title: "Illegal wall construction",
    description: "Someone built a wall on public land without permission...",
    category: "Illegal Construction",
    location: "Dhaka",
    image: "https://i.ibb.co.com/BmFdjFV/66687.jpg",
  },
];

const RecentIssues = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center font-bold mb-6">Issues</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={issue.image}
              alt={issue.title}
              className="w-full h-55 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-800 mb-2">{issue.title}</h3>
              <p className="text-gray-600 mb-2">
                {issue.description.substring(0, 60)}...
              </p>
              <p className="text-sm text-gray-500 mb-2">Category: {issue.category}</p>
              <p className="text-sm text-gray-500 mb-4">Location: {issue.location}</p>
              <button
                onClick={() => navigate(`/issues/${issue.id}`)}
                className="self-start px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentIssues;
