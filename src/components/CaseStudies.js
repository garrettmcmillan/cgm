import React, { Component } from 'react';
import { caseStudies } from '../data'
import Navigation from './Navbar'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CaseStudyCard from './CaseStudyCard';


export default class CaseStudies extends Component {
    render() {
        const work = caseStudies.map((project) => {
            return <CaseStudyCard key={project.id} project={project}/>
        })
        return (
            <React.Fragment>
                <Navigation />
                <Container className="px-0 px-md-5">
                    <Card className="home-content-card">
                        <Card.Body className="">
                            <Card.Title as="h1" className="home-title" >case<br/>studies</Card.Title>
                            <Card.Title as="h2" className="home-title-desc">&mdash; Available for Select Projects</Card.Title>
                        </Card.Body>
                        <div className="d-flex justify-content-end align-content-start mb-5">
                            <p className="card-line mb-5"></p>
                        </div>
                        <Container className="px-5">
                            {work}
                        </Container>
                        
                    </Card>
                </Container>
            </React.Fragment>
            
        )
    }
}
