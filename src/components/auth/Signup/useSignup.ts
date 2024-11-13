import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { UserType } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../../hooks/useNotification";
import { lsKeys } from "../../../utils/lskeys";
import { maleAvatars, femaleAvatars, allAvatars } from "../../../data/avatars";
import { v4 as uuidv4 } from "uuid";

export const useSignup = () => {
  const { signup } = useAuth();
  const { notify } = useNotification();
  const navigate = useNavigate();

  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const getRandomAvatar = (gender: "male" | "female" | "other"): string => {
    if (gender === "male")
      return maleAvatars[Math.floor(Math.random() * maleAvatars.length)];
    if (gender === "female")
      return femaleAvatars[Math.floor(Math.random() * femaleAvatars.length)];
    return allAvatars[Math.floor(Math.random() * allAvatars.length)];
  };

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const [formValues, setFormValues] = useState<Omit<UserType, "id" | "avatar">>(
    {
      name: "",
      lastName: "",
      age: 18,
      user: "",
      password: "",
      gender: "male",
    }
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      gender: e.target.value as "male" | "female" | "other",
    });
  };

  const handleSubmit = () => {
    const { name, lastName, age, user, password, gender } = formValues;
    if (name && user && password) {
      const storedUsers = localStorage.getItem(lsKeys.USERS);
      const users: UserType[] = storedUsers ? JSON.parse(storedUsers) : [];

      const foundUser = users.find((u) => u.user === user);

      if (!foundUser) {
        const avatar = getRandomAvatar(gender as "male" | "female" | "other");
        const newUser: UserType = {
          id: uuidv4(),
          name,
          lastName,
          age,
          user,
          password,
          gender,
          avatar,
        };
        signup(newUser);
        notify("success", "You have successfully registered");
        navigate("/login");
      } else {
        notify("error", "This user is already in use");
      }
    }
  };

  return {
    formValues,
    handleInputChange,
    passwordVisibility,
    changePasswordVisibility,
    handleGenderChange,
    handleSubmit,
  };
};
