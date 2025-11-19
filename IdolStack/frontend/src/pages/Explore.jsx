import { useEffect, useState } from "react";

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

const groupLinks = {
  BTS: "https://www.youtube.com/@BTS",
  ATEEZ: "https://www.youtube.com/@ATEEZofficial",
  StrayKids: "https://www.youtube.com/@StrayKids",
  ENHYPEN: "https://www.youtube.com/@ENHYPEN",
  XIKERS: "https://www.youtube.com/@xikers_official",
  BLACKPINK: "https://www.youtube.com/@BLACKPINK",
  XG: "https://www.youtube.com/@XGOfficial",
  IVE: "https://www.youtube.com/@IVEstarship",
  aespa: "https://www.youtube.com/@aespa",
};

const Explore = () => {
  const [idols, setIdols] = useState([]);

  useEffect(() => {
    async function fetchIdols() {
      try {
        const response = await fetch("http://localhost:5000/api/idols");
        const data = await response.json();
        setIdols(data);
      } catch (error) {
        console.error("❌ Failed to fetch idols:", error);
      }
    }

    fetchIdols();
  }, []);

  const mbtiTypes = Object.keys(compatibilityMap);

  return (
    <main className="explore-page">
      <section className="intro text-center">
        <h1 className="accent">Explore Idols</h1>
        <p>Discover MBTI types and explore their music through official YouTube channels.</p>
      </section>

      <section className="idol-groups">
        <h2>Idols by MBTI Type</h2>
        {mbtiTypes.map((type) => (
          <div key={type} className="mbti-group">
            <h3>{type}</h3>
            <div className="idol-grid">
              {idols
                .filter((idol) => idol.mbti === type)
                .map((idol) => (
                  <div key={idol._id} className="card">
                    <h4>{idol.name}</h4>
                    <p>MBTI: {idol.mbti}</p>
                    <p>Group: {idol.group}</p>
                    {groupLinks[idol.group] && (
                      <a
                        href={groupLinks[idol.group]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link"
                      >
                        🎧 Explore {idol.group} on YouTube →
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      <section className="compatibility-chart">
        <h2>MBTI Compatibility Guide</h2>
        <ul>
          {Object.entries(compatibilityMap).map(([type, matches]) => (
            <li key={type}>
              <strong>{type}</strong>: Best with {matches.join(", ")}
            </li>
          ))}
        </ul>
        <p className="mbti-note">
          These pairings are based on complementary cognitive functions, communication styles, and emotional resonance.
        </p>
        <a
          href="https://www.mbtionline.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mbti-test-link"
        >
          Take the Official MBTI Test →
        </a>
      </section>
    </main>
  );
};

export default Explore;