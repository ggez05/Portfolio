import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Blast from '../BlastAnimation/Blast'
import Logo from "../logoAnimation/Logo";
import {MdArrowDropDown} from 'react-icons/md'
import './header.scss'


const nameArray = ["G" , "a" , "r" , "v" , "i" , "t" , "  ", "B" , "h", "a", "t", "i", "a"];
const jobArray = ["W", "e", "b", "  " , "D" , "e" , "v" , "e" , "l" , "o", "p", "e", "r"];



const Header = () => {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(()=>{
        setTimeout(()=> {
            setLetterClass("text-animate-hover");
        },4000);
    });

    return (
        <section className="section-1 header__container section__padding">
            <main className="intro-page">
                <h1>
                <span className={`${letterClass} _12`}>H</span>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>,</span>

                <br/>
                    <span className={`${letterClass} _15`}>I</span>
                    <span className={`${letterClass} _16`}>'</span>
                    <span className={`${letterClass} _17`}>m</span>{' '}
                    <Blast letterClass ={letterClass} arrayStr = {nameArray} indexLetter={7}/> <br/>
                    <Blast letterClass={letterClass} arrayStr={jobArray} indexLetter={12} />
                </h1>
                <p className="text-desc">
                    WEV DEVELOPER / SOFTWARE DEVELOPER
                </p>
                <Link to={"/contact"} className="contact-button">
                    <div >
                        <span className="bg switch__bg"></span>
                        <span className="base switch__border-color"></span>
                        <span className="text">Contact Me</span>
                    </div>
                </Link>
                <Logo />
                <div className="scroll__wrapper switch__color">
                    <MdArrowDropDown className="scroll__down switch__color"/>
                </div>
            </main>
            
        </section>
    );
}

export default Header;