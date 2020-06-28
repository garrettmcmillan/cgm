import brwr from './images/brwr.png';
import hutch from './images/hutch.png';
import genericAesthetic from './images/genericAesthetic.png';
import brwrMobile from './images/brwrMobile.png';
import hutchMobile from './images/hutchMobile.jpg'
import brwrSketch from './images/brwrSketch.jpg';


export const recentWork = [
    {
        id: 1,
        title: `Zack Hutchinson: Barber`,
        img: hutch,
        link: "https://hutchthebarber.netlify.app/",
        info: "Crucifix dreamcatcher hoodie tousled. XOXO sriracha hella fashion axe. Distillery brunch ethical pop-up migas celiac, yuccie meditation wolf subway tile shabby chic everyday carry semiotics.",
        alt: "website screenshot",
        code: "https://github.com/garrettmcmillan/hutchthebarber",
        caseStudy: "",
        stack: "React.js, React-Bootstrap, & Love",
    },
    {
        id: 2,
        title: "brwr.",
        img: brwr,
        link: "https://brwr.netlify.app/",
        info: "Desiring aesthetic and functionality over convenience, I am often confronted with technology that falls short of my desire. When the app I was using became cluttered I decided that it was time to find something new. After coming short on my search I decided to make my own.",
        alt: "website screenshot",
        code: "https://github.com/garrettmcmillan/brwr",
        casestudy: "",
        stack: "React.js, React-Bootstrap, & Love",

    },
    {
        id: 3,
        title: "Generic Aesthetic.",
        img: genericAesthetic,
        link: "https://generic-aesthetic.netlify.app/",
        info: "After learning the basics of React.js, I wanted to test my skills through building an e-commerce site. I thought most tutorial builds were bland so I beefed one up for my own project." /* I don't have anything to sell so I decided to let the products reflect my own style. */,
        alt: "website screenshot",
        code: "https://github.com/garrettmcmillan/generic-aesthetic",
        casestudy: null,
        stack: "React.js, Styled Components, Bootstrap, & Love",

    },
]

export const caseStudies = [
    {
        id: 1,
        title: "Zack Hutchinson: Barber",
        sub: `Design | Development`,
        img: hutch,
        imgMobile: hutchMobile,
        imgProcess: {},
        link: "https://hutchthebarber.netlify.app/",
        intro: "Intro crucifix dreamcatcher hoodie tousled. XOXO sriracha hella fashion axe. Distillery brunch ethical pop-up migas celiac, yuccie meditation wolf subway tile shabby chic everyday carry semiotics.",
        challenge: "Challenge crucifix dreamcatcher hoodie tousled. XOXO sriracha hella fashion axe. Distillery brunch ethical pop-up migas celiac, yuccie meditation wolf subway tile shabby chic everyday carry semiotics.",
        solution: "Solution crucifix dreamcatcher hoodie tousled. XOXO sriracha hella fashion axe. Distillery brunch ethical pop-up migas celiac, yuccie meditation wolf subway tile shabby chic everyday carry semiotics.",
        result: "Result crucifix dreamcatcher hoodie tousled. XOXO sriracha hella fashion axe. Distillery brunch ethical pop-up migas celiac, yuccie meditation wolf subway tile shabby chic everyday carry semiotics.",

    },
    {
        id: 2,
        title: "brwr.",
        sub: "Idea | Design | Development",
        img: brwr,
        imgMobile: brwrMobile,
        imgProcess: brwrSketch,
        link: "https://brwr.netlify.app/",
        intro: "Often finding myself preferring aesthetic and functionality over convenience, I am sometimes confronted with the task of finding apps and tech that better suits my needs. When the app I had been using became cluttered I decided that it was time to find something new. After coming short on my search I decided to make my own that fit the needs I had - simple, functional, and informative.",
        challenge: "A goal of mine is to build applications that I would enjoy and use. What a perfect way to put some skills to the test than to build an app, without a tutorial video, that I would use daily. I also wanted brwr to be something everybody could use in the early mornings to help their tired brain make a good cup of coffee.",
        solution: "I stripped the functionality of similar applications and added back the pieces that I felt were vital. This process left a calculator that returned the amount of total water needed in brewing once given the amount of coffee and desired brew ratio. Other features include a simple reminder of the water needed for the user’s bloom and some basic guides for folks who need them. Brwr also needed to be mobile ready out of the gate. To produce the functionality and aesthetic desired I decided to build brwr in React.js utilizing React Bootstrap for its component library and basic CSS. To perfect how things looked, additional styles were added with custom CSS. ",
        result: "The final product was an app that not only met the functionality needs, but also was aesthetically pleasing to use. On page load the user is able to enter their data without having to navigate the site. The page-to-page navigation is handled by React Router and accessed through a simple dropdown menu from a single coffee cup icon. The design blends industrial brutalist elements with a playful, almost childlike, sense of wonder and reflects the experience of drinking a good cup of coffee.",
    },
]