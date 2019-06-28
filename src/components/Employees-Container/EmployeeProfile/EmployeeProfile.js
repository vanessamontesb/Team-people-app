import React from 'react'

class EmployeeProfile extends React.Component{
    
    render() {

        return(
            <div>
                <p>-------------------------------</p>
                <h3>{this.props.name}</h3>
                <img src={this.props.imgSrc} alt="Profile"/>
                <div>
                    <div>
                        <p><span role="img" aria-label="star">⭐</span>{this.props.points}</p>
                        <ul>
                        <li>
                            <p>
                            <span>Job: </span>
                            <span>{this.props.job}</span>
                            </p>
                        </li>
                        <li>
                            <p>
                            <span>Hired in: </span>
                            <span>{this.props.area}</span>
                            </p>
                        </li>
                        </ul>
                    </div>
                </div>
                <p>{this.props.name}</p>
                <p>-------------------------------</p>

            </div>
        )
    }
}

export default EmployeeProfile