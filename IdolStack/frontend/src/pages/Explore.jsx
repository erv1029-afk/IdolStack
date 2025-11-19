import { useEffect, useState, useContext } from "react";
import { getIdols } from "../services/api";
import { MBTIContext } from "../context/MBTIContext";
import { getCompatibility } from "@utils/mbtiUtils";

const Explore = () => {
  const [idols, setIdols] = useState([]);
  const { userMBTI } = useContext(MBTIContext);

  useEffect(() => {
    async function fetchData() {
      const data = await getIdols();
      setIdols(data);
    }
    fetchData();
  }, []);

  return (
    <main className="explore-page">
      <section className="intro text-center">
        <h1 className="accent">Explore Idols</h1>
        <p>Browse your biases, MBTI matches, and cultural vibes.</p>
      </section>

      <section className="idol-grid grid">
        {idols.map((idol) => {
          const match = getCompatibility(userMBTI, idol.mbti);
          return (
            <div key={idol._id} className={`card match-${match.toLowerCase()}`}>
              <h3>{idol.name}</h3>
              <p>MBTI: {idol.mbti}</p>
              <p>Match: {match}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Explore;