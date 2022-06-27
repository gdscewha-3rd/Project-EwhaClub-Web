import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
    const { auth } = useAuth();
    const history = useNavigate();

    //console.log(auth);

    if (!auth.token) {
        history.push("/login");
    }
    return children;
};
