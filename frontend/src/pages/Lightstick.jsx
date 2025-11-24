// src/pages/Lightstick.jsx
import React from "react";
import Lightstick from "../components/Lightstick";

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1a1a1a",
};

const LightstickPage = () => {
  return (
    <main style={pageStyle}>
      <Lightstick />
    </main>
  );
};

export default LightstickPage;