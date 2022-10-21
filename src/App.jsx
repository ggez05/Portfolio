import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Sidebar, ThemeTemplates} from './components/index'
import "./App.scss"
import {Home, About, Contact, ErrorPage, ProjectPage} from './pages/index'
const App = () => {
    return(
        // specifying the routes for the website
        <BrowserRouter>
        <Sidebar/>
        <ThemeTemplates/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<ProjectPage />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;