import React from "react";

const brokenIssues = [
  {
    id: 301,
    title: "Broken streetlights on Main Road",
    description:
      "Several streetlights are broken along Main Road, creating dark areas at night.",
    reportedBy: "Shakil Ahmed",
    location: "Main Road, Dhaka",
    reportedAt: "2025-11-09T19:10:00Z",
    image: "https://via.placeholder.com/600x300?text=Broken+Property+1",
    severity: "Medium",
    tags: ["streetlight", "safety"],
  },
  {
    id: 302,
    title: "Damaged benches in park",
    description:
      "Public benches are broken in River Park, causing inconvenience to visitors.",
    reportedBy: "Tania Akter",
    location: "River Park, Dhaka",
    reportedAt: "2025-11-08T08:30:00Z",
    image: "https://via.placeholder.com/600x300?text=Broken+Property+2",
    severity: "Low",
    tags: ["bench", "park"],
  },
];

const formatDate = (dateStr) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

const severityColors = {
  High: "bg-red-500 text-white",
  Medium: "bg-yellow-400 text-black",
  Low: "bg-green-500 text-white",
};

const BrokenProperty = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
        Broken Public Property Reports
      </h2>

      <div className="space-y-12">
        {brokenIssues.map((issue) => (
          <div
            key={issue.id}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="md:w-1/2">
              <img
                src={issue.image}
                alt={issue.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 hover:underline cursor-pointer">
                  {issue.title}
                </h3>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${severityColors[issue.severity]}`}
                  >
                    {issue.severity}
                  </span>
                  {issue.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-gray-700 text-lg">{issue.description}</p>
              </div>
              <div className="mt-6 text-gray-500 text-sm flex flex-wrap gap-6">
                <span>Reporter: {issue.reportedBy}</span>
                <span>Location: {issue.location}</span>
                <span>Date: {formatDate(issue.reportedAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrokenProperty;
