import { useAuth } from "./auth";
import { useHistory } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  const { auth } = useAuth();
  const history = useHistory();

  //console.log(auth);

  if (!auth.token) {
    history.push("/login");
  }
  return { children };
};
