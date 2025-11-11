import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const VolunteerJoinSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "volunteer_contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSuccess("🎉 Thank you for contacting us!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setSuccess("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-gray-800 shadow-2xl backdrop-blur-md rounded-2xl w-full max-w-4xl p-10 border border-white/40">
        <h2 className="text-4xl font-bold text-center text-gray-400 mb-8">
          Contact My Clean City
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="flex flex-col text-gray-900 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-100 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-100 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-100 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              name="organization"
              type="text"
              placeholder="Organization"
              value={formData.organization}
              onChange={handleChange}
              className="bg-gray-100 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Right column */}
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            rows="8"
            className="bg-gray-100 text-gray-900 p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none resize-none"
          ></textarea>

          {/* Checkbox */}
          <div className="md:col-span-2 flex items-center gap-2 mt-2">
            <input type="checkbox" required className="w-4 h-4 accent-blue-500" />
            <p className="text-sm text-gray-600">
              I have read My Clean City's{" "}
              <a href="#" className="text-blue-600 underline">
                privacy policy
              </a>{" "}
              and agree to the terms and conditions.
            </p>
          </div>

          {/* Submit button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300 ${
                loading && "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {success && (
          <p
            className={`text-center mt-4 font-medium ${
              success.startsWith("🎉") ? "text-green-600" : "text-red-600"
            }`}
          >
            {success}
          </p>
        )}
      </div>
    </div>
  );
};

export default VolunteerJoinSection;
