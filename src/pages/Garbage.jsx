import React from "react";

const garbageIssues = [
  {
    id: 101,
    title: "Overflowing garbage bin in Central Park",
    description:
      "The garbage bin near Central Park entrance has been overflowing for the last 3 days, causing foul smell and attracting stray animals.",
    reportedBy: "Saidul Islam",
    location: "Central Park, Dhaka",
    reportedAt: "2025-11-10T08:30:00Z",
    image: "https://via.placeholder.com/600x300?text=Garbage+1",
    severity: "High",
    tags: ["overflow", "public", "urgent"],
  },
  {
    id: 102,
    title: "Garbage scattered on roadside",
    description:
      "Trash is scattered across Main Street, causing obstruction for pedestrians and small vehicles.",
    reportedBy: "Fatima Rahman",
    location: "Main Street, Dhaka",
    reportedAt: "2025-11-09T14:20:00Z",
    image: "https://via.placeholder.com/600x300?text=Garbage+2",
    severity: "Medium",
    tags: ["roadside", "obstruction"],
  },
  {
    id: 103,
    title: "Overflowing bins in market area",
    description:
      "Several bins near New Market area are overflowing, producing bad odor and attracting stray dogs.",
    reportedBy: "Md. Karim",
    location: "New Market, Dhaka",
    reportedAt: "2025-11-08T10:15:00Z",
    image: "https://via.placeholder.com/600x300?text=Garbage+3",
    severity: "Low",
    tags: ["market", "cleanliness"],
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

const GarbageNews = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
        Garbage News & Reports
      </h2>

      <div className="space-y-12">
        {garbageIssues.map((issue) => (
          <div
            key={issue.id}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={issue.image}
                alt={issue.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
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

export default GarbageNews;
