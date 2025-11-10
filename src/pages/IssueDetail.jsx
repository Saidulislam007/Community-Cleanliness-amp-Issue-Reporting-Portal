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
    image: "https://i.ibb.co.com/4ZfhJ0tD/istockphoto-1570261439-612x612.jpg",
    reportedBy: "Saidul Islam",
  },
  {
    id: 102,
    title: "Illegal construction near river",
    description:
      "A building is being constructed illegally near the river bank. Immediate action is required to prevent damage to the ecosystem.",
    category: "Illegal Construction",
    location: "Dhaka",
    image: "https://i.ibb.co.com/MyDLrvZG/buriganga-16.jpg",
    reportedBy: "John Doe",
  },
  {
    id: 103,
    title: "Broken public bench in park",
    description:
      "The bench in the central park is broken and unsafe for use. Needs repair urgently.",
    category: "Broken Public Property",
    location: "Dhaka",
    image: "https://i.ibb.co.com/jPvP51Z9/istockphoto-2148479468-612x612.jpg",
    reportedBy: "Jane Doe",
  },
  {
    id: 104,
    title: "Pothole on main road",
    description:
      "A large pothole has appeared on the main road near the market. Vehicles are at risk.",
    category: "Road Damage",
    location: "Dhaka",
    image: "https://i.ibb.co.com/jPbVQFHp/savar-1-20250710201330-20250710203112.webp",
    reportedBy: "Alice",
  },
  {
    id: 105,
    title: "Overflowing garbage bin in school",
    description:
      "The garbage bin in front of ABC School is overflowing and attracting pests.",
    category: "Garbage",
    location: "Dhaka",
    image: "https://i.ibb.co.com/RkY4M6BB/p5-waste-infront-of-school-photo-by-md-jahidul-islam-3.jpg",
    reportedBy: "Bob",
  },
  {
    id: 106,
    title: "Illegal wall construction",
    description:
      "Someone built a wall on public land without permission. Needs legal action.",
    category: "Illegal Construction",
    location: "Dhaka",
    image: "https://i.ibb.co.com/BmFdjFV/66687.jpg",
    reportedBy: "Charlie",
  },
];

const IssueDetail = () => {
  const { id } = useParams();
  const issue = allIssues.find((i) => i.id === parseInt(id));

  if (!issue) return <p className="text-center mt-10">Issue not found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{issue.title}</h2>
      <img
        src={issue.image}
        alt={issue.title}
        className="w-150 h-110 object-cover rounded mb-6"
      />
      <p className="text-white mb-2">
        <strong>Description:</strong> {issue.description}
      </p>
      <p className="text-white mb-2">
        <strong>Category:</strong> {issue.category}
      </p>
      <p className="text-white mb-2">
        <strong>Location:</strong> {issue.location}
      </p>
      <p className="text-white mb-2">
        <strong>Reported By:</strong> {issue.reportedBy}
      </p>
    </div>
  );
};

export default IssueDetail;
