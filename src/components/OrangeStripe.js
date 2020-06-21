import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function OrangeStripe() {
    return (
        <div className="orange-stripe-container">
            <div className="orange-stripe">
                <div className="relative">
                    <ListGroup className="icon-list d-none d-lg-block ml-4">
                        <ListGroup.Item className="footer-icon-list ">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/garrettmcmillan">
                                <i className="footer-social-icon orange-stripe-list fab fa-github-square"></i>
                            </a>
                        </ListGroup.Item >
                        <ListGroup.Item className="footer-icon-list">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/garrettmcmillan/">
                                <i className="footer-social-icon orange-stripe-list fab fa-linkedin"></i>
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item className="footer-icon-list">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/garrett.mcmillan/">
                                <i className="footer-social-icon orange-stripe-list fab fa-instagram-square"></i>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
        
    )
}
