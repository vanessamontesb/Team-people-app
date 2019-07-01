import React from 'react';
import "./prize.css"


const Prize = ({imgSrc, points, name }) => {
    return (
        <>
        <figure className ="prizeFigure">
            <img className="prizeImg" src={imgSrc} alt="prize"/>
            <h3 className="prizeFigcaptionName">{name} </h3>    
            <figcaption className="prizeFigcaption"> <span role="img" aria-label="star">⭐</span> {points}</figcaption>  
        </figure>
        </>
    );
}
 
export default Prize;