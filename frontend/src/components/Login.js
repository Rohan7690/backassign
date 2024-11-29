import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate}  from "react-router-dom";

const Login = ({ setToken }) => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      setToken(res.data.token);
      setMessage("Login successful");
        navigate("/dashboard");
    } catch (err) {
      setMessage(err.response.data.error || "Login failed");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      
      {message && <p>{message}</p>}
      <div style={{ marginTop: "20px" }}>
        <p>Don't have an account?</p>
        <Link
          to="/register"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            textDecoration: "none",
            color: "white",
            backgroundColor: "#007bff",
            borderRadius: "5px",
          }}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
