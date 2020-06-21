import React from 'react';


export default class NavIcon extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        isCardView: false,
        }
    } 
    
    render() {
        return (
            <svg 
            id="burger-icons"
            className="bi bi-toggle"
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
                { this.state.isCardView
                    ? 
                    /* arrows down */
                    <React.Fragment>
                        <path fillRule="evenodd" d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    </React.Fragment>
                    : 
                    /* arrows up */
                    <React.Fragment>
                    <path fillRule="evenodd" d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
                </React.Fragment>
                }
            </svg>
        );
    }
}