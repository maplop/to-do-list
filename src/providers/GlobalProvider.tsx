import { ReactNode } from "react";
import NotificationProvider from "./NotificationProvider";
import AuthProvider from "./AuthProvider";

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return (
    <AuthProvider>
      <NotificationProvider>
        {children}
      </NotificationProvider>
    </AuthProvider>
  );
};

export default GlobalProvider;
