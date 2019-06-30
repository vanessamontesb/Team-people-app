import React from 'react';
import "./achievements.css";






const Achievements = ({ points, name}) => {
    return (
        <>
        <figure className="achievementFigure">
            <figcaption className ="achievementFigcaption">{name} </figcaption>   
            <figcaption className ="achievementFigcaption"><span role="img" aria-label="star">⭐</span> {points} </figcaption>  
        </figure>
        </>
    );
}
 
export default Achievements;