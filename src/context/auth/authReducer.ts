interface AuthState {
  isAuthenticated: boolean;
  user: User;
  messageError: string | null;
  token: string;
}

export const initialAuthState: AuthState = {
  isAuthenticated:
    typeof window !== "undefined"
      ? Boolean(localStorage.getItem("isAuth"))
      : false,
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") as string)
      : {},
  token:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("token") as string)
      : "",
  messageError: null,
};

type AuthAction =
  | { type: "LOGIN_SUCCESS"; payload: { token: string; user: User } }
  | { type: "AUTH_ERROR"; payload: AuthError }
  | { type: "LOGOUT" };


export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => { 
  switch (action.type) {
    case "AUTH_ERROR":
      return {
        ...state,
        messageError: action.payload.error,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        messageError: null,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("token");

      return initialAuthState;

    default:
      return state;
  }
}
