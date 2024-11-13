import { Box, Avatar } from '@mui/material';
import { useProfilePhotoChanger } from './useProfilePhotoChanger';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { grey } from '@mui/material/colors';
import SelectAvatars from './SelectAvatars';

interface ProfilePhotoChangerProps {
  avatar?: string,
  handleAvatarSelect: (avatar: string) => void
}

const ProfilePhotoChanger = ({ avatar, handleAvatarSelect }: ProfilePhotoChangerProps) => {

  const { openModal, setOpenModal } = useProfilePhotoChanger()

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        <Avatar
          src={avatar || ""}
          alt="Vista previa"
          sx={{ width: 100, height: 100 }}
        />
        <Box
          onClick={() => setOpenModal(true)}
          sx={{
            width: 38,
            height: 38,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '100%',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: grey[300]
            },

            svg: {
              width: '20px'
            }
          }}
        >
          <CameraAltOutlinedIcon />
        </Box>
      </Box>
      <SelectAvatars
        open={openModal}
        handleClose={() => setOpenModal(false)}
        handleAvatarSelect={handleAvatarSelect}
      />
    </>
  );
}

export default ProfilePhotoChanger;
