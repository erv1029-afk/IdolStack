import { useEffect, useState, useContext } from "react";
import { getIdols } from "../services/api";
import { MBTIContext } from "../context/MBTIContext";

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

const Explore = () => {
  const [idols, setIdols] = useState([]);
  const { mbtiType } = useContext(MBTIContext); // ✅ correct key

  useEffect(() => {
    async function fetchData() {
      const data = await getIdols();
      setIdols(data);
    }
    fetchData();
  }, []);

  const mbtiTypes = Object.keys(compatibilityMap);

  return (
    <main className="explore-page">
      <section className="intro text-center">
        <h1 className="accent">Explore Idols</h1>
        <p>Browse your biases, MBTI types, and cultural vibes.</p>
        {mbtiType && (
          <p className="user-mbti">
            Your MBTI Type: <strong>{mbtiType}</strong>
          </p>
        )}
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