import React from "react";
import { skillSet } from '../../data/data'
import './cards.scss'

const Cards = () => {
    return (
        <div className="about-description-skills">
            {skillSet.map((item, i) => {
                return (
                    <div key={i + item}>
                        <a href={item.url} className="skill-container" rel="noopener noreferrer" target="_blank">
                            {item.icon}
                            <span className="skill__name">{item.spanText}</span>
                            
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;