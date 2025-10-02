import nycTourCopilotThumb from '../../public/img/nyc-tour-copilot-thumb.png';
import parentLoopThumb from '../../public/img/parent-loop-thumb.png';
import petPalThumb from '../../public/img/pet-pal-thumb.png';
import subwayPulseThumb from '../../public/img/subway-pulse-thumb.png';
import SampleProductCards from '../../public/img/spc-thumbnail.png';
import boxShadowGenerator from '../../public/img/box-shadow-generator.png';


export const projects = [
    {
        id: 1,
        title: "NYC Tour Copilot",
        description: "Personalized travel planning app for NYC tourists with real-time recommendations, trip saving, and interactive maps.",
        technologies: [
            "React",
            "Firebase",
            "Tailwind CSS",
            "Mapbox"
        ],
        liveUrl: "",
        githubUrl: "",
        image: nycTourCopilotThumb
    },
    {
        id: 2,
        title: "ParentLoop",
        description: "School communication platform that connects teachers, parents, and administrators with announcements, attendance, and homework tracking.",
        technologies: [
            "Vue.js",
            "Nuxt.js",
            "Node.js",
            "MongoDB"
        ],
        liveUrl: "",
        githubUrl: "",
        image: parentLoopThumb
    },
    {
        id: 3,
        title: "PetPal",
        description: "Pet management system with profile creation, vaccination tracking, and a fun pet name generator.",
        technologies: [
            "React",
            "Express",
            "MongoDB",
            "Tailwind CSS"
        ],
        liveUrl: "",
        githubUrl: "",
        image: petPalThumb
    },
    {
        id: 4,
        title: "SubwayPulse",
        description: "Real-time subway dashboard showing train delays, line status, and commuter insights for NYC riders.",
        technologies: [
            "Next.js",
            "Node.js",
            "MongoDB",
            "Tailwind CSS"
        ],
        liveUrl: "",
        githubUrl: "",
        image: subwayPulseThumb
    },
];

export const miniProjects = [
    {
        id: 'mini1',
        title: "Sample Product Cards",
        description: "Fully Responsive Product Cards with Hover Effects and Image Zoom built using plain HTML and CSS",
        technologies: [
            "HTML",
            "CSS",
        ],
        liveUrl: "https://sample-product-cards.netlify.app/",
        githubUrl: "https://github.com/aaaliii-m/product-cards",
        image: SampleProductCards
    },
    {
        id: 'mini2',
        title: "Box Shadow Generator",
        description: "A simple box shadow generator built using plain React.js, Tailwind and TypeScript",
        technologies: [
            "React.js",
            "TypeScript",
            "Tailwind CSS",
        ],
        liveUrl: "https://aaaliii-m.github.io/box-shadow-generator/",
        githubUrl: "https://github.com/aaaliii-m/box-shadow-generator",
        image: boxShadowGenerator
    }
]