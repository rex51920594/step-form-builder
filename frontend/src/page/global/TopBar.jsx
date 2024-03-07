import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@mui/material/InputBase";
import { ColorModeContext, tokens } from "../../styles/theme";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import NotificationsIcon from '@material-ui/icons/Notifications';
import TranslateIcon from '@material-ui/icons/Translate';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2} bgcolor="#3f51b5">
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Mega Form
        </Typography>

        <IconButton onClick={colorMode.toggleColorMode}>
          {
            // by user click toggle UI theme color...
            theme.palette.mode === "dark" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )
          }
        </IconButton>
        <IconButton color="white">
            <TranslateIcon style={{ fontSize: 30,color:"white" }} >
              <NotificationsIcon />
            </TranslateIcon>
          </IconButton>
    </Box>
  );
};

export default Topbar;
