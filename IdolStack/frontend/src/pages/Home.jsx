import { useState, useEffect } from "react";
import ArtistCard from "../components/ArtistCard";
import FloatingIcons from "../components/FloatingIcons";
import artistData from "../data/artistData"; // adjust path
import ReactPlayer from "react-player"; // 🎶 new import

const Home = () => {
  const [idolOfTheDay, setIdolOfTheDay] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);

  // Pick Idol of the Day once per load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * artistData.length);
    setIdolOfTheDay(artistData[randomIndex]);
  }, []);

  // Toggle player visibility
  const toggleMusic = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <main
      className="home-page"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FFDEE9, #B5FFFC)",
        position: "relative",
        overflow: "hidden",
        color: "#222",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <FloatingIcons />

      <section className="hero">
        <h1>Welcome to IdolStack ✨</h1>
        <p>Discover idols, explore groups, and celebrate K‑pop culture.</p>
        <button
          onClick={toggleMusic}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            backgroundColor: showPlayer ? "#FF6B00" : "#00C9A7",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {showPlayer ? "⏸ Hide Mix" : "▶ Show Mix"}
        </button>

        {showPlayer && (
          <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" // replace with your mix link
              controls
              width="560px"
              height="315px"
            />
          </div>
        )}
      </section>

      <section className="idol-of-day" style={{ marginTop: "2rem" }}>
        <h2>🌟 Idol of the Day</h2>
        {idolOfTheDay && <ArtistCard {...idolOfTheDay} />}
      </section>
    </main>
  );
};

export default Home;