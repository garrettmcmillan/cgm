import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import PortfolioHeadshot from '../PortfolioHeadshot.jpg';
import ResumePDF from '../pdf/GarrettMcMillanResume.pdf'


export default class About extends Component {
    render() {
        return (
                <Container className="pt-5 pb-0">
                    <Card fluid className=" home-content-card h-100 d-flex align-items-center mt-3 pb-0 ">
                        <Card.Body className="">
                            <Card.Title as="h1" className="home-title" >Garrett McMillan</Card.Title>
                            <Card.Title as="h2" className="home-title-desc mb-5">&mdash; Front-End Web Developer from Wilmington, NC</Card.Title>
                            
                            <div className="home-card-body d-flex flex-column align-items-center flex-md-row pr-md-5 ">
                                <Card.Body className="p-0">
                                    <Nav as="ul" className="about-nav pt-md-0 mt-md-0 mb-md-5 mr-md-5 navbar-div d-flex justify-content-left flex-md-column px-md-5">
                                        <Nav.Item  className="nav-item about-nav-item">
                                            <Nav.Link as={Link} to="/" className="nav-item about-nav-item nav-item-link js-scroll-trigger" >About</Nav.Link>
                                        </Nav.Item>
                                        <Dropdown as={Nav.Item} drop="right" className="nav-item about-nav-item">
                                            <Dropdown.Toggle as={Nav.Link} className="nav-item about-nav-item px-4 px-md-0">Work</Dropdown.Toggle>
                                                <Dropdown.Menu className="nav-dropdown">
                                                    <Dropdown.Item as={Link} to="/recent" className="nav-item-link nav-dropdown-item green-hover js-scroll-trigger" >Recent Work</Dropdown.Item>
                                                    <Dropdown.Item as={Link} to="/studies" className="nav-item-link nav-dropdown-item green-hover js-scroll-trigger" >Case Studies</Dropdown.Item>
                                                    <Dropdown.Item as='a' href={ResumePDF} target="_blank" rel="noopener noreferrer" className="nav-item-link nav-dropdown-item green-hover js-scroll-trigger">Resume &nbsp; (&nbsp;<i className="fas fa-file-download download-icon"></i>&nbsp;)</Dropdown.Item>
                                                </Dropdown.Menu>
                                        </Dropdown>
                                        <Nav.Item className="nav-item about-nav-item">
                                            <Nav.Link className="nav-item nav-item-link about-nav-item js-scroll-trigger px-4 px-md-0 mr-3 mr-md-0" href="mailto: cgarrettmcmillan@gmail.com" >Contact</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    
                                </Card.Body>
                                <div className="home-image-div mr-md-5 mt-5 mt-md-0 justify-content-center align-items-center">
                                    <Card.Img 
                                        fluid
                                        className="home-image"
                                        src={PortfolioHeadshot}
                                        alt="garrett mcmillan headshot"/>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Container >                   
        )
    }
}
