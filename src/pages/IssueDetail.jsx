import React from "react";
import { useParams } from "react-router-dom";

const allIssues = [
  {
    id: 101,
    title: "Overflowing garbage bin in park",
    description:
      "The garbage bin near Central Park entrance is overflowing for the last 3 days, causing foul smell and attracting stray animals.",
    category: "Garbage",
    location: "Dhaka",
    image: "https://i.ibb.co/DHbSXCfx/default.jpg",
    reportedBy: "Saidul Islam",
  },
  {
    id: 102,
    title: "Illegal construction near river",
    description:
      "A building is being constructed illegally near the river bank. Immediate action is required to prevent damage to the ecosystem.",
    category: "Illegal Construction",
    location: "Dhaka",
    image: "https://i.ibb.co/DHbSXCfx/default.jpg",
    reportedBy: "John Doe",
  },
  {
    id: 103,
    title: "Broken public bench in park",
    description:
      "The bench in the central park is broken and unsafe for use. Needs repair urgently.",
    category: "Broken Public Property",
    location: "Dhaka",
    image: "https://i.ibb.co/jPvP51Z9/istockphoto-2148479468-612x612.jpg",
    reportedBy: "Jane Doe",
  },
  {
    id: 104,
    title: "Pothole on main road",
    description:
      "A large pothole has appeared on the main road near the market. Vehicles are at risk.",
    category: "Road Damage",
    location: "Dhaka",
    image: "https://i.ibb.co/jPbVQFHp/savar-1-20250710201330-20250710203112.webp",
    reportedBy: "Alice",
  },
  {
    id: 105,
    title: "Overflowing garbage bin in school",
    description:
      "The garbage bin in front of ABC School is overflowing and attracting pests.",
    category: "Garbage",
    location: "Dhaka",
    image: "https://i.ibb.co/RkY4M6BB/p5-waste-infront-of-school-photo-by-md-jahidul-islam-3.jpg",
    reportedBy: "Bob",
  },
  {
    id: 106,
    title: "Illegal wall construction",
    description:
      "Someone built a wall on public land without permission. Needs legal action.",
    category: "Illegal Construction",
    location: "Dhaka",
    image: "https://i.ibb.co/BmFdjFV/66687.jpg",
    reportedBy: "Charlie",
  },
];

const IssueDetail = () => {
  const { id } = useParams();
  const issue = allIssues.find((i) => i.id === parseInt(id));

  if (!issue)
    return <p className="text-center text-red-500 mt-10">Issue not found ⚠️</p>;

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-6 p-6">
        
        {/* Image Section */}
        <div>
          <img
            src={issue.image}
            alt={issue.title}
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center text-gray-800">
          <h2 className="text-3xl font-bold text-green-800 mb-4">{issue.title}</h2>
          
          <p className="text-gray-600 mb-4">
            <span className="font-semibold text-green-700">Description: </span>
            {issue.description}
          </p>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold text-green-700">Category: </span>
            {issue.category}
          </p>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold text-green-700">Location: </span>
            {issue.location}
          </p>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold text-green-700">Reported By: </span>
            {issue.reportedBy}
          </p>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg w-fit shadow transition">
            Mark as Resolved
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssueDetail;
