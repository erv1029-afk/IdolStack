const BASE_URL = "http://localhost:5000";

// 🎤 GET all idols
export async function getIdols() {
  try {
    const res = await fetch(`${BASE_URL}/api/idols`);
    if (!res.ok) throw new Error("Failed to fetch idols");
    return await res.json();
  } catch (err) {
    console.error("❌ getIdols error:", err);
    return [];
  }
}

// 🧠 GET MBTI profiles
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