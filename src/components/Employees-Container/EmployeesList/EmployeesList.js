import React from 'react'

class EmployeesList extends React.Component{

    render(){
        let filteredEmployees = this.props.list.filter(
            (employeeinfo) =>{
                return employeeinfo.name.indexOf(this.props.employeeFilter !== -1)
            }
        )

        return(
            <div>
                
                <form>
                    <label>Search</label>
                    <input 
                        type="text" 
                        placeholder='Who are you looking for?'
                        value={this.props.employeeFilter}
                        onChange={this.props.onChange} 
                    />
                </form>

                
                <ul>
                    {filteredEmployees.map((employeeinfo) => {
                            return (
                                <li key={employeeinfo.id}>
                                    <img src={employeeinfo.imgSrc} alt="Employee Profile"/>
                                    <p>{employeeinfo.name}</p>
                                    <p>{employeeinfo.points}</p>
                                </li>
                            )
                    })}

                </ul>
            </div>
        )
    }
}

export default EmployeesList
