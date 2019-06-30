import React, { Component } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <li className="menu__link menu__link--active" href={link.link}>{link.label}</li>
            ) : (
                <li className="menu__link" href={link.link}>{link.label}</li>
            );

            return (
                <Link key={index} className="menu__list-item"  to={link.link}>{linkMarkup}
              
                </Link>
                
               
            );
        });

       

        return (
            <nav className="menu">
            <div className="image__container">
             </div>

            <div className="menu__right">
                <ul className="menu__list">
                    {linksMarkup}

                </ul>
            </div>
            </nav>
        );
    }
}

export default NavBar;


        