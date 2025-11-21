import React, { useState } from "react";
import { Link } from "react-router-dom";

// 📸 Photocard styling
const cardStyle = {
  backgroundColor: "#fff8f0",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  overflow: "hidden",
  width: "160px",
  fontFamily: "Inter, sans-serif",
  transition: "transform 0.3s ease",
  textDecoration: "none",
  color: "inherit",
};

const imageStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
};

const infoStyle = {
  padding: "0.8rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};

const nameStyle = {
  fontSize: "1.1rem",
  margin: 0,
  color: "#222",
};

const groupStyle = {
  fontSize: "0.9rem",
  margin: 0,
  color: "#555",
};

const positionStyle = {
  alignSelf: "flex-start",
  backgroundColor: "#FF6B00",
  color: "#fff",
  padding: "0.2rem 0.5rem",
  borderRadius: "5px",
  fontSize: "0.75rem",
  fontWeight: "500",
};

const factStyle = {
  fontSize: "0.75rem",
  color: "#444",
};

const hoverStyle = {
  transform: "scale(1.03)",
};

const ArtistCard = ({ name, group, position, image, fact }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = (e) => {
    const fallbackPath = "/fallback.jpg";
    if (!e.target.src.includes(fallbackPath)) {
      console.warn(`❌ Could not load image: ${image}`);
      e.target.src = fallbackPath;
    }
  };

  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      to={`/artist/${slug}`}
      style={{ ...cardStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View profile for ${name}`}
    >
      <img
        src={image}
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