"use client";
import { useReducer } from "react";
import AuthContext from "./AuthContext";
import { authReducer, initialAuthState } from "./authReducer";
import { loginAuth } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { ROLES } from "@/utils/utils";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const [{ user, isAuthenticated, token, messageError }, dispatch] = useReducer(
    authReducer,
    initialAuthState
  );


  const login = async (user: User) => {
    const res = await loginAuth(user);

    if (res instanceof Error) {
      dispatch({
        type: "AUTH_ERROR",
        payload: res.response?.data as RequestError,
      });
    } else {
      const { user, token } = res;
      dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });

      if (user.role.includes(ROLES.ADMIN)) {
        router.push("/sorteos");
      } else {
        router.push("/");
      }
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const registerUser = (user: RegisterUser) => {};

  const data = {
    user,
    login,
    logout,
    registerUser,
    isAuthenticated,
    token,
    messageError,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
