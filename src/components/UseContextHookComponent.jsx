'use client';

//import react
import { useContext } from "react";

//import context
import { UserContext } from "@/contexts/UserContext";
import { AppThemeContext } from "@/contexts/AppThemeContext";

export default function UseContextHookComponent()
{
    const userContext = useContext(UserContext);
    const themeContext = useContext(AppThemeContext);




    return(
        <>

        <u>UserName:</u> {userContext.userName}
        <br/>
        <u>Email:</u> {userContext.email}
        <br/>
        <u>Address:</u> {userContext.address}
        <br/>
        <u>Active Theme</u> {themeContext.theme}
        <br/>
        <button onClick={themeContext.toggleTheme}>Toggle Theme</button>
        
        </>
    );
}