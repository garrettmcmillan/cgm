import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default class Footer extends Component {
    render() {
        return (
            <Card.Footer className="text-center home-card-footer d-flex justify-content-center d-lg-none">
                <ListGroup horizontal className="footer-icon-list">
                    <ListGroup.Item className="footer-icon-list">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/garrettmcmillan">
                            <i className="footer-social-icon fab fa-github-square orange-stripe-list"></i>
                        </a>
                    </ListGroup.Item >
                    <ListGroup.Item className="footer-icon-list">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/garrettmcmillan/">
                            <i className="footer-social-icon fab fa-linkedin orange-stripe-list"></i>
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item className="footer-icon-list">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/garrett.mcmillan/">
                            <i className="footer-social-icon fab fa-instagram-square orange-stripe-list"></i>
                        </a>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Footer>
        )
    }
}
