import React, { Component } from 'react';
import { recentWork } from '../data'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import WorkCard from './WorkCard';


export default class Work extends Component {
    render() {
        const work = recentWork.map((project) => {
            return <WorkCard key={project.id} project={project}/>
        })
        return (
            <div>
                <Container className="home-container">
                    <Card className="home-content-card mb-5 pb-5">
                        <Card.Body className="">
                            <Card.Title as="h1" className="home-title" >recent work</Card.Title>
                            <Card.Title as="h2" className="home-title-desc">&mdash; available for select projects</Card.Title>
                        </Card.Body>
                        {work}
                    </Card>
                </Container>
            </div>
        )
    }
}
