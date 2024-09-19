import { ReactNode, useState } from "react";
import NotificationContext, { NotificationProps } from "../context/NotificationContext";
import Notification from "../components/common/Notification";

const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<NotificationProps | null>(null);
  const [open, setOpen] = useState(false);

  const notify = (type: NotificationProps["type"], message: string) => {
    setNotification({ type, message });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      {notification && (
        <Notification
          open={open}
          type={notification.type}
          message={notification.message}
          handleClose={handleClose}
        />
      )}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider