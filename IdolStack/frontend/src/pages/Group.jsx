import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// 🧼 Utility: Convert group name to slug
const toSlug = (name = "") =>
  name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

const Group = () => {
  const { name } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🛰️ Fetch all groups and match by slug
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/groups");
        const data = await res.json();
        const matched = data.find(g => toSlug(g.name) === name);
        setGroup(matched);
      } catch (err) {
        console.error("❌ Group fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroup();
  }, [name]);

  if (loading) return <p className="text-center">Loading group...</p>;

  if (!group) {
    return (
      <main className="group-detail text-center">
        <h2 className="accent">Group not found</h2>
        <p>We couldn’t find that group — maybe try another bias?</p>
        <Link to="/groups" className="btn">Back to Groups</Link>
      </main>
    );
  }

  const imageUrl = `http://localhost:5000${group.image}`;

  return (
    <main className="group-detail">
      <section className="hero text-center">
        <h1 className="accent">{group.label || group.name}</h1>
        <p className="subtitle">Agency: {group.agency || "Unknown"}</p>
        <p><strong>Debut:</strong> {group.debut || `Year ${group.debutYear}`}</p>
        {group.fandom && (
          <p><strong>Fandom:</strong> {group.fandom}</p>
        )}
        {group.fandomLaunch && (
          <p><strong>Fandom Launch:</strong> {group.fandomLaunch}</p>
        )}

        {/* 🖼️ Group photo */}
        {group.image && (
          <img
            src={imageUrl}
            alt={`${group.name} group photo`}
            className="group-photo"
            onError={(e) => {
              console.warn(`❌ Could not load image: ${imageUrl}`);
              e.target.src = "/fallback.jpg";
            }}
          />
        )}
      </section>

      <section className="bio">
        <h2>About {group.name}</h2>
        <p>{group.description || "No description available yet."}</p>
      </section>

      <section className="members">
        <h2>Members</h2>
        <ul>
          {(group.members || []).map((member, i) => (
            <li key={i}>{member}</li>
          ))}
        </ul>
      </section>

      {group.albums?.length > 0 && (
        <section className="albums">
          <h2>Albums</h2>
          <ul>
            {group.albums.map((album, i) => (
              <li key={i}>{album}</li>
            ))}
          </ul>
        </section>
      )}

      {group.awards?.length > 0 && (
        <section className="awards">
          <h2>Awards</h2>
          <ul>
            {group.awards.map((award, i) => (
              <li key={i}>{award}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="back-link text-center">
        <Link to="/groups" className="btn">← Back to All Groups</Link>
      </section>
    </main>
  );
};

export default Group;