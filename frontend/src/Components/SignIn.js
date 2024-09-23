import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {login}  from "../utils/authSlice"

const SignIn = () => {
  const [name, setName] = useState("ajay kumar");
  const [email, setEmail] = useState("ajay@gmail.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "ajay@gmail.com" && password === "password" && name === "ajay kumar") {
      dispatch(login({ name, email }));
      alert("Login successfully");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      setError("Please Enter Valid Detail");
    }
  };

  return (
    <div className="signIn-container">
      <h2>Sign In</h2>
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
            placeholder="Enter your Password"
            value={password}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="text">
          <p>
            Click here to go to <Link to="/signUp">Sign Up</Link>
          </p>
        </div>
        <button className="signIn-button" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
