import { User } from "../context/AuthContext";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export type AuthAction =
  | { type: "SIGNUP"; payload: User }
  | { type: "LOGIN"; payload: { user: string; password: string } }
  | { type: "LOGOUT" };

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SIGNUP":
      return { user: action.payload, isAuthenticated: false };
    case "LOGIN": {
      const { user, password } = action.payload;
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        const users: User[] = JSON.parse(storedUsers);
        const foundUser = users.find(
          (u) => u.user === user && u.password === password
        );

        if (foundUser) {
          return { ...state, user: foundUser, isAuthenticated: true };
        }
      }
      return state;
    }
    case "LOGOUT":
      return { user: null, isAuthenticated: false };
    default:
      return state;
  }
}
