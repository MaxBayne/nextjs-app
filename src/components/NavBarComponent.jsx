"use client";

//import react
import * as React from "react";

//import next components
import Image from "next/image";

//import material ui components
import { styled ,useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

//import material icons
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// Context
import { AppThemeContext } from "@/contexts/AppThemeContext.js";

// ✅ Filter BOTH props
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function NavBarComponent({drawerWidth,isDrawerOpen, openDrawerCallback}) 
{

    const theme = useTheme();
    
    const { modeTheme, toggleTheme } = React.useContext(AppThemeContext);

  return (
    <AppBar position="fixed" drawerWidth={drawerWidth}  open={isDrawerOpen} >
      
      <Toolbar>

        {/* Drawer Toggle */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawerCallback}
          edge="start"
          sx={{ mr: 5, ...(isDrawerOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Box sx={{ mr: 3 }}>
          <Image
            src="/images/next.svg"
            alt="NextJs Logo"
            width={100}
            height={50}
            priority
          />
        </Box>

        {/* Title */}
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} />

        {/* Theme Toggle */}
        <IconButton onClick={toggleTheme} color="inherit">
          {modeTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}