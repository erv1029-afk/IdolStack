const BASE_URL = import.meta.env.VITE_BACKEND;

// 🎤 GET all artists
export async function getArtists() {
  try {
    const res = await fetch(`${BASE_URL}/api/artists`);
    if (!res.ok) throw new Error("Failed to fetch artists");
    return await res.json();
  } catch (err) {
    console.error("❌ getArtists error:", err);
    return [];
  }
}

// 🧠 GET MBTI profiles (if still needed)
export async function getMBTIProfiles() {
  try {
    const res = await fetch(`${BASE_URL}/api/mbti`);
    if (!res.ok) throw new Error("Failed to fetch MBTI profiles");
    return await res.json();
  } catch (err) {
    console.error("❌ getMBTIProfiles error:", err);
    return {};
  }
}

// 🗓️ GET calendar events
export async function getCalendarEvents() {
  try {
    const res = await fetch(`${BASE_URL}/api/calendar`);
    if (!res.ok) throw new Error("Failed to fetch calendar events");
    return await res.json();
  } catch (err) {
    console.error("❌ getCalendarEvents error:", err);
    return [];
  }
}