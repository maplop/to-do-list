import { UserType } from "../types/types";
import { lsKeys } from "../utils/lskeys";

interface AuthState {
  user: UserType | null;
  isAuthenticated: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export type AuthAction =
  | { type: "SIGNUP"; payload: UserType }
  | { type: "LOGIN"; payload: { user: string; password: string } }
  | { type: "LOGOUT" }
  | { type: "EDIT_USER"; payload: Omit<UserType, "id"> }
  | { type: "CHANGE_PASSWORD"; payload: { newPassword: string } };

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SIGNUP":
      return { user: action.payload, isAuthenticated: false };

    case "LOGIN": {
      const { user, password } = action.payload;
      const storedUsers = localStorage.getItem(lsKeys.USERS);
      if (storedUsers) {
        const users: UserType[] = JSON.parse(storedUsers);
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

    case "EDIT_USER": {
      const updatedUser = {
        ...action.payload,
        id: state.user?.id ?? "",
      };
      const storedUsers = localStorage.getItem(lsKeys.USERS);
      if (storedUsers) {
        const users: UserType[] = JSON.parse(storedUsers);

        const updatedUsers = users.map((u) =>
          u.id === state.user?.id ? updatedUser : u
        );
        localStorage.setItem(lsKeys.USERS, JSON.stringify(updatedUsers));
      }

      return { ...state, user: updatedUser };
    }

    case "CHANGE_PASSWORD": {
      if (!state.user) return state;

      const updatedUser = {
        ...state.user,
        password: action.payload.newPassword,
      };

      const storedUsers = localStorage.getItem(lsKeys.USERS);
      if (storedUsers) {
        const users: UserType[] = JSON.parse(storedUsers);

        const updatedUsers = users.map((u) =>
          u.id === state.user?.id ? updatedUser : u
        );
        localStorage.setItem(lsKeys.USERS, JSON.stringify(updatedUsers));
      }

      return { ...state, user: updatedUser };
    }

    default:
      return state;
  }
}
