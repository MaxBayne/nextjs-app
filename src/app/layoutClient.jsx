"use client"; // <-- mandatory for client-side hooks & MUI


// React
import * as React from "react";

// Material UI
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// Custom Components
import NavBarComponent from "@/components/NavBarComponent";
import DrawerComponent from "@/components/DrawerComponent";
import ContentComponent from "@/components/ContentComponent";

//import context providers
import AppThemeProvider from '@/providers/AppThemeProvider.jsx'
import UserProvider from '@/providers/UserProvider.jsx'
import ToastProvider from '@/providers/ToastProvider.jsx'
import ReduxProvider from '@/providers/ReduxProvider'
import ProductsProvider from '@/providers/ProductsProvider.jsx'


export default function LayoutClient({ children }) 
{
  // Drawer width
  const drawerWidth = 280;

  // Drawer state
  const [drawerMenuOpen, setDrawerMenuOpen] = React.useState(true);

  function openDrawer() {
    setDrawerMenuOpen(true);
  }
  function closeDrawer() {
    setDrawerMenuOpen(false);
  }

  return (
    <ReduxProvider>
      <AppThemeProvider>
        <UserProvider>
          <ProductsProvider>
            <ToastProvider>
              
              <Box sx={{ display: "flex" }}>

                <CssBaseline />

                {/* Nav Bar */}
                <NavBarComponent drawerWidth={drawerWidth} isDrawerOpen={drawerMenuOpen} openDrawerCallback={openDrawer} />

                {/* Drawer */}
                <DrawerComponent drawerWidth={drawerWidth} isDrawerOpen={drawerMenuOpen} closeDrawerCallback={closeDrawer} />

                {/* Content */}
                <ContentComponent>{children}</ContentComponent> 

              </Box>

            </ToastProvider>
          </ProductsProvider>
        </UserProvider>
      </AppThemeProvider>
    </ReduxProvider>
  );
}