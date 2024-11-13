import { useState } from "react";
import { UserType } from "../../types/types";
import { useAuth } from "../../hooks/useAuth";
import { useNotification } from "../../hooks/useNotification";

export type PasswordValuesType = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const useProfileView = () => {
  const { notify } = useNotification();
  const { user, editUser, changePassword } = useAuth();
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    user?.name || ""
  );

  const [passwordValues, setPasswordValues] = useState<PasswordValuesType>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [formValues, setFormValues] = useState<Omit<UserType, "id">>({
    name: selectedAvatar,
    lastName: user?.lastName || "",
    user: user?.user || "",
    age: user?.age || 0,
    gender: user?.gender || "other",
    password: user?.password || "",
    avatar: user?.avatar || "",
  });

  const handleAvatarSelect = (newAvatar: string) => {
    setSelectedAvatar(newAvatar);
    setFormValues((prev) => ({ ...prev, avatar: newAvatar }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const userToSave = {
      ...formValues,
      avatar: selectedAvatar || formValues.avatar,
    };
    editUser(userToSave);
    notify("success", "The changes have been saved successfully");
  };

  const handleInputPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPasswordValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangePassword = () => {
    changePassword(passwordValues.newPassword);
    notify("success", "Password changed successfully");

    setPasswordValues({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return {
    formValues,
    handleAvatarSelect,
    handleChange,
    handleSave,
    passwordValues,
    handleInputPasswordChange,
    handleChangePassword,
  };
};
