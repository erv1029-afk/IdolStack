import { useState } from "react";
import MBTICompare from "../components/MBTICompare";

const inputStyle = {
  padding: "0.5rem",
  fontSize: "1rem",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const linkStyle = {
  color: "#ff4d6d",
  fontWeight: "bold",
  textDecoration: "none",
};

const MBTI = () => {
  const [userMBTI, setUserMBTI] = useState("");

  return (
    <main className="mbti-page text-center" style={{ padding: "2rem", fontFamily: "Inter, sans-serif" }}>
      <h1 className="accent">MBTI Compare</h1>
      <p>Discover how your MBTI type aligns with your favorite idols.</p>

      <p style={{ marginBottom: "1rem" }}>
        Not sure of your MBTI?{" "}
        <a
          href="https://www.16personalities.com/free-personality-test"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Take the test here
        </a>
        .
      </p>

      <input
        type="text"
        placeholder="Enter your MBTI (e.g., INFP)"
        value={userMBTI}
        onChange={(e) => setUserMBTI(e.target.value.toUpperCase())}
        style={inputStyle}
        maxLength={4}
      />

      <MBTICompare userMBTI={userMBTI} />
    </main>
  );
};

export default MBTI;