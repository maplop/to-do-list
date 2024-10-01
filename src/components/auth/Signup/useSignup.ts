import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { UserType } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../../hooks/useNotification";
import { lsKeys } from "../../../utils/lskeys";

export const useSignup = () => {
  const { signup } = useAuth();
  const { notify } = useNotification();

  const navigate = useNavigate();

  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const [formValues, setFormValues] = useState<UserType>({
    name: "",
    lastName: "",
    age: 18,
    user: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { name, lastName, age, user, password } = formValues;
    if (name && user && password) {
      const storedUsers = localStorage.getItem(lsKeys.USERS);

      if (storedUsers) {
        const users: UserType[] = JSON.parse(storedUsers);
        const foundUser = users.find((u) => u.user === user);

        if (!foundUser) {
          signup({ name, lastName, age, user, password });
          notify("success", "You have successfully registered");
          navigate("/login");
        } else {
          notify("error", "This user is already in use");
        }
      } else {
        signup({ name, lastName, age, user, password });
        notify("success", "You have successfully registered");
        navigate("/login");
      }
    }
  };

  return {
    formValues,
    handleInputChange,
    passwordVisibility,
    changePasswordVisibility,
    handleSubmit,
  };
};
