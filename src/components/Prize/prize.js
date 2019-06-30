import React from 'react';
import "./prize.css"


const Prize = ({imgSrc, points, name, deleteColor }) => {
    return (
        <>
        <figure className ="prizeFigure">
            <img className="prizeImg" src={imgSrc} alt="prize"/>
            <figcaption className="prizeFigcaption">{name} </figcaption>    
            <figcaption className="prizeFigcaption"> <span role="img" aria-label="star">⭐</span> {points}</figcaption>  
        </figure>
        </>
    );
}
 
export default Prize;