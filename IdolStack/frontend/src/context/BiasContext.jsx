import { createContext, useState } from "react";

// 🎤 Create the context
export const BiasContext = createContext();

// 🎁 Provider component
export const BiasProvider = ({ children }) => {
  const [bias, setBias] = useState("");

  return (
    <BiasContext.Provider value={{ bias, setBias }}>
      {children}
    </BiasContext.Provider>
  );
};