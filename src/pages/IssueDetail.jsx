import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { auth } from "../firebase";

export default function IssueDetail() {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);
  const [contributors, setContributors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: auth.currentUser?.email || "",
    phone: "",
    address: "",
    info: "",
  });

  // Fetch single issue data
  useEffect(() => {
    axios.get(`http://localhost:5000/api/issues/${id}`)
      .then(res => setIssue(res.data))
      .catch(err => console.error(err));
  }, [id]);

  // Fetch contributors for this issue
  useEffect(() => {
    axios.get(`http://localhost:5000/api/contributions/${id}`)
      .then(res => setContributors(res.data))
      .catch(err => console.error(err));
  }, [id]);

  // Handle input change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = {
        issueId: id,
        title: issue.title,
        ...formData,
        date: new Date().toLocaleString(),
      };

      await axios.post("http://localhost:5000/api/contributions", data);
      toast.success("Contribution submitted successfully!");
      setShowModal(false);
      setFormData({
        amount: "",
        name: "",
        email: auth.currentUser?.email || "",
        phone: "",
        address: "",
        info: "",
      });
      // Refresh contributors list
      const res = await axios.get(`http://localhost:5000/api/contributions/${id}`);
      setContributors(res.data);
    } catch (err) {
      console.log(err)
      toast.error("Failed to submit contribution!");
    }
  };

  if (!issue) return <p className="text-center mt-10">Loading issue details...</p>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Issue Info */}
      <div className="bg-white shadow-xl rounded-xl p-6 mb-8">
        <img
          src={issue.image || "https://via.placeholder.com/800x400"}
          alt={issue.title}
          className="rounded-xl mb-4"
        />
        <h2 className="text-3xl font-bold text-green-700">{issue.title}</h2>
        <p className="text-gray-600 mt-2">{issue.description}</p>
        <p className="text-green-600 mt-2 font-semibold">Category: {issue.category}</p>
        <p className="text-gray-500">📍 {issue.location}</p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-4 btn bg-gradient-to-r from-green-500 to-blue-500 text-white border-none"
        >
          💰 Pay Clean-Up Contribution
        </button>
      </div>

      {/* Contributors Table */}
      <div className="bg-gray-100 shadow-lg rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Contributors</h3>
        {contributors.length > 0 ? (
          <table className="table w-full">
            <thead>
              <tr className="bg-green-200 text-gray-700">
                <th>Image</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {contributors.map((c, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td>
                    <img
                      src={c.image || "https://via.placeholder.com/40"}
                      alt="contributor"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td>{c.name}</td>
                  <td className="text-green-600 font-semibold">${c.amount}</td>
                  <td className="text-gray-500">{c.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No contributions yet.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Pay Clean-Up Contribution</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                value={issue.title}
                readOnly
                className="input input-bordered"
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="input input-bordered"
              />
              <input
                type="text"
                name="name"
                placeholder="Contributor Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input input-bordered"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="input input-bordered"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input input-bordered"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="input input-bordered"
              />
              <p className="text-gray-500 text-sm">
                Date: {new Date().toLocaleDateString()}
              </p>
              <textarea
                name="info"
                placeholder="Additional info (optional)"
                value={formData.info}
                onChange={handleChange}
                className="textarea textarea-bordered"
              ></textarea>

              <div className="flex justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-green-600 text-white border-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
