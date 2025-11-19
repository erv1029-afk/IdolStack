import { useEffect, useState } from "react";
import { getIdols } from "../services/api";

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: "2rem 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1.5rem",
};

const itemStyle = {
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  fontFamily: "Inter, sans-serif",
  fontSize: "1rem",
  color: "#333",
  textAlign: "center",
};

const IdolList = () => {
  const [idols, setIdols] = useState([]);

  useEffect(() => {
    getIdols().then(setIdols);
  }, []);

  return (
    <ul style={listStyle}>
      {idols.map((idol) => (
        <li key={idol._id} style={itemStyle}>
          {idol.name}
        </li>
      ))}
    </ul>
  );
};

export default IdolList;