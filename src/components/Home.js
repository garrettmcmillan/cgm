import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import PortfolioHeadshot from '../PortfolioHeadshot.jpg';


export default class Home extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center f-wrap">
                <Container className="home-container">
                    <Card className="home-content-card">
                        <Card.Body className="">
                            <Card.Title as="h1" className="home-title" >garrett mcmillan</Card.Title>
                            <Card.Title as="h2" className="home-title-desc">&mdash; front-end web developer and project manager</Card.Title>
                        </Card.Body>
                        <div className="home-card-body d-flex align-items-center justify-content-center justify-content-md-end flex-md-row flex-column pt-5">
                            <Card.Body className="pl-md-0">
                                <div className="h-100 d-flex align-items-center">
                                    <ul className="card-content-list pr-md-5">
                                    <li className="mb-4">
                                        <h4 className="card-content-list-item text-justify">
                                            passionate about building websites with clients that help them succeed online. skilled in html, css, javascript, react.js. available for select projects.
                                        </h4>
                                    </li>
                                    {/* <li className="mb-4">
                                        <h4 className="card-content-list-item">
                                            Skilled in html, css, javascript, react.js
                                        </h4>
                                    </li>
                                    <li className="mb-4">
                                        <h4 className="card-content-list-item vbaseline">
                                            Available for select projects
                                        </h4>
                                    </li> */}
                                </ul>
                                </div>
                            </Card.Body>
                            <Card.Img 
                                className="home-image"
                                src={PortfolioHeadshot}
                                alt="garrett mcmillan headshot"/>
                        </div>
                        <Card.Footer className="text-center home-card-footer d-flex justify-content-center d-lg-none">
                                <ListGroup horizontal className="footer-icon-list">
                                    <ListGroup.Item className="footer-icon-list">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/garrettmcmillan">
                                            <i className="footer-social-icon fab fa-github-square"></i>
                                        </a>
                                    </ListGroup.Item >
                                    <ListGroup.Item className="footer-icon-list">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/garrettmcmillan/">
                                            <i className="footer-social-icon fab fa-linkedin"></i>
                                        </a>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="footer-icon-list">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/garrett.mcmillan/">
                                            <i className="footer-social-icon fab fa-instagram-square"></i>
                                        </a>
                                    </ListGroup.Item>
                                </ListGroup>
                        </Card.Footer>
                    </Card>
                </Container>    
            </div>       
        )
    }
}
