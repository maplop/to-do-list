import { useState } from "react";

export const useProfilePhotoChanger = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return {
    openModal,
    setOpenModal,
  };
};
