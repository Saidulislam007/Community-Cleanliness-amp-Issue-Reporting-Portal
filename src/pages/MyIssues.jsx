import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MyIssues() {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const userId = localStorage.getItem("userId"); // assuming it's stored on login

  // Fetch user issues
  useEffect(() => {
    if (!userId) return;
    axios
      .get(`http://localhost:5000/api/issues/user/${userId}`)
      .then((res) => setIssues(res.data))
      .catch((err) => console.error("Error fetching user issues:", err));
  }, [userId]);

  // Handle Update (open modal)
  const handleEditClick = (issue) => {
    setSelectedIssue({ ...issue });
    setEditModalOpen(true);
  };

  // Handle Delete (open confirmation)
  const handleDeleteClick = (issue) => {
    setSelectedIssue(issue);
    setDeleteModalOpen(true);
  };

  // Submit Update
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/issues/${selectedIssue._id}`, selectedIssue)
      .then((res) => {
        setIssues((prev) =>
          prev.map((i) => (i._id === selectedIssue._id ? res.data : i))
        );
        setEditModalOpen(false);
      })
      .catch((err) => console.error("Error updating issue:", err));
  };

  // Confirm Delete
  const confirmDelete = () => {
    axios
      .delete(`http://localhost:5000/api/issues/${selectedIssue._id}`)
      .then(() => {
        setIssues((prev) => prev.filter((i) => i._id !== selectedIssue._id));
        setDeleteModalOpen(false);
      })
      .catch((err) => console.error("Error deleting issue:", err));
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        My Reported Issues
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gradient-to-r from-[#EEAECA] to-[#94BBE9] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.length > 0 ? (
              issues.map((issue) => (
                <tr key={issue._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{issue.title}</td>
                  <td className="py-2 px-4">{issue.category}</td>
                  <td className="py-2 px-4">{issue.amount || "N/A"}</td>
                  <td className="py-2 px-4 capitalize">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        issue.status === "ongoing"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {issue.status || "N/A"}
                    </span>
                  </td>
                  <td className="py-2 px-4 flex space-x-3">
                    <button
                      onClick={() => handleEditClick(issue)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteClick(issue)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No issues reported yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 🔧 Edit Modal */}
      {isEditModalOpen && selectedIssue && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center text-green-700">
              Update Issue
            </h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={selectedIssue.title}
                  onChange={(e) =>
                    setSelectedIssue({
                      ...selectedIssue,
                      title: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={selectedIssue.category}
                  onChange={(e) =>
                    setSelectedIssue({
                      ...selectedIssue,
                      category: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="number"
                  className="w-full border rounded px-3 py-2"
                  value={selectedIssue.amount || ""}
                  onChange={(e) =>
                    setSelectedIssue({
                      ...selectedIssue,
                      amount: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={selectedIssue.status}
                  onChange={(e) =>
                    setSelectedIssue({
                      ...selectedIssue,
                      status: e.target.value,
                    })
                  }
                >
                  <option value="ongoing">Ongoing</option>
                  <option value="ended">Ended</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={selectedIssue.description}
                  onChange={(e) =>
                    setSelectedIssue({
                      ...selectedIssue,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 🗑️ Delete Confirmation Modal */}
      {isDeleteModalOpen && selectedIssue && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-3">
              Are you sure you want to delete this issue?
            </h3>
            <p className="text-gray-600 mb-5">{selectedIssue.title}</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
