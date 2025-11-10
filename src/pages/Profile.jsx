import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebase";

const db = getFirestore(app);

const Profile = () => {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      };
      fetchUserData();
    }
  }, [user]);

  if (!userData) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="container mx-auto p-6 max-w-md bg-white rounded shadow mt-6">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={userData.photoURL || "https://i.pravatar.cc/150"}
          alt={userData.name}
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <h2 className="text-2xl font-bold">{userData.name}</h2>
        <p className="text-gray-600">{userData.email}</p>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 mt-4 w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
