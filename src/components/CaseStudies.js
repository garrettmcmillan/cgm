import React, { Component } from 'react';
import { caseStudies } from '../data'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CaseStudyCard from './CaseStudyCard';


export default class CaseStudies extends Component {
    render() {
        const work = caseStudies.map((project) => {
            return <CaseStudyCard key={project.id} project={project}/>
        })
        return (
            <div>
                <Container className="home-container">
                    <Card className="home-content-card">
                        <Card.Body className="">
                            <Card.Title as="h1" className="home-title" >case<br/>studies</Card.Title>
                            <Card.Title as="h2" className="home-title-desc">&mdash; Available for Select Projects</Card.Title>
                        </Card.Body>
                        <div className="d-flex justify-content-end align-content-start mb-5">
                            <p className="card-line mb-5"></p>
                        </div>
                        {work}
                    </Card>
                </Container>
            </div>
        )
    }
}
