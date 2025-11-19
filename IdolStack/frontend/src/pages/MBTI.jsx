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

const compatibilityMap = {
  INFP: ["ENFJ", "INFJ", "ENFP"],
  ENFP: ["INFJ", "INTJ", "INFP"],
  INFJ: ["ENFP", "INFP", "ENTP"],
  ENFJ: ["INFP", "ISFP", "ENFP"],
  INTJ: ["ENFP", "ENTP", "INFJ"],
  ENTJ: ["INFP", "INTP", "ENFP"],
  INTP: ["ENTP", "INTJ", "INFJ"],
  ENTP: ["INFJ", "INFP", "INTP"],
  ISFP: ["ENFJ", "ESFP", "INFP"],
  ESFP: ["ISFP", "ENFP", "ESFJ"],
  ISTP: ["ESTP", "ISFP", "INTP"],
  ESTP: ["ISTP", "ESFP", "ENTP"],
  ISFJ: ["ESFJ", "ENFP", "ISFP"],
  ESFJ: ["ISFJ", "ENFP", "ESFP"],
  ISTJ: ["ESTJ", "ISFJ", "INTJ"],
  ESTJ: ["ISTJ", "ESFJ", "ENTJ"],
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

      <section className="compatibility-chart" style={{ marginTop: "3rem", textAlign: "left", maxWidth: "600px", marginInline: "auto" }}>
        <h2 className="accent">MBTI Compatibility Guide</h2>
        <ul style={{ paddingLeft: "1rem", lineHeight: "1.6" }}>
          {Object.entries(compatibilityMap).map(([type, matches]) => (
            <li key={type}>
              <strong>{type}</strong>: Best with {matches.join(", ")}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: "1rem" }}>
          These pairings are based on complementary cognitive functions, communication styles, and emotional resonance.
        </p>
        <a
          href="https://www.mbtionline.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Take the Official MBTI Test →
        </a>
      </section>
    </main>
  );
};

export default MBTI;