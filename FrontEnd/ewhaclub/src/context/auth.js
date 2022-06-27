import { getlikes } from "apis/likes.api";
import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { decrypt } from "utils/CryptoJS";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: "" });
  const [likes, setlikes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") && !auth.token) {
      console.log(decrypt(localStorage.getItem("token"), "token"));
      const decodedToken = decrypt(localStorage.getItem("token"), "token");
      setAuth({ token: decodedToken });
      updateLikes(decodedToken);
    }
  }, [auth.token]);

  const updateLikes = async (decodedToken) => {
    console.log(decodedToken);
    const { data } = await getlikes(decodedToken);
    setlikes(data);
    console.log("새로 고침 후 좋아요 목록", data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, likes, updateLikes, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
