import React from 'react'

class EmployeesList extends React.Component{
    

    render(){
        return(
            <div>
            <ul>
                {this.props.list.map((employeeinfo) => {
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
