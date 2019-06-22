import React from 'react'

class EmployeeForm extends React.Component{
    // state = {}

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }
    
    handleClick = (event) => {console.log("Button clicked")}
    
    handleSubmit = (event) =>{
        event.preventDefault()
        console.log("Form Submitted")
        console.log(this.state)
    }

    render() {

        return(
            <div>
                <p>___________________________________</p>
                <h1>Form</h1>
                <h3>New Employee :)</h3>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Name</label>
                    <input onChange={this.props.onChange} type="text" name="name" value={this.props.formValues.name}/>

                    <label htmlFor="">Job</label>
                    <input onChange={this.props.onChange} type="text" name="job" value={this.props.formValues.job}/>

                    <label htmlFor="">Area</label>
                    <input onChange={this.props.onChange} type="text" name="area" value={this.props.formValues.area}/>

                    <label htmlFor="">Points</label>
                    <input onChange={this.props.onChange} type="text" name="points" value={this.props.formValues.points}/>

                    <label htmlFor="">Image</label>
                    <input onChange={this.props.onChange} type="text" name="urlSrc" value={this.props.formValues.imgSrc}/>

                    <button  onClick={this.handleClick} >Save</button>
                </form>

                <p>___________________________________</p>
            </div>
        )
    }
}

export default EmployeeForm