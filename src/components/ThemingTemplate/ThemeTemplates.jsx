import React from "react";
import {FiSettings} from 'react-icons/fi'
import {BsMoonStars, BsFillSunFill, BsXLg} from 'react-icons/bs'
import { useGlobalContext } from "../../hooks/contextAPI";
import "./themetemplate.scss"
import "../../utils/templateColors.scss"

const ThemeTemplates = () => {
    const { changeTemp, setChangeTemp, handleTemp, isTemplateOpen, setIsTemplateOpen, handleTemplateOpen, handleTemplateClose, colorTheme, handleTheme } = useGlobalContext();
    return(
        <>
            {/**FI SETTINGS WORKED HERE */}
            <div className="theme-icon-wrapper" onClick={handleTemplateOpen}>
                <FiSettings className="theme-icon switch__color"></FiSettings>
            </div>
            {/**THEME WRAPPER */}
            <div className={`${isTemplateOpen ? "theme-wrapper show-template" :"theme-wrapper"}`}>
                {/**THEME HEADER */}
                <div className="theme-header">
                    <span>Theme Template</span>
                    <span>
                        <BsXLg className="close-template switch__color" onClick={handleTemplateClose}/>
                    </span>
                </div>
                {/**MODE (LIGHT MODE DARK MODE) */}
                <div className="mode">
                    <div className={`${colorTheme === "light-mode" ? "active-mode" : ""}`}  onClick={()=> {
                        handleTheme("light-mode");
                    }}>
                        <BsFillSunFill className="icon switch__color" />
                    </div>
                    <div className={`${colorTheme === "dark-mode" ? "active-mode" : ""}`} onClick={()=>{
                        handleTheme("dark-mode");
                    }}>
                        <BsMoonStars className="icon switch__color"  />
                    </div>
                </div>
                {/**TEMPLATE WRAPPER */}
                <div  className="template-wrapper">
                    {/**TEMPLATE WRAPPER 1 */}
                    <div onClick={() => handleTemp("template-1")} className={`template ${changeTemp === "template-1" ? "switch__border-color" : ""}`}>
                        <div className="template-1"></div>
                    </div>
                    {/**TEMPLATE WRAPPER 2 */}
                    <div onClick={() => handleTemp("template-2")} className={`template ${changeTemp === "template-2" ? "switch__border-color" : ""}`}>
                        <div className="template-2"></div>
                    </div>
                    {/**TEMPLATE WRAPPER 3 */}
                    <div onClick={() => handleTemp("template-3")} className={`template ${changeTemp === "template-3" ? "switch__border-color" : ""}`}>
                        <div className="template-3"></div>
                    </div>
                    {/**TEMPLATE WRAPPER 4 */}
                    <div onClick={() => handleTemp("template-4")} className={`template ${changeTemp === "template-4" ? "switch__border-color" : ""}`}>
                        <div className="template-4"></div>
                    </div>
                    {/**TEMPLATE WRAPPER 5 */}
                    <div onClick={() => handleTemp("template-5")} className={`template ${changeTemp === "template-5" ? "switch__border-color" : ""}`}>
                        <div className="template-5"></div>
                    </div>
                    {/**TEMPLATE WRAPPER 6 */}
                    <div onClick={() => handleTemp("template-6")} className={`template ${changeTemp === "template-6" ? "switch__border-color" : ""}`}>
                        <div className="template-6"></div>
                    </div>
                    {/**TEMPLATE WRAPPER 7 */}
                    <div onClick={() => handleTemp("template-7")} className={`template ${changeTemp === "template-7" ? "switch__border-color" : ""}`}>
                        <div className="template-7"></div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ThemeTemplates