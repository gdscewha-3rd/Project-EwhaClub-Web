import { decrypt } from "utils/CryptoJS";

const PersistLogin = async (setAuth) => {
  const decodedToken = decrypt(localStorage.getItem("token"), "token");
  setAuth({ token: decodedToken });
};

export default PersistLogin;
