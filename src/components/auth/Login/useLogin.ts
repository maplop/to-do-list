import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../../hooks/useNotification";
import { User } from "../../../context/AuthContext";

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { notify } = useNotification();

  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const [formValues, setFormValues] = useState({
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
    const { user, password } = formValues;
    if (user && password) {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        const users: User[] = JSON.parse(storedUsers);
        const foundUser = users.find(
          (u) => u.user === user && u.password === password
        );

        if (foundUser) {
          login(user, password);
          notify("success", "You have successfully logged in");
          navigate("/");
        } else {
          notify("error", "Invalid credentials. Please try again.");
        }
      } else {
        notify("error", "User does not exist. Please sign up.");
      }
    } else {
      notify("warning", "Please fill in all fields.");
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
