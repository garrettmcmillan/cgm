import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Parallax } from 'react-parallax';
import Footer from './Footer';



export default class CaseStudyCard extends Component {
    render() {
        const { title, img, sub, challenge, solution, result, alt, imgProcess, imgMobile } = this.props.project;

        return (
                <Container>
                    <Card fluid className="home-content-card mb-5">
                        <div className="d-flex justify-content-center">
                            <Card.Title as="h2" className="work-title mt-5"> 
                                {title}            
                                <h4 className="work-sub-title mt-3 ml-5">&mdash;&nbsp;{sub}</h4>
                            </Card.Title>
                        </div>
                            
                        
                        <div className="work-card-body text-justify d-flex justify-content-center align-items-center justify-content-md-end flex-md-row mt-5">
                            <Card.Body className="m-0 p-0 mb-lg-5">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="card-content-list">
                                        <h4 className="card-content-list-item work-content pb-5">
                                            {challenge}
                                        </h4>
                                        <div className="case-study-image-main my-5">
                                            <Card.Img 
                                                fluid
                                                src={img}
                                                alt={alt}
                                                className="case-study-image-main"
                                            />
                                        </div>
                                            <h4 className="card-content-list-item work-content pt-5">
                                            {solution}
                                            </h4>
                                        <div className="d-flex align-items-center flex-column my-5 py-5">
                                            <Card.Img 
                                                fluid
                                                src={imgProcess}
                                                className="case-study-image"
                                                alt={alt}
                                            />
                                        </div>
                                        <h4 className="card-content-list-item work-content">
                                            {result}
                                        </h4>
                                        <div className="d-flex justify-content-center mt-5 pt-5">
                                            <Card.Img 
                                            fluid
                                            src={imgMobile}
                                            className="case-study-image"
                                            alt={alt}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Container>
        )
    }
}
