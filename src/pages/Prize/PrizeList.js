import React, { Component } from 'react';
import "./pagePrize.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from "../../constants";
import Prize from '../../components/Prize/prize';



class PrizeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prizes: {
                content: [],
                error: false
            },
            newCharacterFrom: {
                name:"",
                points:"",
                imgSrc:"",
                description:""
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
        axios.get(`${API_URL}/prizes`)
        .then(response => {
            this.setState({
                prizes: {
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
                prizes: {
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
                points,
                imgSrc,
                description
            }
        } = this.state;

        axios.post(`${API_URL}/prizes`, {
            name,
            points,
            imgSrc,
            description
        }, {
            headers: { "Content-Type": "application/json"}
        })
        .then(() => { this.getCharacters() 
            window.location.reload()
        })
        .catch(() => { this.setState({ createCharacterError: true })})
    }

    createTextInput = (value, field) => (
        <input className ="createPrizeInput"
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

    openForm(e){
        this.setState({open: !this.state.open})
      }

    render() {
        const {
            createCharacterError,
            prizes: { content, error },
            newCharacterFrom: {
                name,
                points,
                imgSrc,
                description
            },
            filterText,
        } = this.state;

        const filteredPrizes = content.filter(prize => prize.name.includes(filterText));


        if (error) {
            return <div>Fetch Error: {error}</div>
        }

        return (
            <>
        <div className="searchBar-addButtonContainer">
        <div className="filterContainer">
          <input 
            onChange={(e) => this.handleTextChange(e, "filterText")}
            placeholder="Search by prize name"
            className="filter-field"
            type="text"
            value={filterText}
          />
        
        </div>
        <div className="addButtonContainer">
        <button className="button_general" onClick={(e)=> this.openForm(e)}>Add New</button>
        </div>
       
        </div>
                 
                 {this.state.open? (
                     <div >
                     <div className ="createContainer">
                     <Prize imgSrc={imgSrc} name={name} points={points}/>
                    </div>
                 <div className="createPrizeContainer">

                    {createCharacterError && <p>An error ocurred creating Character</p>}
                   
                    <form className="prizeForm" onSubmit={e => this.createCharacter(e)}>
                        {this.createTextInput(name, 'name')}
                        {this.createTextInput( points, 'points')}
                        {this.createTextInput( imgSrc,'imgSrc')}
                        {this.createTextInput(description, 'description')}

                        <button className ="button_general_create " type="submit">Save</button>
                    </form>
                </div>
                     </div>
               
                ):null}
            

                <div className ="PrizeGrid">

                    {filteredPrizes.map(({ id, imgSrc, name, points,})  => (


                        <Link  key={id} to={`/prizes/${id}`}>

                             <Prize imgSrc={imgSrc} name={name} points={points} />

                        </Link>

                    ))}
                </div>
            </>
        );
    }
}

export default PrizeList;

