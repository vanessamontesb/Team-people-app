
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from "../../constants";

const StyledCharacterForm = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, auto);

    input[name="image"] {
        grid-column: 1/3;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, auto);
        input[name="image"] {
            grid-column: 1/2;
        }
    }

    @media (max-width: 475px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
        input[name="image"] {
            grid-column: 1/2;
        }
    }

    button {
        cursor: pointer;
        background: transparent;
        border: 1px solid #fff;
        font-size: 16px;
        color: #fff;
        border-radius: 5px;
        transition: background 0.37s ease-in-out;
        margin: 5px;

        :hover {
            background: #ffffff33;
            transition: background 0.37s ease-in-out;
        }
    }
`;

const StyledCharactersGrid = styled.div`
    margin-top: 10px;
    display: grid;
    justify-content: center;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, 200px);
`;

const StyledCharacterInput = styled.input`
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #222;
    font-size: 16px;
    padding: 5px 5px 5px 10px;
`;

const StyledFormContainer = styled.div`
    color: #fff;
    padding: 10px;
    background-color: #555;
`;

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


class EditAchievement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            characterInfo: {
                name: "",
                points: "",
                
               
            },
            error: ''
        }
    }

    componentDidMount = () => {
        const { match: { params: { id } } } = this.props;
        axios.get(`${API_URL}/achievements/${id}`)
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

    handleChange = e => {
        const newInfo = this.state.characterInfo;
        newInfo[e.target.name] = e.target.value;
    
        this.setState({
          characterInfo: newInfo
        });
      };
    

    deletePrize=(id)=>
    {
     axios.delete(`${API_URL}/achievements/${id}`)
     .then(()=>this.props.history.push('/achievements'))
    }

    handleInputChange = (value, field) => {
        this.setState(prevState => ({
            newCharacterFrom: {
                ...prevState.newCharacterFrom,
                [field]: value
            }
        }))
    }

    editEmployee = e => {
        e.preventDefault();
        console.log("submit from edit");
        console.log(this.state.characterInfo);
    
        const id = this.props.match.params.id;
    
        axios.put(`${API_URL}/achievements/${id}`, {
            
            name: this.state.characterInfo.name,
            points: this.state.characterInfo.points,
           
            
        }) .then(()=>this.props.history.push('/achievements'));

      };
        
      createTextInput = (value, field) => (
        <StyledCharacterInput
            required
            type="text"
            name={field}
            placeholder={field}
            onChange={(e) => this.handleInputChange(e.target.value, field)}
            value={value}
        />)


    render() { 
        const {
            characterInfo: {
                name,
                points,
                id
                
            }
        } = this.state;

        return ( 
            <StyledProfile>

                <StyledFormContainer>


                <StyledCharacterForm onSubmit={e => this.editEmployee(e)}
                onChange={this.handleChange}
                formValues={this.state.characterInfo}>
                {this.createTextInput(name, 'name')}
                {this.createTextInput( points, 'points')}
                <StyleDeletePrizeButton  type="submit" onClick={this.editEmployee}>Save</StyleDeletePrizeButton>
                

               
                </StyledCharacterForm>
                </StyledFormContainer>
                
                <StyledCharacter>
                    <StyledCharacterInfo>
                        <p><b>Name : </b>{name}</p>
                        <p><b>Points: </b>{points}</p>
                        <StyleDeletePrizeButton onClick={()=>this.deletePrize(id)}>Delete</StyleDeletePrizeButton>
                    </StyledCharacterInfo>
                </StyledCharacter>
            </StyledProfile>
         );
    }
}
 

export default EditAchievement