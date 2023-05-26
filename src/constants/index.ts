import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    roy,
    inno,
    carrent,
    jobit,
    tripguide,
    threejs,
    githubSVG,
    linkedin,
    telegram,
    codewars
} from "../assets";

export type NavLinkType = {
    id: string,
    title: string
}
export const navLinks: Array<NavLinkType> = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Mentor",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Web Developer / Flutter Developer",
        company_name: "Inno Menu",
        icon: inno,
        iconBg: "#383E56",
        date: "Des 2022 - April 2023",
        points: [
            "Developing new components and pages using React and Redux",
            "Working with RESTful APIs for features like registration, login, and pagination.",
            "Debugging and fixing bugs in frontend code.",
            "Deploying frontend code to various environments, such as staging and production",
            "Implementing project architectural solutions, including layering the UI, business logic layer (BLL), data access layer (DAL), and server-side code",
            "Utilizing popular frontend frameworks and libraries like Material UI and Ant Design",
            "Experience with mobile app development using Flutter"
        ],
    },
    {
        title: "React.js Developer",
        company_name: "ComDev Group",
        icon: roy,
        iconBg: "#E6DEDD",
        date: "April 2023 - Present",
        points: [
            "Implementing proper Business Logic Layer (BLL) state management techniques using Redux, Thunk middleware, and other related tools and libraries",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Working with the server-side of the application, including handling CRUD operations using AJAX calls to APIs, and processing data received from the server",
            "Debugging server-side and client-side code, and addressing any errors or issues that arise",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

const socials = [
    {
        name: "github",
        link: "https://github.com/KseniyaMelnik",
        icon: githubSVG
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/kseniya-melnik/",
        icon: linkedin
    },
    {
        name: "telegram",
        link: "https://t.me/MurlocKsu",
        icon: telegram
    },
    {
        name: "codewars",
        link: "https://www.codewars.com/users/KseniyaMelnik",
        icon: codewars
    }
]

export { services, technologies, experiences, testimonials, projects, socials };