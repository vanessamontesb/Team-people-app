import React from 'react'
import axios from 'axios'
import { API_URL } from "../../constants";

class IdEmployee extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            employee: []
        }
    }

    async componentDidMount() {
        console.log('3. componentDiddMount')
        const id = this.props.match.params.id

        const {data} = await axios.get(`${API_URL}/employees/${id}`)
        this.setState({employee : data})
    }

    
    render() {
        const employeeData = this.state.employee
        return(
        <div>
        <img src={employeeData.imgSrc} alt="Profile"/>
        <p>{employeeData.points}</p>
        <h3>{employeeData.name}</h3>
        <ul>
            <li>
                <p>
                  <span>Job: </span>
                  <span>{employeeData.job}</span>
                </p>
            </li>
            <li>
                <p>
                  <span>Hired in: </span>
                  <span>{employeeData.area}</span>
                </p>
            </li>
        </ul>

        <h2>Available Prizes</h2>
        <ul>
            <li>Prize 1</li>
            <li>Prize 2</li>
            <li>Prize 3</li>
            <li>Prize 4</li>
        </ul>

        </div>
    )
    
        
    }
}

export default IdEmployee