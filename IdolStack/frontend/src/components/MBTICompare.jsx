import mbtiData from "../data/mbtiData";

const MBTICompare = ({ userMBTI, compatibilityMap }) => {
  if (!userMBTI || userMBTI.length !== 4) return null;

  const matchingIdols = mbtiData.filter(
    (idol) => idol.mbtiType.toUpperCase() === userMBTI
  );

  const compatibleTypes = compatibilityMap[userMBTI] || [];
  const compatibleIdols = mbtiData.filter(
    (idol) => compatibleTypes.includes(idol.mbtiType.toUpperCase())
  );

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2 className="accent">You're like...</h2>
      {matchingIdols.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {matchingIdols.map((idol) => (
            <li key={idol.name}>
              <strong>{idol.name}</strong> from <em>{idol.group}</em>
            </li>
          ))}
        </ul>
      ) : (
        <p>No idols share your MBTI type.</p>
      )}

      <h2 className="accent" style={{ marginTop: "2rem" }}>You're most compatible with...</h2>
      {compatibleIdols.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {compatibleIdols.map((idol) => (
            <li key={idol.name}>
              <strong>{idol.name}</strong> (<em>{idol.mbtiType}</em>) from <em>{idol.group}</em>
            </li>
          ))}
        </ul>
      ) : (
        <p>No compatible idols found.</p>
      )}
    </section>
  );
};

export default MBTICompare;
