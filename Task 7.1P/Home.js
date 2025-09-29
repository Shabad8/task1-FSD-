import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to DEV@Deakin</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
