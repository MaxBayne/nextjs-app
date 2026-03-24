"use client";

import * as React from "react";

import NavBarComponent from "@/components/NavBarComponent";
import DrawerComponent from "@/components/DrawerComponent";
import ContentComponent from "@/components/ContentComponent";

import AppThemeProvider from '@/providers/AppThemeProvider.jsx'
import UserProvider from '@/providers/UserProvider.jsx'
import ToastProvider from '@/providers/ToastProvider.jsx'
import ReduxProvider from '@/providers/ReduxProvider'
import ProductsProvider from '@/providers/ProductsProvider.jsx'

export default function LayoutClient({ children }) {
  const drawerWidth = 280;
  const [drawerMenuOpen, setDrawerMenuOpen] = React.useState(true);

  function openDrawer() { setDrawerMenuOpen(true); }
  function closeDrawer() { setDrawerMenuOpen(false); }

  return (
    <ReduxProvider>
      <AppThemeProvider>
        <UserProvider>
          <ProductsProvider>
            <ToastProvider>

              <div className="flex min-h-screen">
                
                <NavBarComponent
                  drawerWidth={drawerWidth}
                  isDrawerOpen={drawerMenuOpen}
                  openDrawerCallback={openDrawer}
                />
                <DrawerComponent
                  drawerWidth={drawerWidth}
                  isDrawerOpen={drawerMenuOpen}
                  closeDrawerCallback={closeDrawer}
                />
                <ContentComponent
                  drawerWidth={drawerWidth}
                  isDrawerOpen={drawerMenuOpen}>
                    {children}
                </ContentComponent>

              </div>

            </ToastProvider>
          </ProductsProvider>
        </UserProvider>
      </AppThemeProvider>
    </ReduxProvider>
  );
}