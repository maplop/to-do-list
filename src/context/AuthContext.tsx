import { createContext } from "react";

export interface User {
  name: string,
  lastName: string,
  age: number,
  user: string,
  password: string
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signup: (user: User) => void
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
