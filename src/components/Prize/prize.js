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

const Prize = ({imgSrc, points, name }) => {
    return (
        <StyledCharacterFigure>
            <StyledCharacterImg src={imgSrc} alt=""/>
            <StyledCharacterCaption>{name} </StyledCharacterCaption>    
            <StyledCharacterCaption> ⭐ {points} </StyledCharacterCaption>  
        </StyledCharacterFigure>
    );
}
 
export default Prize;