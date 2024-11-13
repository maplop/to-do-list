import { Box, Divider } from "@mui/material"
import Grid from '@mui/material/Grid2';
import PageTitle from "../common/PageTitle";
import ProfilePhotoChanger from "./PhotoChanger/ProfilePhotoChanger";
import TabProfile from "./TabProfile/TabProfile";
import { useProfileView } from "./useProfileView";

const ProfileView = () => {

  const { formValues, handleAvatarSelect, handleChange, handleSave, passwordValues, handleInputPasswordChange,
    handleChangePassword, } = useProfileView()

  return (
    <>
      <Box sx={{ textAlign: 'left', marginBottom: 1 }}>
        <PageTitle title="Profile" />
      </Box>
      <Divider />
      <Grid container spacing={2} mt={2}>
        <Grid size={4} >
          <ProfilePhotoChanger
            avatar={formValues?.avatar}
            handleAvatarSelect={handleAvatarSelect}
          />
        </Grid>
        <Grid size={8}>
          <TabProfile
            formValues={formValues}
            handleChange={handleChange}
            handleSave={handleSave}
            passwordValues={passwordValues}
            handleInputPasswordChange={handleInputPasswordChange}
            handleChangePassword={handleChangePassword}
          />
        </Grid>
      </Grid>
    </>

  )
}
export default ProfileView
