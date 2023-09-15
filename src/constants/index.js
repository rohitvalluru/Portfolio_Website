import {
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    netflix,
    web,
    python,
    sql,
    shopstop,
    udemy,
    edx,
    zerodha,
} from "../assets";


export const navLinks = [
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
        title: "Full-Stack Developer",
        icon: web,
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
        name: "git",
        icon: git,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "sql",
        icon: sql,
    },

];

const experiences = [
    {
        title: "Paradox & Infinity",
        company_name: "edX",
        icon: edx,
        iconBg: "#383E56",
        date: "",
        points: [
            "The Paradox and Infinity course from MIT on edX introduced me to profound concepts surrounding the vastness of infinities. This comprehensive course covered distinct types of infinities, including Cantor's infinity, along with in-depth explorations of topics such as ordinals and paradoxes. The curriculum encompassed a wide array of paradoxes, including the P vs. NP problem, the Infinite Hotel Paradox, Russell's Paradox, the Banach-Tarski Theorem, and Gödel's Incompleteness Theorem. This knowledge deepened my understanding of these intricate mathematical and philosophical ideas."
        ],
    },
    {
        title: "Financial Markets Basics",
        company_name: "Varsity by Zerodha",
        icon: zerodha,
        iconBg: "#383E56",
        date: "",
        points: [
            "The Financial Markets Basics course at Varsity by Zerodha equipped me with valuable insights into the fundamentals of financial markets. This comprehensive course covered a wide range of topics, including an introductory understanding of financial markets, technical analysis, fundamental analysis, futures trading, and options trading. Combined with my two years of practical experience, this knowledge has provided me with a well-rounded understanding of financial markets and trading strategies."
        ],
    },
    {
        title: "100 Days of Code: Python",
        company_name: "Udemy",
        icon: udemy,
        iconBg: "#383E56",
        date: "Oct 2022 - Dec 2022",
        points: [
            "I have successfully completed a Python course on Udemy. The course provided comprehensive coverage, including object-oriented programming (OOP) principles and advanced web scraping techniques using Beautiful Soup."
        ],
    },
    {
        title: "The Complete 2023 Web Development Bootcamp",
        company_name: "Udemy",
        icon: udemy,
        iconBg: "#383E56",
        date: "Jan 2023 - June 2023",
        points: [
            "I have accomplished Angela Yu's rigorous Full Stack Development program, covering essential web development technologies such as HTML, CSS, JavaScript, Node.js, React, MongoDB, and Git. This course has equipped me with the knowledge and skills required to excel in both front-end and back-end development, enabling me to create dynamic and robust web applications."
        ],
    },
];


const projects = [
    {
        name: "Shoppers Stop - Mobile",
        description:
            "A luxurious e-commerce website interface created using React and Tailwind CSS. This visually captivating design offers a premium shopping experience, combining elegance and functionality. Although it currently represents the visual aspect of the website, it serves as a captivating foundation for potential future development, making it an appealing prospect for luxury brands and shoppers seeking a sophisticated online presence.",
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
        image: shopstop,
        source_code_link: "https://github.com/rohitvalluru/E-com.git",
        way: "https://e-1asthjrcx-rohitvalluru.vercel.app/"
    },
    {
        name: "Flix Trailer - Desktop",
        description:
            "A Netflix-inspired web app clone with a standout feature: instant playback of movie and series trailers upon clicking their titles. Crafted using Firebase, MongoDB, Express, React, and Redux Toolkit, this project highlights seamless integration and enhances user engagement.",
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
        image: netflix,
        source_code_link: "https://github.com/rohitvalluru/Netflix-Clone.git",
        way: "https://inquisitive-erin-garb.cyclic.cloud/signup"
    },
];

export { services, technologies, experiences, projects };