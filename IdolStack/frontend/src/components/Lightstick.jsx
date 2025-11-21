import React from "react";

const containerStyle = {
  background: "linear-gradient(135deg, #7EF9FF, #FFB3FD, #FFD6A5)",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
  textAlign: "center",
  color: "#fff",
  fontFamily: "Inter, sans-serif",
};

const titleStyle = {
  fontSize: "2.2rem",
  fontWeight: "700",
  textShadow: "0 0 10px #fff, 0 0 20px #ff6bff",
  marginBottom: "1rem",
};

const textStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.6",
  textShadow: "0 0 5px rgba(255,255,255,0.6)",
};

const Lightstick = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>💡 Create Your Own Lightstick</h1>
      <p style={textStyle}>
        Get ready to light up your fandom!  
        <br />✨ Pick your group  
        <br />🎀 Add charms and accessories  
        <br />🌀 Wrap in style  
        <br />🌈 Choose your glow color  
        <br />💫 Personalize your vibe  
        <br /><br />
        This feature is coming soon — and it’s going to shine!
      </p>
    </div>
  );
};

export default Lightstick;