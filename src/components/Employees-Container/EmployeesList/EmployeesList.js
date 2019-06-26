import React from 'react'
import { Link } from 'react-router-dom'

function EmployeesList (props) {
    const employees = props.list

    const [ search, setSearch ] = React.useState("")

    const filteredEmployees = employees.filter(employeeinfo => {
        return `${employeeinfo.name}${employeeinfo.points}`.includes(search)}
    )
    
    return(
        <div>
            
            <form>
                <label>Search</label>
                <input 
                    type="text" 
                    placeholder='Search by employee or points'
                    value={search}
                    onChange={e => setSearch(e.target.value) }
                />
            </form>

            
            <ul>
                {filteredEmployees.map((employeeinfo) => {
                    return (
                        <li key={employeeinfo.id}>
                            <Link to={`/employees/${employeeinfo.id}`}>
                                
                                    <img src={employeeinfo.imgSrc} alt="Employee Profile"/>
                                    <p>{employeeinfo.name}</p>
                                    <p>{employeeinfo.points}</p>
                                    </Link>
                            </li>
                        )
                })}

            </ul>
        </div>
    )
}

export default EmployeesList
