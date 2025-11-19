import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { BiasContext } from "../context/BiasContext";

const pageStyle = {
  backgroundColor: "#fff0f5",
  padding: "2rem",
  fontFamily: "Inter, sans-serif",
  color: "#333",
  minHeight: "100vh",
};

const headingStyle = {
  fontSize: "2rem",
  marginBottom: "1rem",
};

const selectStyle = {
  padding: "0.5rem",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "1rem",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  backgroundColor: "#ff4d6d",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginLeft: "1rem",
};

const biasTextStyle = {
  marginTop: "1rem",
  fontStyle: "italic",
};

const linkStyle = {
  display: "inline-block",
  marginTop: "2rem",
  textDecoration: "none",
  color: "#ff4d6d",
  fontWeight: "bold",
};

const BiasPicker = () => {
  const { bias, setBias } = useContext(BiasContext);
  const [selected, setSelected] = useState("");

  const handlePick = () => {
    setBias(selected);
  };

  return (
    <main style={pageStyle}>
      <h1 style={headingStyle}>🎯 Pick Your Bias</h1>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        style={selectStyle}
      >
        <option value="">-- Choose an Idol --</option>
        <option value="Jungkook">Jungkook</option>
        <option value="Lisa">Lisa</option>
        <option value="Felix">Felix</option>
        {/* 🎤 Add more idols here */}
      </select>
      <button onClick={handlePick} style={buttonStyle}>
        Confirm Bias
      </button>

      <p style={biasTextStyle}>
        Current Bias: <strong>{bias || "None selected"}</strong>
      </p>

      <NavLink to="/mbti" style={linkStyle}>
        Compare MBTI →
      </NavLink>
    </main>
  );
};

export default BiasPicker;