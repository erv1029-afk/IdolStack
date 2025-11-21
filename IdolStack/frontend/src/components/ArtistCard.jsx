import React, { useState } from "react";
import { Link } from "react-router-dom";

const cardStyle = {
  backgroundColor: "#fff8f0",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  overflow: "hidden",
  width: "100%",
  maxWidth: "250px",
  fontFamily: "Inter, sans-serif",
  transition: "transform 0.3s ease",
  textDecoration: "none",
  color: "inherit",
};

const imageStyle = {
  width: "100%",
  height: "280px",
  objectFit: "cover",
};

const infoStyle = {
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const nameStyle = {
  fontSize: "1.4rem",
  margin: 0,
  color: "#222",
};

const groupStyle = {
  fontSize: "1rem",
  margin: 0,
  color: "#555",
};

const positionStyle = {
  alignSelf: "flex-start",
  backgroundColor: "#FF6B00",
  color: "#fff",
  padding: "0.3rem 0.6rem",
  borderRadius: "6px",
  fontSize: "0.9rem",
  fontWeight: "500",
};

const factStyle = {
  fontSize: "0.85rem",
  color: "#444",
};

const hoverStyle = {
  transform: "scale(1.03)",
};

const ArtistCard = ({ name, group, position, fact }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Slug for routing
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  // Capitalized filename for image
  const imageFile = `${name.replace(/\s+/g, "")}.jpg`; // e.g., "Jisoo.jpg"
  const imagePath = `/images/${imageFile}`;

  const handleImageError = (e) => {
    console.warn(`❌ Could not load image: ${imagePath}`);
    e.target.src = "/fallback.jpg";
  };

  return (
    <Link
      to={`/artist/${slug}`}
      style={{ ...cardStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View profile for ${name}`}
    >
      <img
        src={imagePath}
        alt={`${name} from ${group}`}
        style={imageStyle}
        onError={handleImageError}
      />
      <div style={infoStyle}>
        <h2 style={nameStyle}>{name}</h2>
        <p style={groupStyle}>{group}</p>
        <span style={positionStyle}>{position}</span>
        <p style={factStyle}>{fact}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;