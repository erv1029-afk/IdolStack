import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
  backgroundColor: "#ff4d6d",
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontFamily: "Inter, sans-serif",
};

const logoStyle = {
  fontSize: "1.8rem",
  color: "#fff",
  margin: 0,
  textDecoration: "none",
  fontWeight: "bold",
};

const navLinksStyle = {
  listStyle: "none",
  display: "flex",
  gap: "1.5rem",
  margin: 0,
  padding: 0,
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  fontWeight: "bold",
  position: "relative",
};

const activeStyle = {
  color: "#ffd700",
};

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <NavLink to="/" style={logoStyle}>
        IdolStack
      </NavLink>
      <ul style={navLinksStyle}>
        {["/", "/explore", "/calendar", "/phrases", "/mbti"].map((path, i) => {
          const label = ["Home", "Explore", "Calendar", "Phrases", "MBTI"][i];
          return (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                style={({ isActive }) =>
                  isActive ? { ...linkStyle, ...activeStyle } : linkStyle
                }
              >
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;