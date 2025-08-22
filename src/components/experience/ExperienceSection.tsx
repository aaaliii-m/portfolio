// Simple SVG icons to avoid external dependencies
const BuildingIcon = () => (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
    </svg>
);

const CalendarIcon = () => (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
);

const MapPinIcon = () => (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);

const LinkIcon = () => (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    </svg>
);

const ExternalLinkIcon = () => (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
    </svg>
);

const GaugeIcon = () => (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
);

const ShieldCheckIcon = () => (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
    </svg>
);

const LayersIcon = () => (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
    </svg>
);

const ExperienceSection = () => {
    const experiences = [
        {
            company: "Tile Mountain",
            role: "Frontend Developer",
            period: "08/2023 to 11/2024",
            location: "Islamabad, Pakistan",
            summary: "Built responsive, SSR-enabled UIs using Vue.js, Nuxt.js, and Tailwind CSS, with lazy loading for performance optimization. Implemented secure authentication workflows and integrated GraphQL + Strapi for content management.",
            highlights: [
                { icon: <GaugeIcon />, text: "SSR-enabled UIs with Vue.js, Nuxt.js, and Tailwind CSS" },
                { icon: <ShieldCheckIcon />, text: "Secure JWT authentication and user dashboards" },
                { icon: <LayersIcon />, text: "GraphQL + Strapi integration for content management" },
            ],
            tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "JWT", "GraphQL", "Strapi", "Lighthouse", "GA4", "Git"],
            links: [
                { label: "Case Study", href: "#" },
                { label: "Live Site", href: "#" },
            ],
        },
        {
            company: "Malhan Soft Pvt Ltd",
            role: "React Developer",
            period: "03/2023 to 08/2023",
            location: "Lahore, Punjab",
            summary: "Built user interfaces using React.js to ensure client satisfaction. Completed an affiliate marketing project with high user engagement and collaborated with team leads and PMs.",
            highlights: [
                { icon: <GaugeIcon />, text: "Responsive user interfaces using React.js" },
                { icon: <ShieldCheckIcon />, text: "High-engagement affiliate marketing project" },
                { icon: <LayersIcon />, text: "Cross-functional collaboration with team leads and PMs" },
            ],
            tech: ["React.js", "JavaScript", "HTML", "CSS", "Git", "Bootstrap"],
            links: [
                { label: "Case Study", href: "#" },
                { label: "Live Site", href: "#" },
            ],
        },
        {
            company: "Scytalelabs",
            role: "Junior Frontend Developer",
            period: "01/2022 to 02/2023",
            location: "Lahore, Punjab",
            summary: "Developed modular, responsive interfaces using React.js, Bootstrap, and Material UI. Implemented state management with Context API and Redux, and integrated RESTful and GraphQL APIs.",
            highlights: [
                { icon: <GaugeIcon />, text: "Modular interfaces with React.js, Bootstrap, and MUI" },
                { icon: <ShieldCheckIcon />, text: "State management with Context API and Redux" },
                { icon: <LayersIcon />, text: "RESTful and GraphQL API integration" },
            ],
            tech: ["React.js", "Bootstrap", "Material UI", "Context API", "Redux", "GraphQL", "Figma", "Git", "JWT", "Google OAuth"],
            links: [
                { label: "Case Study", href: "#" },
                { label: "Live Site", href: "#" },
            ],
        }
    ];

    // Helper Components
    function TechBadge({ label }: { label: string }) {
        return (
            <span className="border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {label}
            </span>
        );
    }

    function Highlight({ icon, text }: { icon: React.ReactNode; text: string }) {
        return (
            <li className="flex items-start gap-2 text-sm text-gray">
                <span className="mt-0.5 text-primary">{icon}</span>
                <span>{text}</span>
            </li>
        );
    }

    return (
        <div id="experience" className="py-12 sm:py-16">
            <div className="flex flex-col gap-8">
                {/* Section Header */}
                                            <div className="flex items-center gap-2 sm:gap-4">
                                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                                    <span className="text-primary">#</span>experience
                                </h2>
                                <div className="flex-1 h-px bg-primary"></div>
                            </div>

                {/* Experience Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative overflow-hidden border border-gray bg-background/50">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 p-4">
                                    <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white shadow-md">
                                        <BuildingIcon />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                                        <p className="text-sm text-gray">{exp.role}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 text-xs text-gray border border-gray p-4 border-s-0 border-e-0">
                                    <span className="inline-flex items-center gap-1">
                                        <CalendarIcon /> {exp.period}
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <MapPinIcon /> {exp.location}
                                    </span>
                                </div>
                            </div>

                            <p className="mt-4 text-sm leading-6 text-gray p-4 pt-0">{exp.summary}</p>

                            <ul className="mt-4 grid gap-2 p-4">
                                {exp.highlights.map((h, i) => (
                                    <Highlight key={i} icon={h.icon} text={h.text} />
                                ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2 p-4 pt-0">
                                {exp.tech.map((t) => (
                                    <TechBadge key={t} label={t} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection; 