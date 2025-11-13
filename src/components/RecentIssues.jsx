import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RecentIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/issues/latest")
      .then((res) => setIssues(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Recent Community Issues
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {issues.map((issue) => (
          <div
            key={issue._id}
            className="card bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300"
          >
            <figure>
              <img
                src={issue.image || "https://via.placeholder.com/400"}
                alt={issue.title}
                className="h-48 w-full object-cover rounded-t-xl"
              />
            </figure>

            <div className="card-body p-4">
              <h3 className="card-title text-lg font-semibold text-gray-800">
                {issue.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {issue.description?.slice(0, 80)}...
              </p>

              <div className="mt-2">
                <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                  {issue.category}
                </span>
              </div>

              <p className="text-gray-500 text-sm mt-1">{issue.location}</p>

              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => window.location.href = `/issue/${issue._id}`}
                  className="btn btn-sm bg-gradient-to-r from-[#EEAECA] to-[#94BBE9] text-white hover:opacity-90"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Data */}
      {issues.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No community issues found.
        </p>
      )}
    </div>
  );
}
