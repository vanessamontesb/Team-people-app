import React, { Component } from 'react';
import "./pagePrize.css";
import axios from 'axios';
import { API_URL } from "../../constants";



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

    handleChange = e => {
        const newInfo = this.state.characterInfo;
        newInfo[e.target.name] = e.target.value;
    
        this.setState({
          characterInfo: newInfo
        });
      };
    

    deletePrize=(id)=>
    {
     axios.delete(`${API_URL}/prizes/${id}`)
     .then(()=>this.props.history.push('/prizes'))
    }

    handleInputChange = (value, field) => {
        this.setState(prevState => ({
            newCharacterFrom: {
                ...prevState.newCharacterFrom,
                [field]: value
            }
        }))
    }

    editPrize = e => {
        e.preventDefault();
        
    
        const id = this.props.match.params.id;
    
        axios.put(`${API_URL}/prizes/${id}`, {
            imgSrc: this.state.characterInfo.imgSrc,
            name: this.state.characterInfo.name,
            points: this.state.characterInfo.points,
            description: this.state.characterInfo.description,
            
        }) .then(()=>this.props.history.push('/prizes'));

      };
        
      createTextInput = (value, field) => (
        <input className ="CreatePrizeInput"
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
                imgSrc,
                description,
                id
                
            }
        } = this.state;

        return ( 
            <div className ="infoPrizeContainer">

                <div className ="editFormContainer">


                <form className ="editPrizeForm" onSubmit={e => this.editPrize(e)}
                onChange={this.handleChange}
                formValues={this.state.characterInfo}>
                {this.createTextInput(name, 'name')}
                {this.createTextInput( points, 'points')}
                {this.createTextInput( imgSrc,'imgSrc')}
                {this.createTextInput(description, 'description')}
                <button className="editButton"  type="submit" onClick={this.editPrize}>Save</button>
                

               
                </form>
                </div>
                
                <div className ="infoPrizeContainer">
                    <img className ="infoPrizeImg" src={imgSrc} alt="Prize"/>
                    <div className ="prizeinfo">
                    
                        <p><b>Name : </b>{name}</p>
                        <p><b>Points: </b>{points}</p>
                        <p><b>Description: </b>{description}</p>
                        <button className ="deleteButton" onClick={()=>this.deletePrize(id)}>Delete</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PrizeDetails;