
import React, { Component } from 'react';
import "./pageAchievement.css"
import axios from 'axios';
import { API_URL } from "../../constants";



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

    editAchievement = e => {
        e.preventDefault();
    
        const id = this.props.match.params.id;
    
        axios.put(`${API_URL}/achievements/${id}`, {
            name: this.state.characterInfo.name,
            points: this.state.characterInfo.points,
            
        }) .then(()=>this.props.history.push('/achievements'));

      };
        
      createTextInput = (value, field) => (
        <input className= "achievementInput"
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
            <div className ="editAchivementContainer">

                <div className ="formContainer">


                <form className ="editAchievementForm" onSubmit={e => this.editAchievement(e)}
                onChange={this.handleChange}
                formValues={this.state.characterInfo}>
                {this.createTextInput(name, 'name')}
                {this.createTextInput( points, 'points')}
                <button type="submit" onClick={this.editAchievement}>Save</button>
                

               
                </form>
                </div>
                
                <div className="containerAchievementEdit">
                    
                        <p><b>Name : </b>{name}</p>
                        <p><b>Points: </b>{points}</p>
                        <button className="deleteButton"onClick={()=>this.deletePrize(id)}>Delete</button>
                   
                </div>
            </div>
         );
    }
}
 

export default EditAchievement