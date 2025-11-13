import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { auth } from "../firebase";
import { useParams } from "react-router-dom";

export default function IssueDetail() {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);
  const [contributors, setContributors] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    amount: "",
    contributorName: "",
    phone: "",
    address: "",
    additionalInfo: "",
  });

  const userEmail = auth.currentUser?.email;

  useEffect(() => {
    axios.get(`http://localhost:5000/api/issues/${id}`)
      .then(res => setIssue(res.data))
      .catch(console.error);

    axios.get(`http://localhost:5000/api/contributions/${id}`)
      .then(res => setContributors(res.data))
      .catch(console.error);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...form,
        issueId: id,
        title: issue.title,
        email: userEmail,
      };
      await axios.post("http://localhost:5000/api/contributions", data);
      toast.success("Contribution submitted successfully!");
      setShowModal(false);
      setForm({ amount: "", contributorName: "", phone: "", address: "", additionalInfo: "" });
      // refresh contributors
      const updated = await axios.get(`http://localhost:5000/api/contributions/${id}`);
      setContributors(updated.data);
    } catch (err) {
      console.log(err)
      toast.error("Error submitting contribution");
    }
  };

  if (!issue) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-4">{issue.title}</h2>
      <p className="text-gray-700 mb-4">{issue.description}</p>

      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Pay Clean-Up Contribution
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Contribute to Cleanup</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" value={issue.title} readOnly className="input input-bordered w-full" />
              <input type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({...form, amount: e.target.value})} required className="input input-bordered w-full" />
              <input type="text" placeholder="Your Name" value={form.contributorName} onChange={(e) => setForm({...form, contributorName: e.target.value})} required className="input input-bordered w-full" />
              <input type="email" value={userEmail || ""} readOnly className="input input-bordered w-full" />
              <input type="text" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} required className="input input-bordered w-full" />
              <input type="text" placeholder="Address" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} required className="input input-bordered w-full" />
              <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
              <textarea placeholder="Additional Info (optional)" value={form.additionalInfo} onChange={(e) => setForm({...form, additionalInfo: e.target.value})} className="textarea textarea-bordered w-full" />
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={() => setShowModal(false)} className="btn">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contributors Table */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Contributors</h3>
        <table className="table-auto w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {contributors.length > 0 ? (
              contributors.map((c) => (
                <tr key={c._id} className="text-center border-t">
                  <td className="p-2">
                    <img src={c.contributorImage} alt={c.contributorName} className="w-10 h-10 rounded-full mx-auto" />
                  </td>
                  <td className="p-2">{c.contributorName}</td>
                  <td className="p-2 text-green-600 font-semibold">${c.amount}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="3" className="text-gray-500 p-4">No contributors yet</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
