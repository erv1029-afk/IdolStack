const GroupCard = ({ name, color, youtube }) => {
  return (
    <a
      href={youtube}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: color,
        borderRadius: "12px",
        padding: "1rem",
        width: "180px",
        textAlign: "center",
        textDecoration: "none",
        color: "#222",
        fontWeight: "bold",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease",
      }}
    >
      <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{name}</div>
      <div style={{ fontSize: "0.9rem" }}>🎥 Visit YouTube</div>
    </a>
  );
};

export default GroupCard;