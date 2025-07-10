import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  mysql,
  git,
  bhclogo,
  linkedin,
  portfolio,
  Fashion,
  aws,
  msoffice,
  Techforge,
  T4teq,
  Corizo,
  python,
  javaa,
  webdevelopment,
  copilot,
  softskill,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "work",
    title: "Internships",
  },
  {
    id: "extracurricular",
    title: "Skill Sets",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Bachelors of Computer science",
    company_name: "Bihop heber College, Trichy",
    icon: bhclogo,
    iconBg: "#fff",
    date: "2022-2025",
    points: [
      "Courses undertaken: Data Structures and Algorithms, Operating Systems, Database Management Systems, Distributed Computing, Object Oriented Programming, Computer Architecture, Computer Network, Compiler Design, Computer Graphics & Multimedia, Soft Computing, Cloud Computing, Information Security, Blockchain Technology, Analysis and Design of Algorithm, Artificial Intelligence, Software Engineering, Machine Learning, Data Science, Internet of Things.",
      "CGPA: 7.5/10",
    ],
  },
  
  {
    title: "Higher Secondary",
    company_name: "Bishop Heber Higher secondary School, Trichy",
    icon: bhclogo,
    iconBg: "#fff",
    date: "2021-2022",
    points: [
      "Courses undertaken: Computer science",
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "Bishop Heber Higher secondary School, Trichy",
    icon: bhclogo,
    iconBg: "#fff",
    date: "2020-2021",
    points: [
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "msoffice",
    icon: msoffice,
  }
];

const experiences = [
  {
    title: "Web Development",
    company_name: "T4teq",
    icon: T4teq,
    iconBg: "#fff",
    date: "Jan 2025 - jun 2025",
    points: [
      "Web Development Certification – T4Teq Software Solution Gained hands-on experience in HTML, CSS, and JavaScript,",
      "Focusing on responsive designs techniques for enhanced userexperience. ",
    ],
  },
  {
    title: "Web Development and Hosting",
    company_name: "Tech Forge",
    icon: Techforge,
    iconBg: "#fff",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Certificate provided by the Tech forge –   a personalized VAC for the completion of Web development and Hosting with portfolio website ",
      "Portfolio and personal Websites in Tech forge  ",
    ],
  },
  {
    title: "Intern",
    company_name: "Corizo",
    icon: Corizo,
    iconBg: "#fff",
    date: "april 2024 - July 2024",
    points: [
      "In Corizo, created a static website using Azure Storage service with HTML content. d ServiceNow Certified Application Developer certifications.",
      "Created a chatbot using Amazon lex tool. "
    ],
  },
  {
    title: "Excel: modeling for beginners",
    company_name: "Linkedin Learning",
    icon: linkedin,
    iconBg: "#fff",
    date: "Aug 14 2024",
    points: [
      "basic Knowledge of excel",
       ],
  },
];

const extracurricular = [
  {
    title: "Basic Fundamentals Knowledge",
    type: "progamming",
    icon: python,javaa,
    iconBg: "white",
    points: ["Python",
             "Java",
    ],
  },
  {
    title: "Web Development",
    type: "Front-end Development",
    icon: webdevelopment,
    iconBg: "white",
    points: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
    ],
  },
  {
    title: "Leveraged AI-powered assistance",
    type: "(AI)",
    icon: copilot,
    iconBg: "white",
    points: ["(COPILOT) to optimize web development workflow and enhance coding efficiency "],
    },
  {
    title: "Soft Skills",
    type: "Commication and problem Solvimg",
    icon: softskill,
    iconBg: "white",
    points: [
      "Good in communication, Problem Solving & Decision-making skills.",
      "While working in groups, I do my best to enhance camaraderie among the members of the group. ",
    ],
  },
];

const projects = [
  {
    name: "My New Project",
  description:
    "A modern and visually appealing fashion website designed to showcase the latest trends, collections, and styles. Built with responsive web technologies, the site features interactive galleries, smooth navigation, and a user-friendly interface. It allows users to explore products, view detailed information.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
    ],
    image: Fashion,
    source_code_link: "https://github.com/varunaaditya/Shopping-Mart",
    live_project_link: "https://varunaaditya.github.io/Shopping-Mart/index.html",
  },
  {
    name: "3D Portfolio",
    description:
      "Web Portfolio in React JS which uses 3D graphics and animations to bring the content to life. The website is divided into several main sections, including an about, Education, project, connect and contact section. Each section is designed to showcase 3D's unique style and creativity, with an emphasis on interactivity and user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/varunaaditya",
    live_project_link: "https://github.com/varunaaditya",
  },
  

];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
