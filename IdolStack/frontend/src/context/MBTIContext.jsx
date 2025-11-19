import { createContext, useState } from "react";

// 🧠 Create the context
export const MBTIContext = createContext();

// 🎁 Provider component
export const MBTIProvider = ({ children }) => {
  const [mbtiType, setMbtiType] = useState("");

  return (
    <MBTIContext.Provider value={{ mbtiType, setMbtiType }}>
      {children}
    </MBTIContext.Provider>
  );
};