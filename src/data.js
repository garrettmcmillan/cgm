import brwr from './images/brwr.png';
import hutch from './images/hutch.png';
import genericAesthetic from './images/genericAesthetic.png';
import brwrMobile from './images/brwrMobile.png';
import hutchMobile from './images/hutchMobile.jpg'
import brwrSketch from './images/brwrSketch.jpg';
import hutchSketch from './images/hutchSketch.png'


export const recentWork = [
    {
        id: 1,
        title: `Zack Hutchinson: Barber`,
        img: hutch,
        link: "https://hutchthebarber.netlify.app/",
        info: "Zack Hutchinson is a second generation hair stylist and barber who takes his craft seriously. He isn’t worried about the ever changing trends within industry and believes that a good haircut will speak for itself. Hutch has been my barber for years now, and is a master at everything between a mullet and a skin fade (believe me, I would know). I was beyond excited to partner with him to design and build a website for him that will propel his business into the future.",
        alt: "website screenshot",
        code: "https://github.com/garrettmcmillan/hutchthebarber",
        caseStudy: "",
        stack: "React, React-Bootstrap, & Love",
    },
    {
        id: 2,
        title: "brwr.",
        img: brwr,
        link: "https://brwr.netlify.app/",
        info: "I love to start everyday with a cup of good coffee. The comfort of the first sip is the perfect way to start my morning. Brwr was built to be everybody’s coffee app, something for all, even if they’re not obsessed with coffee just yet.",
        alt: "website screenshot",
        code: "https://github.com/garrettmcmillan/brwr",
        casestudy: "",
        stack: "React, React-Bootstrap, & Love",

    },
    {
        id: 3,
        title: "Generic Aesthetic.",
        img: genericAesthetic,
        link: "https://generic-aesthetic.netlify.app/",
        info: "After learning the basics of React, I wanted to test my skills through building an e-commerce site. I thought most tutorial builds were bland so I beefed one up for my own project. Generic Aesthetic. is a reflection of my personal style.",
        alt: "website screenshot",
        code: "https://github.com/garrettmcmillan/generic-aesthetic",
        casestudy: null,
        stack: "React, Styled Components, Bootstrap, & Love",

    },
]

export const caseStudies = [
    {
        id: 1,
        title: "Zack Hutchinson: Barber",
        sub: `Design | Development`,
        img: hutch,
        imgMobile: hutchMobile,
        imgProcess: hutchSketch,
        link: "https://hutchthebarber.netlify.app/",
        intro: "Intro crucifix dreamcatcher hoodie tousled. XOXO sriracha hella fashion axe. Distillery brunch ethical pop-up migas celiac, yuccie meditation wolf subway tile shabby chic everyday carry semiotics.",
        challenge: "When barber shops had to close at the beginning of the Coronavirus pandemic, Zack began to rethink how his business operates. Until this point Zack scheduled appointments in a day planner via phone calls or text messages from clients. While this worked in the early days, it was becoming a hassle to remember to write down appointments after receiving calls or texts at any point in the day. I used to schedule my haircut whenever Zack came into the coffee shop I managed. This was convenient for me, but created unnecessary work for Zack. Needing a better system, Zack decided to move all of his scheduling to Booksy, an online booking system for health and beauty services, and wanted a website where clients could learn more about Zack, his services, and easily book an appointment. For this project, I wanted to design a website for Zack’s business that would honor his classic, unwavering style while also keeping up with the future of web design.",
        solution: "An effective website will generate more business for Zack, as well as create a better experience for clients. It’s important that this website allows Zach to focus his energy on his services, while still booking clients with ease. The majority of clients will book via a mobile device so we wanted a responsive design that looked stunning on smaller screens. In order to accommodate the possibility of building a scheduling app for Zack (and other barbers) in the future, we decided to build everything in React for the functionality it gives and React Bootstrap for basic styling and its component library.",
        result: "The final product was a simple and clean website that does exactly what we wanted. Zack’s website was designed with Zack’s personality and skill set in mind. We wanted thick bold lines, an Americana aesthetic, and influences from Zack himself. His logo pays homage to American traditional tattooing, the red used came from a guitar he played on his honeymoon, and the modern take on Americana reflects Zack’s upbringing and personal life. Off the bat the user is presented with two buttons directing them to Booksy. If they choose, they can poke around to learn more about Zack and the services he offers. We are very excited to see how far this step into the digital space will take Zack’s business as local restrictions are lifted and things return to business as usual.",
    },
    {
        id: 2,
        title: "brwr.",
        sub: "Idea | Design | Development",
        img: brwr,
        imgMobile: brwrMobile,
        imgProcess: brwrSketch,
        link: "https://brwr.netlify.app/",
        intro: "I love to start everyday with a cup of good coffee. The comfort of the first sip is the perfect way to start my morning. Brwr was built to be everybody’s coffee app, something for all, even if they’re not obsessed with coffee just yet.",
        challenge: "When the app I used to calculate the coffee to water ratio I needed for a good morning cup became cluttered, I decided it was time to find something new. My search came up short, so I decided to make my own, something that met my needs through being simple, functional, and informative. I wanted Brwr to be something everybody could use in the early mornings to help their tired brains make a good cup of coffee.",
        solution: "I always want to build web apps that I myself would enjoy using. First, I began the process of stripping the functionality of similar applications to decide which features were truly needed. After adding back the pieces that I felt were vital, I was left simply with a calculator that returned the amount of total water needed for brewing. It included inputs for the amount of coffee grounds being used and the users desired brew ratio. Aside from returning a total water amount, other features included a reminder of the bloom amount and a few brewing guides for folks who need them. Because we so often have our phones attached to us, Brwr needed to be mobile ready out of the gate. To produce the functionality and aesthetic I desired, I built Brwr in React utilizing React Bootstrap for its component library and basic CSS. In order to perfect the look, additional styles were added with custom CSS and navigation was handled through React Router.",
        result: "Brwr’s design blends together industrial elements with a playful, 90s nostalgia to reflect what it is like to experience the first sip of a drink that’s just right. The final product was an app that not only met the functionality needs, but was aesthetically pleasing as well. On page load, the user is able to enter their data without having to navigate the site, making it highly compatible with early mornings. The page-to-page navigation is accessed through a coffee cup icon that when clicked produces a drop down menu. The end goal for Brwr is for it to be migrated to a mobile app, rebuilt with React Native and available for iOS and Android.",
    },
]