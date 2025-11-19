import React from "react";

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
        <div className="card bts">BTS</div>
        <div className="card ateez">🏴‍☠️Ateez</div>
        <div className="card enhypen">Enhypen</div>
        <div className="card xikers">Xikers</div>
        <div className="card stray-kids">Stray Kids</div>
         <div className="card blackpink">BLACKPINK</div>
        <div className="card xg">XG</div>
        <div className="card ive">IVE</div>
        <div className="card aespa">aespa</div>
      </section>
    </main>
  );
};

export default Group;