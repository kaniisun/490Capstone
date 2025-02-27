import React, { useState } from "react";
import { supabase } from "./supabaseClient"; // Import Supabase client
import "./SignUp.css";

// SignUp.js
function SignUp() {
  // State for form fields and feedback
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error
    setSuccess(false); // Reset success

    // Validate email domain
    if (!email.toLowerCase().endsWith("@uncg.edu")) {
      setError("Please use a UNCG email address (ending with @uncg.edu).");
      return;
    }

    try {
      // Sign up with Supabase Authentication
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        throw authError;
      }

      const user = data.user; // Get the authenticated user

      // Insert additional user data into the 'users' table
      const { error: insertError } = await supabase.from("users").insert([
        {
          userID: user.id, // Match the authenticated user's ID
          email: email,
          firstName: firstName,
          lastName: lastName,
          accountStatus: "active", // Default status, adjust as needed
          created_at: new Date().toISOString(), // Current timestamp
        },
      ]);

      if (insertError) {
        throw insertError;
      }

      setSuccess(true); // Indicate successful sign-up
    } catch (err) {
      setError(err.message); // Display any errors (auth or insertion)
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        {success ? (
          <p className="success">
            Sign-up successful! Welcome, {firstName} {lastName}.
          </p>
        ) : (
          <>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </>
        )}
      </form>
    </div>
  );
}

export default SignUp;
