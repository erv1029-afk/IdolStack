import React from "react";

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #7EF9FF, #FFB3FD, #FFD6A5)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Inter, sans-serif",
  color: "#fff",
  textAlign: "center",
  padding: "2rem",
};

const glowText = {
  fontSize: "2.5rem",
  fontWeight: "700",
  textShadow: "0 0 10px #fff, 0 0 20px #ff6bff, 0 0 30px #ff6bff",
  marginBottom: "1rem",
};

const subText = {
  fontSize: "1.2rem",
  maxWidth: "600px",
  lineHeight: "1.6",
  textShadow: "0 0 5px rgba(255,255,255,0.6)",
};

const Lightstick = () => {
  return (
    <div style={pageStyle}>
      <h1 style={glowText}>💡 Create Your Own Lightstick</h1>
      <p style={subText}>
        Get ready to light up your fandom!  
        <br />
        ✨ Pick your group  
        <br />
        🎀 Add charms and accessories  
        <br />
        🌀 Wrap in style  
        <br />
        🌈 Choose your glow color  
        <br />
        💫 Personalize your vibe  
        <br />
        <br />
        This feature is coming soon — and it’s going to shine!
      </p>
    </div>
  );
};

export default Lightstick;