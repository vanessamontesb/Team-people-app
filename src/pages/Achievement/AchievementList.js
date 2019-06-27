import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from "../../constants";
import Achievements from '../../components/Achievements/achievement';

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

const StyleDeletePrizeButton =styled.button`
    background: transparent;
    border-radius: 3px;
    border: 1px solid gray;
    transform: scale(1);
    transition: transform 0.35s ease-in-out;

`;

class AchievementList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            achievements: {
                content: [],
                error: false
            },
            newCharacterFrom: {
                name:"",
                points:"",
                
            },
            filterText: "",
            createCharacterError: false
         }
    }

    componentDidMount = () => {
        this.getCharacters();

    }

    handleTextChange = (e, keyText) => {
        const value = e.target.value;
        this.setState({ [keyText]: value })
      }


    getCharacters = () => {
        axios.get(`${API_URL}/achievements`)
        .then(response => {
            this.setState({
                achievements: {
                    content: response.data,
                    error: ''
                },
                createCharacterError: false
            })
        })
        .catch(error => {
            this.setState({
                achievements: {
                    error: error.message
                }
            })
        })
    }


    createCharacter = (e) => {
        e.preventDefault();
        const {
            newCharacterFrom: {
                name,
                points
            }
        } = this.state;

        axios.post(`${API_URL}/achievements`, {
            name,
            points
        }, {
            headers: { "Content-Type": "application/json"}
        })
        .then(() => { this.getCharacters() })
        .catch(() => { this.setState({ createCharacterError: true })})
    }

    createTextInput = (value, field) => (
        <StyledCharacterInput
            required
            type="text"
            name={field}
            placeholder={field}
            onChange={(e) => this.handleInputChange(e.target.value, field)}
            value={value}
        />
    )

    handleInputChange = (value, field) => {
        this.setState(prevState => ({
            newCharacterFrom: {
                ...prevState.newCharacterFrom,
                [field]: value
            }
        }))
    }

    render() {
        const {
            createCharacterError,
            achievements: { content, error },
            newCharacterFrom: {
                name,
                points
            },
            filterText,
        } = this.state;

        const filteredachievements = content.filter(achievement => achievement.name.includes(filterText));


        if (error) {
            return <div>Fetch Error: {error}</div>
        }

        return (
            <>

        <div className="filter-container">
          <input
            onChange={(e) => this.handleTextChange(e, "filterText")}
            placeholder="Search by name"
            className="filter-field"
            type="text"
            value={filterText}
          />
        </div>
                <StyledFormContainer>

                    {createCharacterError && <p>An error ocurred creating Character</p>}
                    <StyledCharacterForm onSubmit={e => this.createCharacter(e)}>
                        {this.createTextInput(name, 'name')}
                        {this.createTextInput( points, 'points')}
                       

                        <button type="submit">Create</button>
                    </StyledCharacterForm>
                </StyledFormContainer>
                <StyledCharactersGrid>

                    {filteredachievements.map(({ id, name, points})  => (


                        <Link  key={id} to={`/achievements/`}>
                         <StyleDeletePrizeButton onClick={console.log("jeje")}>Edit</StyleDeletePrizeButton>
                        <StyleDeletePrizeButton onClick={console.log("hi")}  >Delete</StyleDeletePrizeButton> 
                             <Achievements  name={name} points={points} />

                        </Link>

                    ))}
                </StyledCharactersGrid>
            </>
        );
    }
}

export default AchievementList;

