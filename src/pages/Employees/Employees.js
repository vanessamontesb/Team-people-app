import React from 'react'
import axios from 'axios'

import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm'
import EmployeeProfile from '../../components/EmployeeProfile/EmployeeProfile'
import EmployeesList from '../../components/EmployeesList/EmployeesList'

const API_URL= 'http://localhost:3004'

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
            
            employees: []

        }
    }
    
    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    
    componentDidMount() {
        console.log('3. componentDidMount')
        // Se guardará el nuevo componente creado desde el formulario
        // Una arrow function que actualice el estado {this.setState(newEmployee en Employees (map?))}
        this.getEmployees()
    }

    getEmployees = () => {
        axios.get(`${API_URL}/employees`)
        .then(response => {
            this.setState({employees: response.data},
            console.log(response)
            )
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
                <Search/>
                <EmployeeForm onChange={this.handleChange} formValues={this.state.form}/>

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
                    <EmployeesList list={this.state.employees}/>
                </div>

            </div>
        )
    }
}

export default Employees