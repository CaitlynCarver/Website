import React, { Component } from 'react'
import logo from '../websiteback.png';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default class NavBarPage extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img className="navlogo" alt="for the error" src={logo}  />
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                            
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                                <li>
                                    <Link to="../Components/Home">Home</Link>
                                </li>
                                <li>
                                    <Link to="../Components/Canterbury">Canterbury</Link>
                                </li>
                                <li>
                                    <a href={"https://github.com/CaitlynCarver"}>
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href={"https://www.linkedin.com/in/caitlyn-carver-618379104/"}>
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                </div>
            </nav>
        )
    }
}
