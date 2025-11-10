import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface UserPreferences {
  firstName: string;
  lastName: string;
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
}

const UserPreferencesContext = createContext<UserPreferences | undefined>(undefined);

export const UserPreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [firstName, setFirstNameState] = useState(() => {
    return localStorage.getItem("userFirstName") || "";
  });
  const [lastName, setLastNameState] = useState(() => {
    return localStorage.getItem("userLastName") || "";
  });

  const setFirstName = (name: string) => {
    setFirstNameState(name);
    localStorage.setItem("userFirstName", name);
  };

  const setLastName = (name: string) => {
    setLastNameState(name);
    localStorage.setItem("userLastName", name);
  };

  return (
    <UserPreferencesContext.Provider value={{ firstName, lastName, setFirstName, setLastName }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error("useUserPreferences must be used within UserPreferencesProvider");
  }
  return context;
};
