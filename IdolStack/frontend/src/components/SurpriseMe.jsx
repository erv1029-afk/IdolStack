import React, { useState } from "react";

const facts = [
  "Felix has freckles and a deep voice.",
  "Jisoo calms others before herself.",
  "Yechan holds a black belt in taekwondo.",
  "Karina was discovered via Instagram DMs.",
  "Hongjoong customizes his own clothes.",
  "Jennie speaks fluent English, Korean, and some Japanese.",
  "Hunter won medals in golf competitions before becoming an idol.",
];

const buttonStyle = {
  padding: "0.8rem 1.5rem",
  fontSize: "1rem",
  borderRadius: "8px",
  backgroundColor: "#ff6bff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 0 10px #ff6bff",
  transition: "transform 0.2s ease",
};

const factStyle = {
  marginTop: "1rem",
  fontSize: "1.1rem",
  color: "#fff",
  textShadow: "0 0 5px rgba(255,255,255,0.6)",
};

const SurpriseMe = () => {
  const [surprise, setSurprise] = useState("");

  const handleClick = () => {
    const random = facts[Math.floor(Math.random() * facts.length)];
    setSurprise(random);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <button
        onClick={handleClick}
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        🎁 Surprise Me
      </button>
      {surprise && <p style={factStyle}>{surprise}</p>}
    </div>
  );
};

export default SurpriseMe;