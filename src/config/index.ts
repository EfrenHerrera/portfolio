import { parseArgs } from "util";

interface Navigation {
    id: string;
    label: string;
}

export const navigations: Navigation[] = [
    {
        id: 'about',
        label: 'About'
    },
    {
        id: 'experience',
        label: 'Experience'
    },
    {
        id: 'projects',
        label: 'Projects'
    },
    // {
    //     id: 'contact',
    //     label: 'Contact'
    // }
];

export const about = {
    paragraph1: "",
    paragraph2: "",
    paragraph3: ""
}


interface Link {
    label: string;
    url: string;
}

interface Experience {
    period: string;
    title: string;
    link?: string;
    position: string;
    description: string;
    links?: Link[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        period: "2022 - Present",
        title: "Full-Stack Developer • Dealergeek",
        link:"https://dealergeek.com/",
        position: "Senior Engineer",
        description: "Full-Stack developer with role as team leader, working with technologies such as Python, Golang, React, Angular, Docker, Gitlab, AWS and configuring servers for the deployment of APIs and websites with nginx.",
        technologies: ["React Native", "Angular", "Python", "MongoDB", "AWS", "Docker", "MySQL"],
    },
    {
        period: "2022 - 2022",
        title: "Mobile Developer • Kab",
        link: "https://www.kabplataforma.com/",
        position: "Semi-Senior Engineer",
        description: "Mobile developer (React Native), application for Uber and Didi style taxi drivers. local project of my current city.",
        technologies: ["React Native", "NodeJS", "ParseDB"]
    },
    {
        period: "2020 - 2021",
        title: "Full-Stack Developer • Grupo Git",
        link:"https://grupogit.com/",
        position: "Junior Engineer",
        description: "Full-stack developer, with React, Flutter, NodeJS, Golang and PostgreSQL, in different projects.",
        technologies: ["React", "Flutter", "NodeJS", "Golang", "PostgreSQL"]
    }
]


interface Project {
    title: string;
    description: string;
    technologies: string[];
    img: string;
}
export const projects: Project[] = [
    {
        title: "Documents Detection",
        description: "Application for the detection of documents in images, using OCR and AI.",
        technologies: ["Python", "YOLOv8", "Docker", "AWS", ],
        img: ""
    },
    {
        title: "System Admin",
        description: "System for the administration of a company, with modules for sales, purchases, inventory, accounting, etc.",
        technologies: ["NextJS", "Python", "Docker", "AWS", "MongoDB"],
        img: ""
    },
    {
        title: "Kab Pasajero Mobile App",
        description: "Application for passengers to request a taxi, similar to Uber.",
        technologies: ["React Native", "NodeJS", "ParseDB"],
        img: ""
    },
    {
        title: "Doc Reports Mobile App",
        description: "Application for the management of medical reports.",
        technologies: ["React", "Python", "MongoDB", "Docker", "AWS"],
        img: ""
    },
    {
        title: "Time Clock",
        description: "Application for the control of the entry and exit of employees.",
        technologies: ["React Native", "Python", "MongoDB", "Docker", "AWS"],
        img: ""
    }
]




