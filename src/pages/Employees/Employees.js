import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm'
import EmployeeProfile from '../../components/EmployeeProfile/EmployeeProfile'
import EmployeesList from '../../components/EmployeesList/EmployeesList'

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
            
            employees: [{
                        "id": 1,
                        "name": "elliot watts",
                        "job": "Bussiness Representative",
                        "area": "Development",
                        "imgSrc": "https://randomuser.me/api/portraits/men/36.jpg",
                        "points": 9
                    }, {
                        "id": 2,
                        "name": "freddie jenkins",
                        "job": "Bussiness Representative",
                        "area": "Sales",
                        "imgSrc": "https://randomuser.me/api/portraits/men/53.jpg",
                        "points": 9
                    }, {
                        "id": 3,
                        "name": "amelia lavoie",
                        "job": "Bussiness Analist",
                        "area": "Sales",
                        "imgSrc": "https://randomuser.me/api/portraits/women/67.jpg",
                        "points": 7
                    }
            ]
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
                    // id = {1}
                    // name= "elliot watts"
                    // job= "Bussiness Representative"
                    // area= "Development"
                    // imgSrc= "https://randomuser.me/api/portraits/men/36.jpg"
                    // points= {9}
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