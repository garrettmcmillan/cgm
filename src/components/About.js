import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import PortfolioHeadshot from '../PortfolioHeadshot.jpg';


export default class About extends Component {
    render() {
        return (
                <Container className="">
                    <Card fluid className="home-content-card d-flex align-items-center">
                        <Card.Body className="">
                            <Card.Title as="h1" className="home-title" >Garrett McMillan</Card.Title>
                            <Card.Title as="h2" className="home-title-desc">&mdash; Front-End Web Developer from Wilmington, NC</Card.Title>
                            <div className="d-flex justify-content-center justify-content-lg-end pr-lg-5 mr-lg-5">
                                <Card.Img 
                                        className="home-image mt-3 mx-lg-5"
                                        src={PortfolioHeadshot}
                                        alt="garrett mcmillan headshot"/>
                            </div>
                            


{/*                      <div className="home-card-body d-flex justify-content-center align-items-center justify-content-lg-end flex-md-row flex-column">
                            <Card.Body className="">
                                <div className="d-flex align-items-center >
                                    {/* <div className="card-content-list">
                                            <h2 className="home-sub-title mr-lg-5">
                                                Designing websites so you can succeed online.
                                            </h2>
                                    </div>
                                    
                                </div>
                            </Card.Body>
                         </div> */}
                        </Card.Body>
                        
                    </Card>
                    
                </Container>
                    
        )
    }
}
