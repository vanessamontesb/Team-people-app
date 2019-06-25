import React from 'react'

function EmployeesList (props) {
    const employees = props.list

    const [ search, setSearch ] = React.useState("")

    const filteredEmployees = employees.filter(
        employeeinfo => {return employeeinfo.name.includes(search)}
    )


    return(
        <div>
            
            <form>
                <label>Search</label>
                <input 
                    type="text" 
                    placeholder='Who are you looking for?'
                    value={search}
                    onChange={e => setSearch(e.target.value) }
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

export default EmployeesList
