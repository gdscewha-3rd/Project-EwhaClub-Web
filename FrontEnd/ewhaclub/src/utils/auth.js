import { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { likes } from "apis/likes.api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const initialState = {
    name: null,
    token: null,
  };
  const history = useHistory();
  const [auth, setAuth] = useState(initialState);
  const [likesArr, setLikesArr] = useState([]);

  const getLikes = async (token) => {
    const { data } = await likes(token);
    setLikesArr(data);
    //console.log(data);
  };

  const login = async (token, name) => {
    console.log("AuthProvider", token, name);
    setAuth({ name: name, token: token });
    await getLikes(token);
    history.replace("/");
  };
  const logout = (token) => {
    console.log("로그아웃");
    setAuth(initialState);
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, likesArr, getLikes }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
