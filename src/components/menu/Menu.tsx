import { MenuList, ListItemIcon, MenuItem, ListItemText, Divider, Stack, Box, Typography, Tooltip, IconButton } from "@mui/material"
import { Description, Category, AccountCircle, PowerSettingsNew } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { SvgIconComponent } from '@mui/icons-material';

interface MenuItem {
  icon: SvgIconComponent;  // El tipo para JSX en TypeScript es ReactElement
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
  return (
    <Stack sx={{ width: 320, maxWidth: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, bgcolor: 'pink' }}>
        LOGO
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
            <AccountCircle fontSize="large" color="action" />
            <Typography variant="body2">username</Typography>
          </Stack>
          <Tooltip title="Log out">
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton  >
                <PowerSettingsNew fontSize="small" />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
      </MenuList>
    </Stack>
  )
}
export default Menu