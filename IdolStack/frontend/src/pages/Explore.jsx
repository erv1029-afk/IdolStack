import { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";
import FloatingStars from "../components/FloatingStars";
import SurpriseMe from "../components/SurpriseMe";

// 🎧 YouTube links by group
const groupLinks = {
  BTS: "https://www.youtube.com/@BTS",
  ATEEZ: "https://www.youtube.com/@ATEEZofficial",
  "Stray Kids": "https://www.youtube.com/@StrayKids",
  ENHYPEN: "https://www.youtube.com/@ENHYPEN",
  XIKERS: "https://www.youtube.com/@xikers_official",
  BLACKPINK: "https://www.youtube.com/@BLACKPINK",
  XG: "https://www.youtube.com/@XGOfficial",
  IVE: "https://www.youtube.com/@IVEstarship",
  aespa: "https://www.youtube.com/@aespa",
};

const Explore = () => {
  const [idols, setIdols] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🧠 Fetch idol data from backend
  useEffect(() => {
    const fetchIdols = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/artists");
        if (!response.ok) throw new Error("Server returned an error");

        const data = await response.json();
        setIdols(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("❌ Failed to fetch idols:", err);
        setError("Failed to load idol data.");
      } finally {
        setLoading(false);
      }
    };

    fetchIdols();
  }, []);

  // 🧠 Extract unique groups
  const groups = [...new Set(idols.map((idol) => idol.group))];

  // 🧼 Early return for loading/error states
  if (loading) {
    return (
      <main className="explore-page" style={mainStyle}>
        <FloatingStars />
        <section className="intro text-center" style={{ padding: "2rem" }}>
          <h1 className="accent">Explore Idols</h1>
          <p>Discover K-pop groups and explore their music through official YouTube channels.</p>
        </section>
        <p className="text-center">Loading idols...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="explore-page" style={mainStyle}>
        <FloatingStars />
        <section className="intro text-center" style={{ padding: "2rem" }}>
          <h1 className="accent">Explore Idols</h1>
          <p>Discover K-pop groups and explore their music through official YouTube channels.</p>
        </section>
        <p className="text-center error">{error}</p>
      </main>
    );
  }

  return (
    <main className="explore-page" style={mainStyle}>
      <FloatingStars />

      <section className="intro text-center" style={{ padding: "2rem" }}>
        <h1 className="accent">Explore Idols</h1>
        <p>Discover K-pop groups and explore their music through official YouTube channels.</p>
      </section>

      <SurpriseMe />

      <section className="idol-groups" style={{ padding: "2rem" }}>
        <h2>Idols by Group</h2>
        {groups.map((group) => (
          <div key={group} className="group-section" style={{ marginBottom: "2rem" }}>
            <h3>
              {group}{" "}
              <a
                href={
                  groupLinks[group] ||
                  `https://www.youtube.com/results?search_query=${group}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-link"
                style={{
                  marginLeft: "0.5rem",
                  textDecoration: "none",
                  color: "#FFD700",
                }}
              >
                🎧
              </a>
            </h3>
            <div
              className="card-grid"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              {idols
                .filter((idol) => idol.group === group)
                .map((idol) => (
                  <ArtistCard
                    key={idol._id || `${idol.name}-${group}`}
                    {...idol}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

// 🎨 Background styling
const mainStyle = {
  position: "relative",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #A1C4FD, #C2E9FB)",
  overflow: "hidden",
  color: "#fff",
};

export default Explore;