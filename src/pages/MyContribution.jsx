import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../firebase";
import { toast } from "react-hot-toast";

export default function MyContribution() {
  const [contributions, setContributions] = useState([]);
  const userEmail = auth.currentUser?.email;

  useEffect(() => {
    if (userEmail) {
      axios.get(`http://localhost:5000/api/contributions/user/${userEmail}`)
        .then(res => setContributions(res.data))
        .catch(err => console.error(err));
    }
  }, [userEmail]);

  // 🔽 Download contribution report as PDF
  const handleDownload = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/contributions/report/${id}`, {
        responseType: "blob", // important for file download
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `contribution_report_${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      toast.success("PDF report downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download report");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-4">My Contributions</h2>
      <p className="text-gray-600 text-center mb-6">
        All your clean-up contributions are listed below.
      </p>

      {contributions.length > 0 ? (
        <table className="table-auto w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Issue Title</th>
              <th className="p-2">Category</th>
              <th className="p-2">Paid Amount</th>
              <th className="p-2">Date</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {contributions.map((c) => (
              <tr key={c._id} className="text-center border-t hover:bg-gray-50">
                <td className="p-2">{c.title}</td>
                <td className="p-2">{c.category}</td>
                <td className="p-2 text-green-600 font-semibold">${c.amount}</td>
                <td className="p-2">{new Date(c.date).toLocaleDateString()}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDownload(c._id)}
                    className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Download Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500 mt-6 text-center">
          You haven,t made any contributions yet.
        </p>
      )}
    </div>
  );
}
