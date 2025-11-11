import React from "react";

const garbageIssues = [
  {
    id: 101,
    title: "Overflowing garbage bin in Central Park",
    description:
      "The garbage bin near the Central Park entrance has been overflowing for the last three days, causing a foul smell and attracting stray animals. This situation is creating an unhygienic environment and inconvenience for the visitors. The waste is spilling onto the pavement, making it difficult for pedestrians to pass by. Local residents have complained about the unpleasant odor and fear that it may lead to the spread of diseases. Authorities are requested to take immediate action and ensure regular cleaning and proper waste disposal to maintain cleanliness in the area.",
    reportedBy: "Saidul Islam",
    location: "Central Park, Dhaka",
    reportedAt: "2025-11-10T08:30:00Z",
    image: "https://i.ibb.co.com/DHbSXCfx/default.jpg",
    severity: "High",
    tags: ["overflow", "public", "urgent"],
  },
  {
    id: 102,
    title: "Garbage scattered on roadside",
    description:
      "Trash is scattered across Main Street, causing obstruction for pedestrians and small vehicles. The situation has worsened over the past few days, as garbage remains uncollected and continues to pile up along the roadside. The foul odor is spreading through the area, making it uncomfortable for shop owners and residents nearby. Stray dogs and birds are tearing open plastic bags, spreading more waste around. This not only affects the beauty of the street but also poses serious health risks. Immediate cleaning and regular waste management are urgently needed to restore hygiene and ensure a clean and safe environment for everyone.",
    reportedBy: "Fatima Rahman",
    location: "Main Street, Dhaka",
    reportedAt: "2025-11-09T14:20:00Z",
    image: "https://i.ibb.co.com/TDD2H137/1.webp",
    severity: "Medium",
    tags: ["roadside", "obstruction"],
  },
  {
    id: 103,
    title: "Overflowing bins in market area",
    description:
      "Several bins near the New Market area are overflowing, producing a bad odor and attracting stray dogs. The uncollected garbage has started spreading onto the streets, making it difficult for pedestrians and shoppers to move around. Vendors and local shopkeepers are complaining about the unhygienic conditions affecting their business and driving customers away. The stagnant waste is also attracting flies and mosquitoes, raising serious health and sanitation concerns. If not cleaned soon, it could lead to the spread of infections and diseases. The municipal authorities are urged to take immediate action to clear the garbage and maintain regular waste collection.",
    reportedBy: "Md. Karim",
    location: "New Market, Dhaka",
    reportedAt: "2025-11-08T10:15:00Z",
    image: "https://i.ibb.co.com/bGDcQwH/large-overflowing-wheeled-trash-can-footage-125695032-iconl.webp",
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
