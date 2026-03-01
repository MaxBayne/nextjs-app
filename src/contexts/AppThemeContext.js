"use client"

import { createContext } from 'react';


export const AppThemeContext = createContext(
    {
        mode: "light",
        toggleTheme: () => {}
    }
);
















