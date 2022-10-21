import React from "react";
import About from "../about/About";
import Header from '../../components/header/Header'
import ProjectPage from "../project/ProjectPage";
import Contact from "../contact/Contact";
const Home = () => {
    return(
        <div>
            <Header/>
            <section className="section-about">
                <About />
            </section>
            <ProjectPage/>
            <Contact/>
        </div>
    )
}

export default Home;