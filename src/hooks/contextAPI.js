import React, {useContext, createContext, useEffect, useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [colorTheme, setColorTheme] = useState("dark-mode");
    const [isTemplateOpen, setIsTemplateOpen] = useState(false);
    const [changeTemp, setChangeTemp] = useState("template-1");

    // light and dark mode functionality
    useEffect(()=>{
        // making so that the color theme is same even if we refresh using local storage to store the color theme
        const currentTheme = localStorage.getItem("theme");
        setColorTheme(currentTheme);
    }, []) // runs once

    const handleTheme = (theme) => {
        setColorTheme(theme);// set the color theme to whatever theme is passed through the function
        localStorage.setItem('theme', theme);
    }

    // switch mode template functionality
    useEffect(()=> {
        const currentTemp = localStorage.getItem("temp");
        setChangeTemp(currentTemp);
    },[])
    const handleTemp = (temp) => {
        setChangeTemp(temp);
        localStorage.setItem("temp", temp);
    }

    const handleTemplateOpen = () => {
        setIsTemplateOpen(true);
    }
    const handleTemplateClose = () => {
        setIsTemplateOpen(false);
    }
    
    return(
        <AppContext.Provider value={{handleTemplateOpen, handleTemplateClose, handleTemp, handleTheme, setIsTemplateOpen, colorTheme, isTemplateOpen, changeTemp}}>
            <div className={`wrapper ${colorTheme === "dark-mode" ? "dark-mode" : "light-mode" } `} id = {`${changeTemp}`}>
            {children}
            </div>
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {useGlobalContext, AppProvider}