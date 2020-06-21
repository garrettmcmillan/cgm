import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export default class WorkButton extends Component {
    render() {
        const toArray = [
            {
                hutch: "https://hutchthebarber.netlify.app/",
                brwr: "https://brwr.netlify.app/",
                genericAesthetic: "https://generic-aesthetic.netlify.app/"
            }
        ]
        const toLink = toArray.map((link) => {
            link = link.value;
            return link
        })
        return (
            <React.Fragment>
                <Button
                as={Link}
                to={toLink.value}
                target="_blank"
                className=""
                variant="outline-danger" 
                size="lg">
                    hi
                </Button>
            </React.Fragment>

        )
    }
}
