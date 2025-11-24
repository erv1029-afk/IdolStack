const pageStyle = {
  textAlign: "center",
  padding: "4rem",
  fontFamily: "Inter, sans-serif",
  backgroundColor: "#fef6e4",
  color: "#333",
  minHeight: "100vh",
};

const headingStyle = {
  fontSize: "2.5rem",
  color: "#ff4d6d",
};

const messageStyle = {
  fontSize: "1.2rem",
  marginTop: "1rem",
};

const linkStyle = {
  marginTop: "2rem",
  display: "inline-block",
  color: "#333",
  fontWeight: "bold",
  textDecoration: "none",
  border: "2px solid #ff4d6d",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  transition: "all 0.3s ease",
};

const NotFound = () => {
  return (
    <main style={pageStyle}>
      <h1 style={headingStyle}>404 - Page Not Found</h1>
      <p style={messageStyle}>
        “You’ve wandered off the stage… let’s get you back to your bias 💫”
      </p>
      <a
        href="/"
        style={linkStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#ff4d6d";
          e.target.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
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