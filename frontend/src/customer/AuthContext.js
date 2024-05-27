import React, { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext with default values
const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Retrieve the login state from sessionStorage
    const savedLoginState = sessionStorage.getItem("isLoggedIn");
    return savedLoginState ? JSON.parse(savedLoginState) : false;
  });

  useEffect(() => {
    // Save the login state to sessionStorage whenever it changes
    sessionStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
