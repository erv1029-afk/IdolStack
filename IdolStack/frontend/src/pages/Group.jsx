import React from "react";
import groupData from "../data/groupData";

const Group = () => {
  return (
    <main className="group-page">
      <section className="intro text-center">
        <h1 className="accent">Idol Groups</h1>
        <p>
          Discover iconic K-pop groups, explore their colors, styles, and stories — all in one place.
        </p>
      </section>

      <section className="group-grid grid">
        {groupData.map(({ name, className, label }) => (
          <div key={name} className={`card ${className}`}>
            {label || name}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Group;