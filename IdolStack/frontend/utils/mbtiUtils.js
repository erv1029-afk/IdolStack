// Simple compatibility tiers (can be expanded)
const compatibilityMap = {
  INFP: ["ENFJ", "INFJ", "ENFP"],
  ENFP: ["INFJ", "INTJ", "INFP"],
  INFJ: ["ENFP", "INFP", "ENTP"],
  ENFJ: ["INFP", "ISFP", "ENFP"],
  INTJ: ["ENFP", "ENTP", "INFJ"],
  // Add more as needed
};

export function getCompatibility(userType, idolType) {
  if (!userType || !idolType) return "Unknown";
  if (userType === idolType) return "Same Type";
  if (compatibilityMap[userType]?.includes(idolType)) return "High";
  return "Low";
}