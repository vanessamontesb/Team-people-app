import React from 'react'

function EmployeePrizesList (props) {
    return(
        <div>
            <h2>Prizes</h2>
            <ul>
                {
                    props.list.map((prizeinfo) =>{
                        return (
                            <li key={prizeinfo.id}>
                                <img src={prizeinfo.imgSrc} alt="Prize"/>
                                <h4>{prizeinfo.name}</h4>
                                <p><span role="img" aria-label="star">⭐</span>{prizeinfo.points}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default EmployeePrizesList