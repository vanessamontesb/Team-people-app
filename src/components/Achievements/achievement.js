import React from 'react';
import styled from 'styled-components';

export const StyledCharacterFigure = styled.figure`
    display: inline-block;
    border-radius: 5px;
    overflow: hidden;
    margin: 0;
`;

export const StyledCharacterImg = styled.img`
    width: 200px;
    height: 200px;
    vertical-align: middle;
`;
export const StyledCharacterCaption = styled.figcaption`
    background-color: #cdcdcd;
    text-decoration: none;
    color: #222;
    padding: 3px;
`;

// const StyleDeletePrizeButton =styled.button`
//     background: transparent;
//     border-radius: 3px;
//     border: 1px solid red;
//     transform: scale(1);
//     transition: transform 0.35s ease-in-out;
    
// `;
//<button onClick={deleteColor} className="delete-color">x</button>


const Achievements = ({ points, name}) => {
    return (
        <>
        <StyledCharacterFigure>
            <StyledCharacterCaption>{name} </StyledCharacterCaption>    
            <StyledCharacterCaption> <span role="img" aria-label="star">⭐</span> {points} </StyledCharacterCaption>  
        </StyledCharacterFigure>
        </>
    );
}
 
export default Achievements;