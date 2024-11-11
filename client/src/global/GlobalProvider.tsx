import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider: React.FC<any> = ({ children }) => {
  const [id, setID] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ id, setID }}>
      {children}
    </GlobalContext.Provider>
  );
};
