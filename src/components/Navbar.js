import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown';
import NavIcon from './NavIcon';



export default class Navigation extends Component {
    render() { 
        return (
            <Navbar expand="md" className="justify-content-end" sticky="top">
                <Navbar.Toggle 
                    className="nav-hamburger"
                    aria-controls="basic-navbar-nav"
                    onClick={this.setNavExpanded}
                >
                    <div className="navbar-div d-flex align-items-center"><span>power: </span>
                        <NavIcon />
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav w-100">
                    <div className="nav-item-container w-100 d-flex justify-content-md-end">
                        <Nav as="ul" className="navbar-div">
                        <Nav.Item  className="nav-item">
                            <Nav.Link as={Link} to="/" className="nav-item nav-item-link js-scroll-trigger" >about</Nav.Link>
                        </Nav.Item>
                        <Dropdown as={Nav.Item} className="nav-item">
                            <Dropdown.Toggle as={Nav.Link} className="nav-item">work</Dropdown.Toggle>
                                <Dropdown.Menu className="nav-dropdown">
                                    <Dropdown.Item as={Link} to="/recent" className="nav-item-link nav-dropdown-item green-hover js-scroll-trigger" >recent work</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/studies" className="nav-item-link nav-dropdown-item green-hover js-scroll-trigger" >case studies</Dropdown.Item>
                                    <Dropdown.Item className="nav-item-link nav-dropdown-item green-hover js-scroll-trigger">resume (<i className="fas fa-file-download download-icon"></i>)</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item className="nav-item">
                            <Nav.Link className="nav-item nav-item-link js-scroll-trigger" href="mailto: cgarrettmcmillan@gmail.com" >contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}   
    