import React, { useState } from "react";
import { db } from "../firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const VolunteerJoinSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleJoin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addDoc(collection(db, "volunteers"), {
        name,
        email,
        joinedAt: serverTimestamp(),
      });
      setMessage("🎉 Thank you for joining! You’re now a community volunteer.");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding volunteer:", error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-green-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-3">
          Join Our Community Clean Drive
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Become a volunteer and help make your city cleaner, greener, and better!
        </p>

        <form
          onSubmit={handleJoin}
          className="flex flex-col md:flex-row justify-center text-green-800 items-center gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded border w-72 focus:ring-2 focus:ring-green-400 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded border w-72 focus:ring-2 focus:ring-green-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 text-white rounded ${
              loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            } transition`}
          >
            {loading ? "Joining..." : "Join Now"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 ${
              message.startsWith("🎉") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default VolunteerJoinSection;
