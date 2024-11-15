import * as React from 'react';
import Popover from '@mui/material/Popover';

interface GenericPopoverProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: React.ReactNode;
}


const GenericPopover: React.FC<GenericPopoverProps> = ({ open, anchorEl, onClose, children }) => {

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      {children}
    </Popover>
  );
};

export default GenericPopover;
