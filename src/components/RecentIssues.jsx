import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RecentIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/issues/latest")
      .then(res => setIssues(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Recent Community Issues</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {issues.map(issue => (
          <div key={issue._id} className="card bg-base-100 shadow-xl border border-gray-200">
            <figure>
              <img src={issue.image || "https://via.placeholder.com/400"} alt={issue.title} className="h-48 w-full object-cover"/>
            </figure>
            <div className="card-body">
              <h3 className="card-title">{issue.title}</h3>
              <p>{issue.description.slice(0,80)}...</p>
              <p className="text-green-600 font-semibold">{issue.category}</p>
              <p className="text-gray-500 text-sm">{issue.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
