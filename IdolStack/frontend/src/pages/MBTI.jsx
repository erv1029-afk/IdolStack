import { useState } from "react";
import MBTICompare from "../components/MBTICompare";

const MBTI = () => {
  const [userMBTI, setUserMBTI] = useState("");

  return (
    <main>
      <h1>MBTI Compare</h1>
      <p>Discover how your MBTI type aligns with your favorite idols.</p>

      <p style={{ marginBottom: "1rem" }}>
  Not sure of your MBTI?{" "}
  <a
    href="https://www.16personalities.com/free-personality-test"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#ff4d6d", fontWeight: "bold" }}
  >
    Take the test here
  </a>
  .
</p>

      <input
        type="text"
        placeholder="Enter your MBTI (e.g., INFP)"
        value={userMBTI}
        onChange={(e) => setUserMBTI(e.target.value)}
        style={{ padding: "0.5rem", fontSize: "1rem", marginBottom: "1rem" }}
      />

      <MBTICompare userMBTI={userMBTI} />
    </main>
  );
};

export default MBTI;