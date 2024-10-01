import { useState } from "react";

const useNote = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    "edit" | "details" | null
  >(null);

  const handleOpenModal = (action: "edit" | "details") => {
    setSelectedAction(action);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedAction(null);
  };

  return {
    openModal,
    handleOpenModal,
    handleCloseModal,
    openDeleteDialog,
    setOpenDeleteDialog,
    selectedAction,
  };
};
export default useNote;
