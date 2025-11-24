import React, { useEffect } from "react";

// 🎶 Floating icons styling
const iconStyle = {
  position: "absolute",
  fontSize: "1.5rem",
  opacity: 0.8,
  animation: "float 10s linear infinite",
};

const FloatingIcons = () => {
  useEffect(() => {
    const container = document.querySelector(".floating-icons");

    // Generate random icons
    const icons = ["🎶", "🔦"]; // music note + lightstick
    const count = 15; // number of floating icons

    for (let i = 0; i < count; i++) {
      const span = document.createElement("span");
      span.textContent = icons[Math.floor(Math.random() * icons.length)];
      Object.assign(span.style, iconStyle, {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 5}s`,
        fontSize: `${1 + Math.random() * 2}rem`,
      });
      container.appendChild(span);
    }
  }, []);

  return <div className="floating-icons" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />;
};

export default FloatingIcons;