import { useEffect, useState } from "react";

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

  useEffect(() => {
    async function fetchIdols() {
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
    }

    fetchIdols();
  }, []);

  const groups = Array.isArray(idols)
    ? [...new Set(idols.map((idol) => idol.group))]
    : [];

  return (
    <main className="explore-page">
      <section className="intro text-center">
        <h1 className="accent">Explore Idols</h1>
        <p>
          Discover K-pop groups and explore their music through official YouTube channels.
        </p>
      </section>

      {loading && <p className="text-center">Loading idols...</p>}
      {error && <p className="text-center error">{error}</p>}

      {!loading && !error && (
        <section className="idol-groups">
          <h2>Idols by Group</h2>
          {groups.map((group) => (
            <div key={group} className="group-section">
              <h3>{group}</h3>
              <div className="idol-grid">
                {idols
                  .filter((idol) => idol.group === group)
                  .map((idol) => (
                    <div key={idol._id || `${idol.name}-${group}`} className="card">
                      <h4>{idol.name}</h4>
                      <p>MBTI: {idol.mbti || "Unknown"}</p>
                      <a
                        href={groupLinks[group] || `https://www.youtube.com/results?search_query=${group}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link"
                      >
                        🎧 Explore {group} on YouTube →
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default Explore;