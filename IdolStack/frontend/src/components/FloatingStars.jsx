import React from "react";

const starStyle = {
  position: "absolute",
  width: "4px",
  height: "4px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  animation: "floatStar 20s linear infinite",
};

const FloatingStars = () => {
  const stars = Array.from({ length: 40 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 20}s`,
  }));

  return (
    <>
      {stars.map((star, i) => (
        <div
          key={i}
          style={{ ...starStyle, top: star.top, left: star.left, animationDelay: star.animationDelay }}
        />
      ))}
    </>
  );
};

export default FloatingStars;