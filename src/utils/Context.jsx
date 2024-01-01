import { createContext, useEffect, useState } from "react";



export const Context=createContext();

const AppContext=({children})=>{

    const [darkMode,SetDarkMode]=useState(false)

    const toggleTheme=()=>{
        SetDarkMode(prev=>!prev)
    }

    const theme=darkMode ? "dark":"light";

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
    },[darkMode])

    return(
        <Context.Provider value={{
            theme,
            toggleTheme,
        }}>
            {children}
        </Context.Provider>
    )
}


export default AppContext