
import React, { Component } from 'react';
import  NavBar from '../../src/components/navBar/navBar';

class AppNavbar extends Component {
    render() {
        let links = [
            { label: 'Employees', link: '/Employees' },
            { label: 'Prizes', link: '/Prizes' },
            { label: 'Achievements', link: '/Achievements' },
        ];

        return (
            <div className="container center">
            <NavBar links={links}/>
            </div>
        );
        }
    }


export default AppNavbar;
