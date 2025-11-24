import PhraseCard from "../components/PhraseCard";

const pageStyle = {
  padding: "2rem",
  fontFamily: "Inter, sans-serif",
  backgroundColor: "#fef6e4",
  color: "#333",
  minHeight: "100vh",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "2.2rem",
  color: "#ff4d6d",
  marginBottom: "1rem",
};

const paragraphStyle = {
  fontSize: "1.1rem",
  marginBottom: "2rem",
};

const Phrases = () => {
  return (
    <main style={pageStyle}>
      <h1 style={headingStyle}>💬 Idol Phrases</h1>
      <p style={paragraphStyle}>
        Explore iconic quotes, lyrics, and fan-favorite expressions from your bias lineup.
      </p>

      <PhraseCard />
    </main>
  );
};

export default Phrases;