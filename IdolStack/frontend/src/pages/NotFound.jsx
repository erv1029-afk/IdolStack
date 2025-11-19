const NotFound = () => {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "4rem",
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#fef6e4",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#ff4d6d" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        “You’ve wandered off the stage… let’s get you back to your bias 💫”
      </p>
      <a
        href="/"
        style={{
          marginTop: "2rem",
          display: "inline-block",
          color: "#333",
          fontWeight: "bold",
          textDecoration: "none",
          border: "2px solid #ff4d6d",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#ff4d6d";
          e.target.style.color = "#fff";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#333";
        }}
      >
        ⏪ Return to Home
      </a>
    </main>
  );
};

export default NotFound;