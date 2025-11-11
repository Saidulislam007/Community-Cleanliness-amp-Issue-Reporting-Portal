import React from "react";

const roadIssues = [
  {
    id: 401,
    title: "Potholes on Main Street",
    description:
      "Multiple potholes along Main Street are making it dangerous for vehicles and pedestrians. The damaged road surface has caused several minor accidents and traffic congestion, especially during peak hours. During rain, these potholes fill with water, making it hard for drivers to judge their depth, increasing the risk of vehicle damage and slips. Pedestrians also face difficulties crossing the road safely. Local shopkeepers and residents have repeatedly complained, but no repair work has started yet. The concerned authorities should take immediate steps to fix the potholes and ensure regular road maintenance to improve safety and smooth traffic flow in the area.",
    reportedBy: "Rahat Hossain",
    location: "Main Street, Dhaka",
    reportedAt: "2025-11-07T15:20:00Z",
    image: "https://i.ibb.co.com/Qvcq7hW6/132287883-potholes.jpg",
    severity: "High",
    tags: ["pothole", "road", "safety"],
  },
  {
    id: 402,
    title: "Damaged footpath near school",
    description:
      "The footpath near Green Valley School is broken, causing inconvenience to students and parents. Cracked tiles, uneven surfaces, and open drains make it risky to walk, especially for young children and elderly guardians. During rain, the area becomes slippery and waterlogged, increasing the chances of accidents. Parents have expressed concern about the safety of schoolchildren, as many are forced to walk on the main road due to the damaged pavement. Despite repeated complaints, no repair work has been undertaken. The authorities should take immediate action to reconstruct the footpath and ensure a safe, clean, and accessible walkway for everyone.",
    reportedBy: "Nadia Karim",
    location: "Green Valley, Dhaka",
    reportedAt: "2025-11-06T09:50:00Z",
    image: "https://i.ibb.co.com/G45DkXrm/footpaths-thailand-damaged-dangerous-pedestrian-600nw-2236729487.webp",
    severity: "Medium",
    tags: ["footpath", "school"],
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

const RoadDamage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
        Road Damage Reports
      </h2>

      <div className="space-y-12">
        {roadIssues.map((issue) => (
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

export default RoadDamage;
