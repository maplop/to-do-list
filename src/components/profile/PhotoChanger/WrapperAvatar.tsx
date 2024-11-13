import { Box, Avatar } from "@mui/material"

interface WrapperAvatarProps {
  img: string
}

const WrapperAvatar = ({ img }: WrapperAvatarProps) => {
  return (
    <Box sx={{ border: '3px solid transparent', width: 'fit-content', borderRadius: '100%', overflow: 'hidden', cursor: 'pointer', ':hover': { border: '3px solid #1976D2' } }}>
      <Avatar alt="avatar" src={img} sx={{ width: 56, height: 56 }} />
    </Box>
  )
}
export default WrapperAvatar