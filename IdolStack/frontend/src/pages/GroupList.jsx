import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 🧼 Utility: Create a URL-safe slug from group name
const toSlug = (name = "") =>
  name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

// 🌟 Group card component
const GroupCard = ({ name, label, className, image }) => {
  if (!name) return null;
  const slug = toSlug(name);
  const displayName = label || name;
  const imageUrl = `http://localhost:5000${image}`;

  return (
    <Link
      to={`/group/${slug}`}
      className={`card ${className || ""}`}
      aria-label={`View details for ${displayName}`}
    >
      <img
        src={imageUrl}
        alt={`${displayName} group photo`}
        className="group-image"
        onError={(e) => {
          e.target.src = "/fallback.jpg"; // Optional fallback image
        }}
      />
      <span className="group-label">{displayName}</span>
    </Link>
  );
};

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🛰️ Fetch group data from backend
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/groups");
        if (!res.ok) throw new Error("Failed to fetch groups");
        const data = await res.json();
        setGroups(data);
      } catch (err) {
        console.error("❌ Group fetch error:", err);
        setError("Could not load groups. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  return (
    <main className="group-page">
      {/* 🧭 Intro section */}
      <section className="intro text-center">
        <h1 className="accent">Idol Groups</h1>
        <p>
          Discover iconic K-pop groups, explore their colors, styles, and stories — all in one place.
        </p>
      </section>

      {/* ⏳ Loading state */}
      {loading && <p className="text-center">Loading groups...</p>}

      {/* ⚠️ Error state */}
      {error && <p className="text-center error">{error}</p>}

      {/* 🎤 Group grid */}
      {!loading && !error && groups.length > 0 && (
        <section className="group-grid grid">
          {groups.map((group) => (
            <GroupCard key={group._id || group.name} {...group} />
          ))}
        </section>
      )}

      {/* 🪹 Empty state */}
      {!loading && !error && groups.length === 0 && (
        <p className="text-center">No groups available at the moment.</p>
      )}
    </main>
  );
};

export default GroupList;