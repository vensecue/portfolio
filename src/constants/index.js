import {
  mobile,
  backend,
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
  git,
  figma,
  starbucks,
  carrent,
  jobit,
  tripguide,
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
    title: "Visionary frontend developer",
    icon: mobile,
  },
  {
    title: "Analytical backend developer",
    icon: web,
  },
  {
    title: "Lightspeed learner",
    icon: backend,
  },
  {
    title: "Reliable in communication",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "COMMUNICATION",
    company_name: "As You already know - no matter what industry You work in, communication is key. Without it, even the greatest employees will not improve anything as much as they could. My experience in previous jobs, related to customer communication taught me how to communicate in the most effective way.",
    icon: starbucks,
    iconBg: "#201c34",
    date: "CLEAR AND RELIABLE COMMUNICATION",
    points: [
    ],
  },
  {
    title: "LOYALTY",
    company_name: "Company loyalty is not just your actions - it's a state of mind. Deciding on me, you can be sure that you are dealing with a dedicated person. I always value building a bond between me and the people I work with.",
    icon: starbucks,
    iconBg: "#201c34",
    date: "DILIGENT WORKER",
    points: [
    ],
  },
  {
    title: "INDIVIDUAL APPROACH",
    company_name: "Understanding that every project and person is unique, I bring an individualized approach to my work. Tailoring my skills and communication style to suit your specific needs, I am committed to fostering a personalized and effective collaboration.",
    icon: starbucks,
    iconBg: "#201c34",
    date: "CUSTOMIED COLLABORATION",
    points: [

    ],
  },
  {
    title: "TECHNOLOGIES",
    company_name: "I have experience in many technologies, such as: React, nodeJS, Typescript, javaScript, SCSS, Redux, Git, HTML 5, CSS 3, Tailwind CSS, Figma, Clickup. But remember - I can learn new ones very fast!",
    icon: starbucks,
    iconBg: "#201c34",
    date: "EXPERIENCE IN MANY TECHNOLOGIES",
    points: [

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "GitHub",
    designation: "contributions, projects, code",
    name: "/vensecue",
    image: "src\assets\company\link-7-32.png",
    company: "https://github.com/vensecue",
  },
  {
    testimonial:
      "LinkedIn",
    name: "/piotr-dzialo",
    designation: "education, experience",
    company: "https://www.linkedin.com/in/piotr-dzialo/",
    image: "",

  },
  {
    testimonial:
      "Resume",
    name: "/resume",
    designation: "my history",
    company: "https://www.canva.com/design/DAFr_gUhh6I/hky3J28iWw1tw-q4NuVymw/view?utm_content=DAFr_gUhh6I&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  },
];

const projects = [
  {
    name: "TODO APP",
    description:
      "A simple yet useful todo app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vensecue/todo-app",
  },
  {
    name: "BOSE LANDING PAGE",
    description:
      "Landing page for a company selling audio equipment.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vensecue/BOSE-landing",
  },
  {
    name: "Future..",
    description:
      "There could be a project that we could work on together..",
    tags: [
      {
        name: "whatever",
        color: "blue-text-gradient",
      },
      {
        name: "you",
        color: "green-text-gradient",
      },
      {
        name: "want",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/vensecue",
  },
];

export { services, technologies, experiences, testimonials, projects };
