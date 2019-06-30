import React, { Component } from 'react';
import"./pageAchievement.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from "../../constants";
import Achievements from '../../components/Achievements/achievement';


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
                    content: response.data.sort(function (a, b) {
                        return a.points - b.points
                    }),
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
        <input className ="AchievementInput"
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
                points,
                
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
                <div className ="formContainer">

                    {createCharacterError && <p>An error ocurred creating Character</p>}
                    <form className ="creatAchievementform" onSubmit={e => this.createCharacter(e)}>
                        {this.createTextInput(name, 'name')}
                        {this.createTextInput( points, 'points')}
                       

                        <button type="submit">Create</button>
                    </form>
                </div>
                <div className ="achievementGrid">

                    {filteredachievements.map(({ id, name, points})  => (


                        <Link  key={id} to={(`/achievements/${id}`)}>
                        <button className ="editButton">Edit achievement</button>
                             <Achievements  name={name} points={points} />

                        </Link>

                    ))}
                </div>
            </>
        );
    }
}

export default AchievementList;

