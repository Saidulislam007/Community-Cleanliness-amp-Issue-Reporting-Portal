import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { auth } from "../firebase";

const categories = ["Garbage", "Road Damage", "Public Space", "Other"];

export default function AddIssue() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");

  const userEmail = auth.currentUser?.email; // Firebase Auth থেকে

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail) return toast.error("Please login first");

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
      setTitle(""); setLocation(""); setDescription(""); setImage(""); setAmount("");
      setCategory(categories[0]);
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="max-w-md bg-gray-800 mt-10 pl-15 rounded-2xl  mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Add New Issue</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required className="input input-bordered"/>
        <select value={category} onChange={e => setCategory(e.target.value)} className="select select-bordered">
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>
        <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required className="input input-bordered"/>
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required className="textarea textarea-bordered"/>
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} className="input input-bordered"/>
        <input type="number" placeholder="Amount (optional)" value={amount} onChange={e => setAmount(e.target.value)} className="input input-bordered"/>
        <button type="submit" className="btn btn-primary w-80">Submit</button>
      </form>
    </div>
  );
}
