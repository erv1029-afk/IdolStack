import { useState } from "react";

const phrases = [
  // 💜 BTS
  { idol: "RM", quote: "Don't be afraid, don't worry yourself. The end and beginning, beginning and end are connected." },
  { idol: "Jimin", quote: "Go on your path, even if you live for a day." },
  { idol: "Taehyung", quote: "Don't be trapped in someone else's dream." },
  { idol: "Jin", quote: "Your presence can give happiness. I hope you remember that." },

  // 🌊 ATEEZ
  { idol: "Hongjoong", quote: "Don't be afraid of making mistakes. They're proof that you're trying." },
  { idol: "Wooyoung", quote: "You're doing well. Even if it's hard, you're still moving forward." },

  // 🔥 Stray Kids
  { idol: "Bang Chan", quote: "You guys inspire me, and that's why I want to be more of an inspiration to you." },
  { idol: "Felix", quote: "Stay curious, stay kind." },
  { idol: "Changbin", quote: "Being different is not being wrong." },

  // 🚀 xikers
  { idol: "Hyunwoo", quote: "Even when it's tough, we keep going. That's how we grow." },
  { idol: "Jinsik", quote: "Enjoy the moment — it's yours to own." },

  // 🌟 ENHYPEN
  { idol: "Jay", quote: "Dream big so you can achieve at least half of it." },
  { idol: "Heeseung", quote: "Never forget your gratitude. You're not alone." },
  { idol: "Jungwon", quote: "Failure is the mother of success." },

  // 💎 BLACKPINK
  { idol: "Lisa", quote: "Confidence is the best outfit." },
  { idol: "Rosé", quote: "Dream big when you can and enjoy it." },
  { idol: "Jisoo", quote: "Life is not easy, there are so many crossroads… that’s our life." },

  // 🌐 aespa
  { idol: "Winter", quote: "Even unfamiliar paths help us grow." },
  { idol: "Karina", quote: "My energy is too precious to waste." },

  // ✨ XG
  { idol: "Jurin", quote: "Vibes are everything. The better the vibe, the better the performance." },
  { idol: "Hinata", quote: "You can do anything. Your existence is wonderful." },
  { idol: "Maya", quote: "Be a source of love, hope, and inspiration." },

  // 🌸 IVE
  { idol: "Yujin", quote: "Don't be afraid to shine. You're meant to." },
  { idol: "Rei", quote: "Love yourself without comparing yourself to others." },
];



const cardStyle = {
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  fontFamily: "Inter, sans-serif",
  textAlign: "center",
  maxWidth: "400px",
  margin: "2rem auto",
};

const headingStyle = {
  fontSize: "1.5rem",
  color: "#ff4d6d",
  marginBottom: "1rem",
};

const quoteStyle = {
  fontSize: "1.2rem",
  fontStyle: "italic",
  color: "#333",
  marginBottom: "1.5rem",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  backgroundColor: "#ff4d6d",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const PhraseCard = () => {
  const [index, setIndex] = useState(0);

  const nextPhrase = () => {
    setIndex((prev) => (prev + 1) % phrases.length);
  };

  const { idol, quote } = phrases[index];

  return (
    <div style={cardStyle}>
      <h3 style={headingStyle}>{idol} says:</h3>
      <blockquote style={quoteStyle}>“{quote}”</blockquote>
      <button onClick={nextPhrase} style={buttonStyle}>
        Next Phrase →
      </button>
    </div>
  );
};

export default PhraseCard;