import { useState } from "react";

export const useNewCategory = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activePopoverId, setActivePopoverId] = useState<string | null>(null);

  const openPopover = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setActivePopoverId(id);
  };

  const closePopover = () => {
    setAnchorEl(null);
    setActivePopoverId(null);
  };

  const isOpen = (id: string) => activePopoverId === id;

  return {
    anchorEl,
    openPopover,
    closePopover,
    isOpen,
  };
};
