import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      return "All fields are required";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Email address is invalid.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const user = { name, email, password };

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful", data);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      } else {
        console.log("Signup error", data);
        setError(data.message || "An error occurred during signup");
      }
    } catch (error) {
      console.error("Network error", error);
      setError("A network error occurred. Please try again later.");
    }
  };

  return (
    <div className="signIn-container">
      <div className="form-heading">
      <h2>Sign Up</h2>
      </div>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            value={password}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password: </label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Your Password"
            value={confirmPassword}
          />
        </div>
        <div className="text">
          <p>Already signed up? Click here to <Link to="/login">Sign In</Link></p>
        </div>
        <button className="signIn-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
