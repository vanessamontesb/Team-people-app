import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm'
import EmployeeProfile from '../../components/EmployeeProfile/EmployeeProfile'

class Employees extends React.Component{
    state = { form: {
        name: "",
        job: "",
        area: "",
        imgSrc: "",
        points: "",
     }}
    
    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {

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
            </div>
        )
    }
}

export default Employees