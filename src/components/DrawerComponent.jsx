"use client";

//import react
import * as React from "react";

// import Next
import Link from "next/link";

// Material UI
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";

// Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import StyleIcon from "@mui/icons-material/Style";
import HotTubIcon from "@mui/icons-material/HotTub";
import InventoryIcon from "@mui/icons-material/Inventory";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import WebhookIcon from "@mui/icons-material/Webhook";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// Mixins
const openedMixin = (theme,drawerWidth) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open ,drawerWidth}) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open
    ? {
        ...openedMixin(theme,drawerWidth),
        "& .MuiDrawer-paper": openedMixin(theme,drawerWidth),
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
}));

 

export default function DrawerComponent({drawerWidth,isDrawerOpen, closeDrawerCallback})
{
     const theme = useTheme();

    const [materialUIMenuOpen, setMaterialUIMenuOpen] = React.useState(false);
    const [tailwindcssMenuOpen, setTailwindcssMenuOpen] = React.useState(false);
    const [useStateMenuOpen, setUseStateMenuOpen] = React.useState(false);
    const [useContextMenuOpen, setUseContextMenuOpen] = React.useState(false);
    const [useEffectMenuOpen, setUseEffectMenuOpen] = React.useState(false);
    const [useMemoMenuOpen, setUseMemoMenuOpen] = React.useState(false);
    const [useReducerMenuOpen, setUseReducerMenuOpen] = React.useState(false);
    const [apiMenuOpen, setApiMenuOpen] = React.useState(false);
    const [localizationMenuOpen, setLocalizationMenuOpen] = React.useState(false);
    const [reduxMenuOpen, setReduxMenuOpen] = React.useState(false);

    // Menu rendering helpers
  const renderMenuItem = (href, icon, text) => (
    <ListItemButton
      component={Link}
      href={href}
      sx={{ minHeight: 48, px: 2.5, justifyContent: isDrawerOpen ? "initial" : "center" }}
    >
      <ListItemIcon sx={{ minWidth: 0, justifyContent: "center", mr: isDrawerOpen ? 3 : "auto" }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />
    </ListItemButton>
  );

  const renderCollapseMenu = (open, toggle, items, icon, text) => (
    <>
      <ListItemButton
        onClick={() => toggle(!open)}
        sx={{ minHeight: 48, px: 2.5 , justifyContent: isDrawerOpen ? "initial" : "center" }}
      >
        <ListItemIcon sx={{ minWidth: 0, justifyContent: "center", mr: isDrawerOpen ? 3 : "auto" }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />
        <Box sx={{ display: isDrawerOpen ? 'block' : 'none'  }}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item) => (
            <ListItemButton key={item.text} component={Link} href={item.href} sx={{ pl: 4 }}>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );

    
    return (
        <Drawer variant="permanent" drawerWidth={drawerWidth} open={isDrawerOpen}>
              <DrawerHeader>
              <IconButton onClick={closeDrawerCallback}>
                  {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
              </DrawerHeader>

              <Divider />
              
              <List>

                {renderMenuItem("/", <HomeIcon />, "Home")}
                {renderMenuItem("/css", <StyleIcon />, "CSS")}
                {renderMenuItem("/javascript", <HotTubIcon />, "JavaScript")}
                {renderMenuItem("/products", <InventoryIcon />, "Products")}

                {renderCollapseMenu(materialUIMenuOpen, setMaterialUIMenuOpen, [{ href: "/materialUI", text: "Material UI" }], <AppsIcon />, "Material UI")}
                {renderCollapseMenu(tailwindcssMenuOpen, setTailwindcssMenuOpen, [{ href: "/tailwindcss", text: "tailwind" }], <AppsIcon />, "TailWind Css")}
                {renderCollapseMenu(useStateMenuOpen, setUseStateMenuOpen, [{ href: "/useState", text: "useState" },{ href: "/useState/arrays", text: "With Arrays" },{ href: "/useState/forms", text: "With Forms" },{ href: "/useState/loanForm", text: "Loan Form" },], <WebhookIcon />, "Hook (useState)")}
                {renderCollapseMenu(useContextMenuOpen, setUseContextMenuOpen, [{ href: "/useContext", text: "UseContext" }], <WebhookIcon />, "Hook (useContext)")}
                {renderCollapseMenu(useEffectMenuOpen, setUseEffectMenuOpen, [{ href: "/useEffect", text: "UseEffect" }], <WebhookIcon />, "Hook (useEffect)")}
                {renderCollapseMenu(useMemoMenuOpen, setUseMemoMenuOpen, [{ href: "/useMemo", text: "UseMemo" }], <WebhookIcon />, "Hook (useMemo)")}
                {renderCollapseMenu(useReducerMenuOpen, setUseReducerMenuOpen, [{ href: "/useReducer", text: "UseReducer" }], <WebhookIcon />, "Hook (useReducer)")}
                {renderCollapseMenu(apiMenuOpen, setApiMenuOpen, [{ href: "/api/weather", text: "Weather" }], <WebhookIcon />, "API (Axios)")}
                {renderCollapseMenu(localizationMenuOpen, setLocalizationMenuOpen, [{ href: "/localization/i18n", text: "i18n" }], <WebhookIcon />, "Localization")}
                {renderCollapseMenu(reduxMenuOpen, setReduxMenuOpen, [{ href: "/redux/counter", text: "Counter" },{ href: "/redux/weather", text: "Weather" },], <WebhookIcon />, "Redux (State Mgmt)")}

              </List>

          </Drawer>
    );

}