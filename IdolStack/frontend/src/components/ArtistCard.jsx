const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  overflow: "hidden",
  width: "100%",
  maxWidth: "250px",
  fontFamily: "Inter, sans-serif",
  transition: "transform 0.3s ease",
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
  color: "#333",
};

const groupStyle = {
  fontSize: "1rem",
  margin: 0,
  color: "#666",
};

const mbtiStyle = {
  alignSelf: "flex-start",
  backgroundColor: "#FFD700",
  color: "#fff",
  padding: "0.3rem 0.6rem",
  borderRadius: "6px",
  fontSize: "0.9rem",
};

const factStyle = {
  fontSize: "0.85rem",
  color: "#666",
};

const hoverStyle = {
  transform: "scale(1.03)",
};

import { useState } from "react";

const ArtistCard = ({ name, group, mbtiType, image, fact }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ ...cardStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={`${name} from ${group}`} style={imageStyle} />
      <div style={infoStyle}>
        <h2 style={nameStyle}>{name}</h2>
        <p style={groupStyle}>{group}</p>
        <span style={mbtiStyle}>{mbtiType}</span>
        <p style={factStyle}>{fact}</p>
      </div>
    </div>
  );
};

export default ArtistCard;