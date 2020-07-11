import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navigation from './Navbar';


export default class Work extends Component {
    render() {
        return (
            <React.Fragment>
            <Navigation/>
            <div className="resume-container d-flex flex-column justify-content-center align-items-center mx-0 pt-4">
                    <Card className="home-content-card pt-3">
                        <Card.Body className="d-flex flex-column p-0">
                            <Card.Title as="h1" className="resume-title mb-2" >
                                Garrett <br/> McM<span className="resume-title-kerning">il</span>lan
                            </Card.Title>
                            <Card.Title as="h2" className="resume-sub-title">
                                &mdash; Front-End Web Developer and Project Manager from Wilmington, NC
                            </Card.Title>
                            
                        </Card.Body>
                        <Container className="p-0">
                        <Card.Body className="p-0">
                        
                        <div className="d-flex text-justify my-3">
                            Self-taught and hardworking web designer who is passionate about creating beautiful and effective user experiences. I ensure positive website outcomes by utilizing my dynamic technical, communication, and design skills to propel both clients and team into the future. Through understanding key client information and developing innovative design solutions, I will guarantee the success of all objectives entrusted to me.
                        </div>
                        <div className="d-flex flex-md-row flex-column align-items-center">
                            <div className="w-50">
                                <Card.Title as="h2" className="resume-info-title mt-4"> 
                                    tech skills
                                </Card.Title>
                                <ul className="list-unstyled resume-list mt-2">
                                    <li>
                                        HTML
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                    <li>
                                        Javascript
                                    </li>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        JSX
                                    </li>
                                    <li>
                                        Bootstrap
                                    </li>
                                    <li>
                                        React-Bootstrap
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="w-50">
                                <Card.Title as="h2" className="resume-info-title mt-3"> 
                                    dev tools
                                </Card.Title>
                                <ul className="list-unstyled resume-list mt-2 ">
                                    <li>
                                        VS Code
                                    </li>
                                    <li>
                                        iTerm2
                                    </li>
                                    <li>
                                        Github
                                    </li>
                                    <li>
                                        Git
                                    </li>
                                    <li>
                                        NPM
                                    </li>
                                    <li>
                                        Familiar with Netlify 
                                    </li>
                                    <li>
                                        Familiar with Figma 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <Card.Title as="h2" className=" resume-info-title mt-4"> 
                                experience
                            </Card.Title>
                            <ul className="list-unstyled resume-list mb-5">
                                    <h6 className="ml-5 resume-list resume-list-sub"><strong>Manager</strong> &mdash; <em>Twin City Hive, Winston-Salem, NC, July 2018-February 2020</em></h6>
                                        <ul className="list-unstyled resume-list ml-4 mb-3 ">
                                            <li>
                                                Developed meaningful client relationships and managed 20+ vendor, wholesale, and shop accounts to drive revenue
                                            </li>
                                            <li>
                                                Utilized Square Analytics and Google My Business to gain customer insights and plan accordingly
                                            </li>
                                            <li>
                                                Maintained efficient work environment by managing schedules, creating timelines, training, and supervising employees
                                            </li>
                                            <li>
                                                Created innovative solutions to quickly resolve issues during day-to-day operations
                                            </li>
                                        </ul>
                                        <h6 className="ml-5 resume-list resume-list-sub"><strong>Campus Staff</strong> &mdash; <em>Reformed University Fellowship, Nonprofit, Boone, NC, Aug 2016 — June 2018</em></h6>
                                        <ul className="list-unstyled resume-list ml-4 mb-3 ">
                                            <li>
                                                Increased brand awareness through developing strategies based on values, demographic analysis, and relationships
                                            </li>
                                            <li>
                                                Managed teams responsible for engagement, development, and networking, as well as facilitated weekly team meetings
                                            </li>
                                            <li>
                                                Managed donor relations through Karani (fundraising CRM), Expensify, and Mailchimp
                                            </li>
                                            <li>
                                                Utilized email marketing campaigns to maintain relationships and gather engagement analytics
                                            </li>
                                        </ul>
                                        <h6 className="ml-5 resume-list resume-list-sub"><strong>Intern</strong> &mdash; <em>Village Seven Presbyterian Church, Colorado Springs, CO, Summer 2016</em></h6>
                                        <ul className="list-unstyled resume-list ml-4">
                                            <li>
                                                Utilized Agile project management principals and Asana to ensure team cohesion and project completion
                                            </li>
                                            <li>
                                                Fostered community of 200+ students through relational networking, event marketing, and engaging presentations
                                            </li>
                                            <li>
                                                Planned events for 75+ with engaging education and community service opportunities
                                            </li>
                                            <li>
                                                Oversaw administrative tasks including event planning, preparing publications, recruiting, etc.
                                            </li>
                                        </ul>
                                </ul>
                            <Card.Title as="h2" className=" resume-info-title "> 
                                soft skills
                            </Card.Title>
                            <ul className="list-unstyled resume-list mb-5">
                                    <li>
                                        Strategically plans site structure and layout to build memorable user experiences for clients
                                    </li>
                                    <li>
                                        Adaptable in various situations ranging from learning new technologies to navigating relationships
                                    </li>
                                    <li>
                                        Detail-oriented project manager, team leader, and group collaborator
                                    </li>
                                    <li>
                                        Professionally engages with clients through face-to-face interaction, written communication, and relationship management
                                    </li>
                                </ul>
                            <Card.Title as="h2" className=" resume-info-title  mb-5"> 
                                education
                                <h4 className="resume-info mt-2 ml-5">
                                    <strong>Appalachian State University </strong>&mdash; Bachelor of Science in Communication Studies, 2016
                                </h4>
                            </Card.Title>
                            <Card.Title as="h2" className=" resume-info-title mt-3"> 
                                personal interests
                                <h4 className="resume-info mt-2 ml-5">
                                    Being outside, specialty coffee, sustainable living, good design, and all things college football and professional baseball
                                </h4>
                            </Card.Title>
                        </div>
                        </Card.Body>
                        </Container>
                    </Card>                
            </div>
            
        </React.Fragment>
        )
    }
} 
