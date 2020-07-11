import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';




export default class WorkCard extends Component {
    render() {
        const { title, link, img, info, alt, code, casestudy, stack } = this.props.project;
        
        const caseStudyStatus = this.props.project.casestudy;
        let caseStudyButton;
        if (caseStudyStatus === null) {
            caseStudyButton = <Button
                                href={casestudy}
                                target="_blank" 
                                className="work-button d-none"
                                variant="outline-*" 
                                size=""
                        >
                case study
        </Button>
        } else {
            caseStudyButton= <Button
                            href={casestudy}
                            target="_blank" 
                            className="work-button"
                            variant="outline-*" 
                            size=""
                            >
                                case study
                        </Button>
        }
        return (
                <Container className="px-0 px-md-5">
                    <Card className="home-content-card">
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <Card.Title as="h2" className="work-title mt-5"> 
                            {title}
                            <p className="work-sub-title ml-4 ml-md-5" >&mdash;&nbsp;Built with {stack}</p>
                        </Card.Title>
                        </div>
                        <div className="work-card-body d-flex justify-content-center align-items-center flex-column mt-5">
                            <Card.Body className="m-0 p-0">
                                <div className="d-flex align-items-center">
                                    <div className="card-content-list">
                                            <h4 className="card-content-list-item work-content">
                                                {info}
                                            </h4>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Img 
                                fluid="true"
                                src={img}
                                className="work-image mt-5"
                                alt={alt}
                            />
                        </div>
                        <div className="my-5 d-flex justify-content-center">
                            <div className="d-flex flex-lg-row flex-column-reverse card-content-list-item">
                                <Button
                                    href={link}
                                    target="_blank"
                                    className="work-button"
                                    variant="outline-*" 
                                    size="">
                                        site
                                </Button>
                                <Button
                                    href={code}
                                    target="_blank"
                                    className="work-button mx-lg-5"
                                    variant="outline-*" 
                                    size="">
                                    code
                                </Button>
                                { caseStudyButton }
                            </div>
                        </div>
                    </Card>
                </Container>
        
        )
    }
}
