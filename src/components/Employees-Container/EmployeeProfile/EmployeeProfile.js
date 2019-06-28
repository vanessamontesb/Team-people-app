import React from 'react'

class EmployeeProfile extends React.Component{
    
    render() {

        return(
            <div>
                <p>-------------------------------</p>
                <img src={this.props.imgSrc} alt="Profile"/>
                <div>
                    <div>
                        <p><span role="img" aria-label="star">⭐</span>{this.props.points}</p>
                        <p>{this.props.job}</p>
                    </div>
                </div>
                <p>{this.props.name}</p>
                <p>-------------------------------</p>

            </div>
        )
    }
}

export default EmployeeProfile