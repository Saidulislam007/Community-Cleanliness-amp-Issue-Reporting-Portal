// src/components/CommunityStats.jsx
import React from "react";

const stats = [
  { title: "Total Users", value: 1250 },
  { title: "Issues Resolved", value: 842 },
  { title: "Issues Pending", value: 158 },
];

const CommunityStats = () => {
  return (
    <section className="bg-gray-100 py-12 mb-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Community Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white shadow rounded-lg py-6 px-4 hover:shadow-lg transition"
            >
              <p className="text-4xl font-bold text-green-800">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
