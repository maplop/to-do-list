import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import Menu from "../components/menu/Menu";

const Layout = () => {
  return (
    <Grid container>
      <Grid size={4} >
        <Menu />
      </Grid>
      <Grid size={8} sx={{ bgcolor: 'blue' }} >
        <Outlet />
      </Grid>
    </Grid>
  )
};

export default Layout;
