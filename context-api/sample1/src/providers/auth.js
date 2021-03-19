import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Vinicius",
  });

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    setUser({ name: "" });
    if (userStorage) {
      console.log(userStorage);
      setUser(JSON.parse(userStorage));
    }
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
