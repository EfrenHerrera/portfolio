import { Icon, IconBrandAndroid, IconBrandAngular, IconBrandApple, IconBrandAws, IconBrandDocker, IconBrandPython, IconBrandReact } from "@tabler/icons-react";
import React from "react";
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
        id: 'ai-systems',
        label: 'AI Systems'
    },
    {
        id: 'experience',
        label: 'Experience'
    },
    // {
    //     id: 'projects',
    //     label: 'Projects'
    // },
];

export const about = {
    paragraph1: "",
    paragraph2: "",
    paragraph3: ""
}

interface Technology {
    name: string;
    icon: React.ElementType;
}

export const technologies: Array<Technology> = [
    {
        name: "Python",
        icon: IconBrandPython 
    },
    {
        name: "Angular",
        icon: IconBrandAngular 
    },
    {
        name: "React",
        icon: IconBrandReact
    },
    {
        name: "Android",
        icon: IconBrandAndroid
    },
    {
        name: "IOS",
        icon: IconBrandApple
    },
    {
        name: "AWS",
        icon: IconBrandAws
    },
    {
        name: "Docker",
        icon: IconBrandDocker
    }
]


interface Link {
    label: string;
    url: string;
}

interface Experience {
    period: string;
    company: string;
    link?: string;
    role: string;
    details?: string;
    description: string;
    links?: Link[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        period: "Jun 2026 – Present",
        company: "Konfío",
        link: "https://konfio.mx/",
        role: "Full Stack Engineer Mid",
        details: "Full-time · Mexico · Remote",
        description: "Building React microfrontends and Python microservices, using LaunchDarkly feature flags and observability with Grafana and New Relic. Integrated the Storyblok CMS and explored AWS services, including CloudWatch monitoring.",
        technologies: ["React", "Python", "Microfrontends", "AWS", "CloudWatch", "LaunchDarkly", "Grafana", "New Relic", "Storyblok"],
    },
    {
        period: "Sep 2022 – Apr 2026",
        company: "Dealergeek",
        link:"https://dealergeek.com/",
        role: "Full-Stack Developer",
        details: "Senior Engineer",
        description: "Led full-stack delivery across web, mobile, APIs, and cloud infrastructure. Built automation and AI-assisted classification workflows for business documents and operational processes.",
        technologies: ["React Native", "Angular", "Python", "MongoDB", "AWS", "Docker", "MySQL", "Document AI"],
    },
    {
        period: "May 2022 – Aug 2024",
        company: "Kab",
        link: "https://www.kabplataforma.com/",
        role: "Mobile Developer",
        details: "Semi-Senior Engineer",
        description: "Mobile developer (React Native), application for Uber and Didi style taxi drivers. local project of my current city.",
        technologies: ["React Native", "NodeJS", "ParseDB"]
    },
    {
        period: "2020 – 2021",
        company: "Grupo Git",
        link:"https://grupogit.com/",
        role: "Full-Stack Developer",
        details: "Junior Engineer",
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
        title: "Kab Pasajero",
        description: "Application for passengers to request a taxi, similar to Uber.",
        technologies: ["React Native", "NodeJS", "ParseDB"],
        img: ""
    },
    {
        title: "Doc Reports Mobile",
        description: "Application for the management of medical reports.",
        technologies: ["React", "Python", "MongoDB", "Docker", "AWS"],
        img: ""
    },
    {
        title: "Financial Leader Board",
        description: "Application for the management of medical reports.",
        technologies: ["React Native", "Python", "MongoDB", "Docker", "AWS"],
        img: ""
    },
]
