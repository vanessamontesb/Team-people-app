import React from 'react'
import axios from 'axios'
import { API_URL } from "../../constants";

import Navbar from '../../components/Navbar/Navbar'
import EmployeeForm from '../../components/Employees-Container/EmployeeForm/EmployeeForm'
import EmployeeProfile from '../../components/Employees-Container/EmployeeProfile/EmployeeProfile'
import EmployeesList from '../../components/Employees-Container/EmployeesList/EmployeesList'


class Employees extends React.Component{
    constructor(props) {
        super(props)
        console.log('1. Constructor')
        
        this.state = { 
            form: {
                name: "",
                job: "",
                area: "",
                imgSrc: "",
                points: "",
            },
            
            employees: [],

        }
    }

    
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    createEmployee = e => {
        e.preventDefault()
        console.log("entro a la funcion")
        const {
            form: { 
                name,
                job,
                area,
                imgSrc,
                points,
            }
        } = this.state


        axios.post(`${API_URL}/employees`, {
            name,
            job,
            area,
            imgSrc,
            points,
        }, this.createEmployee)
        .then(() => {this.getEmployees()})
        .catch(() => {console.log('error in createEmployee')})
    }
    
    componentDidMount() {
        console.log('3. componentDidMount')
        this.getEmployees()
    }

    getEmployees = () => {
        axios.get(`${API_URL}/employees`)
        .then(response => {
            this.setState({employees: response.data})
        })
        .catch(function(error){
            console.log(error)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()')
    }
    
    componentWillUnmount(){
        
    }

    render() {
        console.log('2. render()')

        return(
            <div>
                <h1>Employees</h1>
                <Navbar/>
                <EmployeeForm 
                    onChange={this.handleChange} 
                    formValues={this.state.form}
                    onSubmit={this.createEmployee}
                    />

                <EmployeeProfile 
                    id={this.state.form.id}
                    name={this.state.form.name}
                    job={this.state.form.job}
                    area={this.state.form.area}
                    imgSrc={this.state.form.imgSrc}
                    points={this.state.form.points}
                />

                <div>
                    <h3>Employees List</h3>
                    <EmployeesList 
                        list={this.state.employees}
                    />
                </div>

            </div>
        )
    }
}

export default Employees