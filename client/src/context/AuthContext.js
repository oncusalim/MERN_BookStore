import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  
  const [isLoggedIn, setLoggedIn] = useState("false");
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(async() => {
    const token = await localStorage.getItem("token")
    setLoggedIn(token)
  }, [])
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, selectedBooks, setSelectedBooks}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;