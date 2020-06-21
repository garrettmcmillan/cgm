import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Parallax } from 'react-parallax';




export default class WorkCard extends Component {
    render() {
        const { title, link, img, info, alt, code, casestudy } = this.props.project;
        return (
            <Parallax bgImage="none" strength={-400}
                renderLayer={precentage => (
                    <div 
                        style={{
                            position: 'absolute',
                            width: '3rem',
                            height: '1rem',
                            borderRadius: '0',
                            background: '#90a88e',
                            right: '0',
                            bottom: '50',
                            transform: `translate(-50%, -50%) scale(${precentage * 6})`,
                        }}
                    >
                    </div>
                )}
                >
                <Container className="work-container">
                <Card className="home-content-card">                               
                    <Card.Title as="h2" className="work-title mt-4"> 
                        {title}
                    </Card.Title>
                    <div className="work-card-body d-flex justify-content-center align-items-center justify-content-md-end flex-md-row flex-column pt-5 pb-5">
                        <Card.Body className="pl-md-0">
                            <div className="h-100 d-flex align-items-center">
                                <ul className="card-content-list pr-md-5">
                                    <li className="">
                                        <h4 className="card-content-list-item work-content">
                                            {info}
                                        </h4>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                                <Card.Img 
                                    src={img}
                                    className="work-image"
                                    alt={alt}
                                />
                        
                    </div>
                    
                    <div className="mt-3 work-button-group d-flex flex-column flex-md-row justify-content-lg-center align-items-md-center">
                        <Button
                            href={link}
                            target="_blank"
                            className="work-button"
                            variant="outline-*" 
                            size="">
                                &mdash; site
                        </Button>
                        <Button
                            href={code}
                            target="_blank"
                            className="work-button"
                            variant="outline-*" 
                            size="">
                                &mdash; code
                        </Button>
                        <Button
                            href={link}
                            target="_blank"
                            className="work-button"
                            variant="outline-*" 
                            size="">
                                &mdash; case study
                        </Button>
                    </div>
                
                    
                    
                </Card>
            </Container>
            </Parallax>
                
            
        )
    }
}
