import { useReducer, ReactNode } from "react";
import AuthContext, { User } from "../context/AuthContext";
import { authReducer, initialAuthState } from "../reducers/authReducer";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const signup = (newUser: User) => {
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    dispatch({ type: "SIGNUP", payload: newUser });
  };

  const login = (username: string, password: string) => {
    dispatch({ type: "LOGIN", payload: { user: username, password } });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const value = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
