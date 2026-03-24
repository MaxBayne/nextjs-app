"use client";

import * as React from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AppThemeContext } from "@/contexts/AppThemeContext.js";

export default function NavBarComponent({ drawerWidth, isDrawerOpen, openDrawerCallback }) {
  const { modeTheme, toggleTheme } = React.useContext(AppThemeContext);

  return (
    <header
      className="fixed top-0 right-0 z-[1201] flex items-center h-16 px-4 bg-blue-700 text-white shadow-md transition-all duration-300 ease-in-out"
      style={{
        left: isDrawerOpen ? `${drawerWidth}px` : "0px",
        width: isDrawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
      }}
    >
      {/* Drawer Toggle — hidden when drawer is open */}
      {!isDrawerOpen && (
        <button
          onClick={openDrawerCallback}
          aria-label="open drawer"
          className="mr-5 p-1 rounded hover:bg-blue-600 transition-colors"
        >
          <MenuIcon />
        </button>
      )}

      {/* Logo */}
      <div className="mr-4">
        <Image
          src="/images/next.svg"
          alt="NextJs Logo"
          width={100}
          height={50}
          priority
        />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        aria-label="toggle theme"
        className="p-1 rounded hover:bg-blue-600 transition-colors"
      >
        {modeTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </header>
  );
}