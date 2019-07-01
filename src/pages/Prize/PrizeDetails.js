import React, { Component } from 'react';
import "./pagePrize.css";
import axios from 'axios';
import { API_URL } from "../../constants";
import Prize from '../../components/Prize/prize';



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
        <input className ="editPrizeInput"
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
            <>
            <div className ="editPrizeContainer">
            

                
                <div className ="editprize finalEditContainer">

                <Prize imgSrc={imgSrc} name={name} points={points} />
                    
                </div>
            

                <div className ="editFormContainer">


                <form className ="editForm" onSubmit={e => this.editPrize(e)}
                onChange={this.handleChange}
                formValues={this.state.characterInfo}>
                {this.createTextInput(name, 'name')}
                {this.createTextInput( points, 'points')}
                {this.createTextInput( imgSrc,'imgSrc')}
                {this.createTextInput(description, 'description')}
                </form>
                
            </div>
            <div className ="buttonsContainer">
            <button className="button_general editPrizeButton"  type="submit" onClick={this.editPrize}>Save</button>
            <button className ="deletePrizeButton" onClick={()=>this.deletePrize(id)}>Delete</button>
            </div>
            </div>
            </>
         );
    }
}
 
export default PrizeDetails;