import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function IssueDetail() {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/issues/${id}`)
      .then(res => setIssue(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!issue) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">{issue.title}</h2>
      <img src={issue.image} className="w-full rounded-lg mt-4" />
      <p className="mt-4">{issue.description}</p>
    </div>
  );
}
