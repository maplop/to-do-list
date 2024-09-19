import { createContext } from "react";

export interface NotificationProps {
  type: "success" | "error" | "info" | "warning";
  message: string;
}

interface NotificationContextType {
  notify: (type: NotificationProps["type"], message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export default NotificationContext
