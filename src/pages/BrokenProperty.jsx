import React from "react";

const brokenIssues = [
  {
    id: 301,
    title: "Broken streetlights on Main Road",
    description:
      "Several streetlights are broken along Main Road, creating dark areas at night. This has raised serious safety concerns among residents and commuters, as the poorly lit areas have become risky for pedestrians, especially women and elderly people. The darkness also provides cover for anti-social activities and increases the chances of theft or accidents. Shopkeepers and local residents have repeatedly reported the issue, but no repairs have been made yet. Immediate maintenance and replacement of faulty streetlights are urgently required to ensure proper visibility, improve public safety, and maintain security for everyone using the road after dark.",
    reportedBy: "Shakil Ahmed",
    location: "Main Road, Dhaka",
    reportedAt: "2025-11-09T19:10:00Z",
    image: "https://i.ibb.co.com/fzYMRQG7/istockphoto-1290085267-612x612.jpg",
    severity: "Medium",
    tags: ["streetlight", "safety"],
  },
  {
    id: 302,
    title: "Damaged benches in park",
    description:
      "Public benches are broken in River Park, causing inconvenience to visitors. Many of the benches have damaged wooden planks and rusted metal frames, making them unsafe to sit on. Elderly people, children, and regular parkgoers are finding it difficult to rest or enjoy their time in the park. The poor condition of these facilities gives a neglected appearance to the area and reduces its appeal as a recreational spot. Visitors have complained to the authorities, but no repair work has been undertaken so far. Immediate restoration and maintenance of the benches are necessary to ensure comfort, safety, and a pleasant environment.",
    reportedBy: "Tania Akter",
    location: "River Park, Dhaka",
    reportedAt: "2025-11-08T08:30:00Z",
    image: "https://i.ibb.co.com/Jwvk9gp6/360-F-192171150-C6-Rjq-ZXTPor14g-XZw-Xw-KEl9-K9j9-WWUZZ.jpg",
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
