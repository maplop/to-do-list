import { useState } from "react";

const useNote = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return {
    showDetails,
    setShowDetails,
    openDeleteDialog,
    setOpenDeleteDialog,
  };
};
export default useNote;
