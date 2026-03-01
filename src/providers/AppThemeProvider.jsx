"use client";

import React, { useMemo, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppThemeContext } from "@/contexts/AppThemeContext";
import { lightTheme, darkTheme } from "@/themes/muiThemes";

const THEME_KEY = "app-theme-mode";

export default function AppThemeProvider({ children }) {
  const [mode, setMode] = useState("light"); // safe default
  const [mounted, setMounted] = useState(false);

  // Read from localStorage AFTER mount
  useEffect(() => {
    const storedMode = localStorage.getItem(THEME_KEY);
    if (storedMode === "light" || storedMode === "dark") {
      setMode(storedMode);
    }
    setMounted(true);
  }, []);

  // Save to localStorage when mode changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(THEME_KEY, mode);
    }
  }, [mode, mounted]);

  const toggleTheme = () => {
    setMode(prev => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <AppThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}