import { useContext } from "react";
import { BiasContext } from "../context/BiasContext";

//MBTI for all artists
const mbtiProfiles = {
  // 🧠 BTS
  RM: "ENFP",
  Jin: "INTP",
  SUGA: "ISTP",
  JHope: "INFJ",
  Jimin: "ENFJ",
  V: "INFP",
  Jungkook: "ISFP",

  // 🌊 ATEEZ
  Hongjoong: "INFP",
  Seonghwa: "ENFJ",
  Yunho: "ENFJ",
  Yeosang: "ISFJ",
  San: "INFP",
  Mingi: "ENTP",
  Wooyoung: "ESFJ",
  Jongho: "ESFJ",

  // 🔥 Stray Kids
  BangChan: "ENFJ",
  LeeKnow: "ISFP",
  Changbin: "ENFP",
  Hyunjin: "INFP",
  Han: "ISTP",
  Felix: "ESFJ",
  Seungmin: "ESFJ",
  IN: "ISFJ",

  // 🌟 ENHYPEN
  Heeseung: "INTP",
  Jay: "ENFJ",
  Jake: "ESTJ",
  Sunghoon: "ISTJ",
  Sunoo: "ENFP",
  Jungwon: "ISTJ",
  Niki: "ESFP",

  // 🚀 xikers
  Minjae: "INFP",
  Junmin: "ISTJ",
  Sumin: "INTJ",
  Jinsik: "INFP",
  Hyunwoo: "INFP",
  Junghoon: "INTP",
  Seeun: "ESTJ",
  Yujun: "ISFP",
  Hunter: "ISTJ",
  Yechan: "ENTP",

  // 💎 BLACKPINK
  Jisoo: "ISTP",
  Jennie: "INFP",
  Rosé: "ENFP",
  Lisa: "ISFP",

  // ✨ XG
  Chisa: "ENFP",
  Hinata: "ISFP",
  Jurin: "ENTJ",
  Harvey: "INFP",
  Juria: "ESFJ",
  Maya: "ESFP",
  Cocona: "INFJ",

  // 🌸 IVE
  AnYujin: "ISTP",
  Gaeul: "ISTJ",
  Rei: "INFJ",
  Wonyoung: "ENFP",
  Liz: "INFP",
  Leeseo: "ENFP",

  // 🌐 aespa
  Karina: "ENFP",
  Giselle: "INFJ",
  Winter: "ISFJ",
  Ningning: "INFP",
};

const sectionStyle = {
  backgroundColor: "#fef6e4",
  padding: "2rem",
  fontFamily: "Inter, sans-serif",
  minHeight: "100vh",
  color: "#333",
};

const headingStyle = {
  fontSize: "2rem",
  marginBottom: "1rem",
};

const paragraphStyle = {
  fontSize: "1.1rem",
  marginBottom: "0.8rem",
};

const highlightStyle = {
  fontWeight: "bold",
  color: "#ff4d6d",
};

const resultStyle = {
  marginTop: "1.5rem",
  fontSize: "1.2rem",
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const MBTICompare = ({ userMBTI }) => {
  const { bias } = useContext(BiasContext);
  const idolMBTI = mbtiProfiles[bias] || "Unknown";

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>🧠 MBTI Comparison</h2>
      <p style={paragraphStyle}>
        <span style={highlightStyle}>Your MBTI:</span> {userMBTI || "Not entered"}
      </p>
      <p style={paragraphStyle}>
        <span style={highlightStyle}>{bias || "Selected Idol"}'s MBTI:</span>{" "}
        {idolMBTI}
      </p>

      {userMBTI === "" ? (
        <p style={paragraphStyle}>
          Please enter your MBTI to compare with your bias.
        </p>
      ) : (
        idolMBTI !== "Unknown" && (
          <div style={resultStyle}>
            {userMBTI === idolMBTI ? (
              <p>🎉 You share the same MBTI type!</p>
            ) : (
              <p>🔍 Explore how your personalities complement each other.</p>
            )}
          </div>
        )
      )}
    </section>
  );
};

export default MBTICompare;
