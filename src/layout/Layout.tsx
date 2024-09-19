import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import { Paper } from "@mui/material";
import Menu from "../components/menu/Menu";

const Layout = () => {
  return (
    <Grid container spacing={1}>
      <Grid size={4} >
        <Menu />
      </Grid>
      <Grid size={8} sx={{ height: "calc(100vh - 4rem)" }}>
        <Paper elevation={2} sx={{ height: '100%' }}>
          <Outlet />
        </Paper>
      </Grid>
    </Grid>
  )
};

export default Layout;
