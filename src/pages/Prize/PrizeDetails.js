import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from "../../constants";

const StyledProfile = styled.div`
    text-align: center;
`;

const StyledCharacter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
    margin: 10px 0;
`;

const StyledCharacterInfo = styled.div`
    text-align: left;
    margin-left: 10px;
`;

const StyledProfilePic = styled.img`
    height: 300px;
    width: 300px;
`;


const StyleDeletePrizeButton =styled.button`
    background: transparent;
    border-radius: 3px;
    border: 1px solid gray;
    transform: scale(1);
    transition: transform 0.35s ease-in-out;

`;


class PrizeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            characterInfo: {
                name: "",
                points: "",
                imgSrc: "",
                description: ""
               
            },
            error: ''
        }
    }

    componentDidMount = () => {
        const { match: { params: { id } } } = this.props;
        axios.get(`${API_URL}/prizes/${id}`)
        .then(response => {
            this.setState({
                characterInfo: response.data,
                error: ''
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })

        

    }

    deletePrize=(id)=>
    {
     axios.delete(`${API_URL}/prizes/${id}`)
     .then(()=>this.props.history.push('/prizes'))
    }
        

    render() { 
        const {
            characterInfo: {
                name,
                points,
                imgSrc,
                description,
                id
                
            }
        } = this.state;

        return ( 
            <StyledProfile>
                
                <StyledCharacter>
                    <StyledProfilePic src={imgSrc} alt="Prize"/>
                    <StyledCharacterInfo>
                    <StyleDeletePrizeButton>Edit prize</StyleDeletePrizeButton>
                        <p><b>Name : </b>{name}</p>
                        <p><b>Points: </b>{points}</p>
                        <p><b>Description: </b>{description}</p>
                        <StyleDeletePrizeButton onClick={()=>this.deletePrize(id)}>Delete</StyleDeletePrizeButton>
                    </StyledCharacterInfo>
                </StyledCharacter>
            </StyledProfile>
         );
    }
}
 
export default PrizeDetails;