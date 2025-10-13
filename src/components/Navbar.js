import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged

function Navbar() {
  const navigate = useNavigate();
  // 1. Add state to track the user/login status
  const [user, setUser] = useState(null);

  // 2. Use useEffect to listen for authentication state changes
  useEffect(() => {
    // This function subscribes to the auth state and returns a function to unsubscribe
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // currentUser will be the user object if logged in, or null if logged out
      setUser(currentUser);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // user state is automatically set to null by the onAuthStateChanged listener
        alert("You have been signed out!");
        navigate("/"); // redirect to login page
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#f0f0f0" }}>
      <div>
        {/* Render Home link always, or based on your app's requirement */}
        <Link to="/home">Home</Link>
        {user ? (
          // 3. IF the user is logged in (user is NOT null)
          <>
            <span style={{ marginLeft: "10px" }}>| Logged in as: {user.email}</span>
            <button onClick={handleSignOut} style={{ marginLeft: "10px" }}>
              Sign Out
            </button>
          </>
        ) : (
          // 4. ELSE (user is null / NOT logged in)
          <>
            <span style={{ margin: "0 5px" }}>|</span>
            <Link to="/">Login</Link>
            <span style={{ margin: "0 5px" }}>|</span>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;