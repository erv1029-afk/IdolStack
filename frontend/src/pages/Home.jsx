import { useState, useEffect } from "react";
import ArtistCard from "../components/ArtistCard";
import FloatingIcons from "../components/FloatingIcons";
import artistData from "../data/artistData";
import groupData from "../data/groupData"; // new file with groups + colors

const Home = () => {
  const [idolOfTheDay, setIdolOfTheDay] = useState(null);

  // Pick Idol of the Day once per load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * artistData.length);
    setIdolOfTheDay(artistData[randomIndex]);
  }, []);

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
      </section>

      <section
        className="idol-of-day"
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>🌟 Idol of the Day</h2>
        {idolOfTheDay && <ArtistCard {...idolOfTheDay} />}
      </section>

      <section
        className="group-pcs"
        style={{
          marginTop: "3rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {groupData.map((group) => (
          <a
            key={group.name}
            href={group.youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: group.color,
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
            {group.name}
          </a>
        ))}
      </section>
    </main>
  );
};

export default Home


