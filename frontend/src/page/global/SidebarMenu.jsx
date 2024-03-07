import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React, { useState } from "react";
import { Menu, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useLocation } from "react-router-dom";
import { sidebarMenu } from "../../Constant/sidebarMenu";
import { tokens } from "../../styles/theme";
import SidebarMenuItem from "./SidebarMenuItem";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .pro-sidebar-inner": {
      background: `white !important`,
    },
    "& .pro-icon-wrapper": {
      backgroundColor: "transparent !important",
    },
    "& .pro-inner-item": {
      padding: "5px 35px 5px 20px !important",
      display: "flex !important",
      alignItems: "center !important",
      cursor: "pointer",
      // justifyContent: "space-evenly !important",
    },
    "& .pro-inner-item:hover": {
      color: "#868dfb !important",
    },
    "& .pro-menu-item.active": {
      color: "#6870fa !important",
    },
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    height: "77px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    // width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const SidebarMenu = () => {
  const location = useLocation();
  const urlPathName = location.pathname;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(urlPathName);

  const classes = useStyles();
  const colorMode = React.useContext(ColorModeContext);
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => setOpen(!open)}>
            {open == false ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <ProSidebar collapsed={!open}>
          <Menu iconShape="square">
            <List>
              {sidebarMenu.map((menu) =>
                menu.tag === "divider" ? (
                  <Typography
                    variant="h6"
                    key={menu.title}
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    {menu.title}
                  </Typography>
                ) : (
                  <SidebarMenuItem
                    key={menu.title}
                    menu={menu}
                    selected={selected}
                    setSelected={setSelected}
                  />
                )
              )}
            </List>
          </Menu>
        </ProSidebar>
        <Divider />
      </Drawer>
    </div>
  );
};

export default SidebarMenu;
