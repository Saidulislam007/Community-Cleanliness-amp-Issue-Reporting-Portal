import React from "react";

const illegalIssues = [
  {
    id: 201,
    title: "Unauthorized building near River Park",
    description:
      "Construction is happening without permits near River Park, affecting local drainage and safety. The ongoing work has blocked parts of the drainage system, causing waterlogging during rain. Residents fear that this unapproved construction may weaken nearby structures and increase the risk of accidents. The noise and dust from the site are also creating disturbances for people living in the neighborhood. Many locals have complained to the authorities, but no visible action has been taken yet. Immediate inspection and intervention are necessary to stop illegal activities, ensure public safety, and restore proper drainage and environmental balance in the area.",
    reportedBy: "Sadia Akter",
    location: "River Park, Dhaka",
    reportedAt: "2025-11-09T11:20:00Z",
    image: "https://i.ibb.co.com/qMvNpmFN/1603723516.jpg",
    severity: "High",
    tags: ["unauthorized", "construction", "safety"],
  },
  {
    id: 202,
    title: "Illegal shop extension on main street",
    description:
      "Shop owners have extended their shops illegally on the sidewalk, obstructing pedestrians. This illegal encroachment has made it extremely difficult for people to walk safely, especially during busy hours. The footpath, meant for public use, is now occupied with goods, display racks, and temporary stalls. As a result, pedestrians are forced to walk on the road, increasing the risk of accidents. Local residents and commuters have repeatedly complained, but no strict action has been taken yet. The authorities must intervene immediately to remove these encroachments and restore the sidewalks for public safety, smooth movement, and proper urban management.",
    reportedBy: "Rashed Khan",
    location: "Main Street, Dhaka",
    reportedAt: "2025-11-08T09:50:00Z",
    image: "https://i.ibb.co.com/hx5F5wHG/Footpath-shops-7489ca6a1d3efafc481ce8bd5f843d3e.jpg",
    severity: "Medium",
    tags: ["sidewalk", "obstruction"],
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

const IllegalConstruction = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
        Illegal Construction Reports
      </h2>

      <div className="space-y-12">
        {illegalIssues.map((issue) => (
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

export default IllegalConstruction;
