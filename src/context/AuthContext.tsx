import { createContext } from "react";
import { UserType } from "../types/types";

interface AuthContextType {
  user: UserType | null;
  isAuthenticated: boolean;
  signup: (user: UserType) => void
  login: (username: string, password: string) => void;
  logout: () => void;
  editUser: (user: Omit<UserType, 'id'>) => void
  changePassword: (newPassword: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
