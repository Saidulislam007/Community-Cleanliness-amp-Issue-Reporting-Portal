import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../firebase";

export default function MyContribution() {
  const [contributions, setContributions] = useState([]);
  const userEmail = auth.currentUser?.email;

  useEffect(() => {
    if (userEmail) {
      axios.get(`http://localhost:5000/api/contributions/user/${userEmail}`)
        .then(res => setContributions(res.data))
        .catch(console.error);
    }
  }, [userEmail]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-4">My Contributions</h2>
      <p className="text-gray-600 mb-6">All your clean-up contributions are listed below.</p>

      {contributions.length > 0 ? (
        <table className="table-auto w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Issue</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {contributions.map((c) => (
              <tr key={c._id} className="text-center border-t">
                <td className="p-2">{c.title}</td>
                <td className="p-2 text-green-600 font-semibold">${c.amount}</td>
                <td className="p-2">{new Date(c.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500 mt-6 text-center">You haven’t made any contributions yet.</p>
      )}
    </div>
  );
}
