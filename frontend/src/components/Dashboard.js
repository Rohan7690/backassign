import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ token }) => {
  const [message, setMessage] = useState("");
    const navigate = useNavigate();

  const fetchResource = async (endpoint) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/resources/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.message || "Access denied");
    }
  };

  const styles = {
    container: {
      width: "80%",
      margin: "50px auto",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      margin: "10px",
      cursor: "pointer",
      fontSize: "16px",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
    heading: {
      textAlign: "center",
      color: "#333",
    },
    paragraph: {
      textAlign: "center",
      fontSize: "16px",
      color: "#555",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
       <div style={{display:'flex',justifyContent:'space-between'}}>
      <h2 style={styles.heading}>Dashboard</h2>
      <button style={{backgroundColor:'red'}} onClick={()=>{navigate('/login')}}>Logout</button>
      </div>
      <button
        style={styles.button}
        onClick={() => fetchResource("admin")}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Admin Resource
      </button>
      <button
        style={styles.button}
        onClick={() => fetchResource("moderator")}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Moderator Resource
      </button>
      <button
        style={styles.button}
        onClick={() => fetchResource("user")}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        User Resource
      </button>
      {message && <p style={styles.paragraph}>{message}</p>}
    </div>
  );
};

export default Dashboard;
