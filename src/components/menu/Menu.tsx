import { MenuList, Paper, ListItemIcon, MenuItem, ListItemText, Divider, Stack, Box, Typography, Tooltip, IconButton, Avatar } from "@mui/material"
import { Description, Category, AccountCircle, PowerSettingsNew } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { SvgIconComponent } from '@mui/icons-material';
import { useAuth } from "../../hooks/useAuth";
interface MenuItem {
  icon: SvgIconComponent;
  text: string;
  link: string;
}

const menu: MenuItem[] = [
  {
    icon: Description,
    text: 'My Notes',
    link: '/notes'
  },
  {
    icon: Category,
    text: 'Categories',
    link: '/categories'
  },
  {
    icon: AccountCircle,
    text: 'Profile',
    link: '/profile'
  }

]

const Menu = () => {

  const { user, logout } = useAuth()

  return (
    <Paper elevation={2}>
      <Stack sx={{ width: 320, maxWidth: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, width: '100%', height: 50 }}>
          <Box sx={{ width: 34, height: 34, display: 'flex', }}>
            <img src="/sticky-note.png" alt="logo" />
          </Box>
          <Typography variant="h5" color="primary" sx={{ fontSize: 28, fontWeight: 700 }}>Note Space</Typography>
        </Box>
        <Divider />
        <MenuList>
          {menu.map((item, index) => (
            <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }} key={index}>
              <MenuItem>
                <ListItemIcon>
                  <item.icon fontSize="small" />
                </ListItemIcon>
                <ListItemText sx={{ textAlign: 'start' }}>
                  <Typography variant="subtitle1">{item.text}</Typography>
                </ListItemText>
              </MenuItem>
            </Link>
          ))}
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, py: 1 }}>
            <Stack direction='row' alignItems='center' spacing={1}>
              <Avatar
                src={user?.avatar}
                alt="Vista previa"
                sx={{ width: 36, height: 36 }}
              />
              <Typography variant="body2">{user?.user}</Typography>
            </Stack>
            <Tooltip title="Log out">
              <IconButton onClick={logout} >
                <PowerSettingsNew fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </MenuList>
      </Stack>
    </Paper>
  )
}
export default Menu