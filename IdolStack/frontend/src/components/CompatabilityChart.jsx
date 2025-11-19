const compatibilityMap = {
  INFP: ["ENFJ", "INFJ", "ENFP"],
  ENFP: ["INFJ", "INTJ", "INFP"],
  INFJ: ["ENFP", "INFP", "ENTP"],
  ENFJ: ["INFP", "ISFP", "ENFP"],
  INTJ: ["ENFP", "ENTP", "INFJ"],
};

const CompatibilityChart = () => {
  return (
    <section className="compatibility-chart">
      <h2>MBTI Compatibility Guide</h2>
      <ul>
        {Object.entries(compatibilityMap).map(([type, matches]) => (
          <li key={type}>
            <strong>{type}</strong>: Best with {matches.join(", ")}
          </li>
        ))}
      </ul>
      <a
        href="https://www.mbtionline.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mbti-test-link"
      >
        Take the Official MBTI Test →
      </a>
    </section>
  );
};

export default CompatibilityChart;