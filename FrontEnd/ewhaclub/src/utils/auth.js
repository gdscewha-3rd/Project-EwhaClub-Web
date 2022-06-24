import { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const initialState = {
    name: null,
    token: null,
  };
  const history = useHistory();
  const [auth, setAuth] = useState(initialState);

  const login = (token, name) => {
    console.log("AuthProvider", token, name);
    setAuth({ name: name, token: token });
    history.replace("/");
  };
  const logout = (token) => {
    console.log("로그아웃");
    setAuth(initialState);
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
