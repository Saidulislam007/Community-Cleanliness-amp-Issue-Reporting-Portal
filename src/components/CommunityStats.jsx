// src/components/CommunityStats.jsx
import React from "react";

const stats = [
  { title: "Total Users", value: 1250, color: "bg-green-500" },
  { title: "Issues Resolved", value: 842, color: "bg-blue-500" },
  { title: "Issues Pending", value: 158, color: "bg-red-500" },
];

const CommunityStats = () => {
  return (
    <section className=" py-12 mb-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Community Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className={`${stat.color} text-white shadow rounded-lg py-6 px-4 transform hover:scale-105 hover:shadow-lg transition`}
            >
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="mt-2">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
