import { createContext, useState } from "react";

export const UserContext = createContext({ children });

export const UserContextProvider = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
