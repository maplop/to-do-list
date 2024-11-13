import { Typography, Box, Button } from '@mui/material';
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1, mt: 3 }}>
          <Button variant="contained" disabled component="label" sx={{ span: { fontSize: '12px', textTransform: 'none' } }}>
            Upload <span> (coming soon)</span>
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  const fileUrl = URL.createObjectURL(e.target.files[0]);
                  handleAvatarSelect(fileUrl);
                  handleClose();
                }
              }}
            />
          </Button>
        </Box>
      </Box>
    </GenericModal>
  );
}
export default SelectAvatars
