import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GenericModal from '../../common/GenericModal';
import WrapperAvatar from './WrapperAvatar';
import { allAvatars } from '../../../data/avatars';

interface SelectAvatarsProps {
  open: boolean,
  handleClose: () => void
  handleAvatarSelect: (avatar: string) => void
}

const SelectAvatars = ({ open, handleClose, handleAvatarSelect }: SelectAvatarsProps) => {

  return (
    <GenericModal open={open} handleClose={handleClose}>
      <Box sx={{ maxWidth: 320 }}>
        <Typography
          variant='body1'
          sx={{ textAlign: 'left', fontWeight: 600, mb: 3 }}>
          Choose an avatar or upload your own image.
        </Typography>
        <Grid container spacing={2}>
          {allAvatars.map((avatar, index) => (
            <Grid key={index} size={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%' }} onClick={() => {
                handleAvatarSelect(avatar);
                handleClose()
              }
              }>
                <WrapperAvatar img={avatar} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </GenericModal>
  );
}
export default SelectAvatars

