import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddIssue = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // ✅ POST Request Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title,
        category,
        location,
        description,
        image,
        amount,
        email: userEmail,
      };

      await axios.post("http://localhost:5000/api/issues", data);
      toast.success("Issue submitted successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-base-200 shadow-lg p-6 rounded-2xl mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
        Add New Issue
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="text"
          placeholder="Issue Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded-md"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded-md"
          required
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-2 rounded-md"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="w-full border p-2 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default AddIssue;
