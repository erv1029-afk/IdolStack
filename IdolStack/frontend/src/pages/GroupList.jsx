import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🛰️ Fetch group data from backend
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch("/api/groups");
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

  // 🧼 Utility: Create a URL-safe slug from group name
  const toSlug = (name = "") =>
    name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

  return (
    <main className="group-page">
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
      {!loading && !error && (
        <section className="group-grid grid">
          {groups.map(({ id, name, className, label }) => {
            if (!name) return null; // 🚫 Skip if name is missing
            const slug = toSlug(name);
            return (
              <Link
                key={id || name}
                to={`/group/${slug}`}
                className={`card ${className || ""}`}
                aria-label={`View details for ${label || name}`}
              >
                {label || name}
              </Link>
            );
          })}
        </section>
      )}
    </main>
  );
};

export default GroupList;