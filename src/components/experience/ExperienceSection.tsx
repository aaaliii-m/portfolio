const ExperienceSection = () => {
    const experiences = [
        {
            title: 'Junior Frontend Developer',
            company: 'Tile Mountain',
            location: 'Islamabad, Pakistan',
            duration: '08/2023 to 11/2024',
            achievements: [
                'Built responsive, SSR-enabled UIs using Vue.js, Nuxt.js, and Tailwind CSS, with lazy loading for performance optimization.',
                'Implemented frontend logic for critical features, including secure login/sign-up workflows and dynamic user dashboards, secured with JWT authentication.',
                'Enhanced user dashboards by integrating GraphQL for efficient data retrieval (e.g., current/previous orders) and seamless content management via Strapi.',
                'Improved site performance using Google Lighthouse and implemented GA4 tracking for user insights.',
                'Collaborated cross-functionally with backend, design, and SEO teams to meet client needs, enhance user experiences, and boost customer reach through meta tag integration to achieve business goals.',
                'Communicated effectively with stakeholders (team leads, project managers, CTOs) to gather requirements and implement business-aligned solutions.',
                'Researched and implemented features for optimal functionality and usability, including state managers like Pinia and useState composables.',
                'Researched AI tooling (e.g., CodeRabbit) for GitHub code review automation.'
            ]
        },
        {
            title: 'React Developer',
            company: 'Malhan Soft Pvt Ltd',
            location: 'Lahore, Punjab',
            duration: '03/2023 to 08/2023',
            achievements: [
                'Built user interfaces using React.js to ensure client satisfaction.',
                'Completed an affiliate marketing project with high user engagement.',
                'Engaged with team leads, PMs, and CTOs to translate requirements into impactful, business-driven features.'
            ]
        },
        {
            title: 'Junior Frontend Developer',
            company: 'Scytalelabs',
            location: 'Lahore, Punjab',
            duration: '01/2022 to 02/2023',
            achievements: [
                'Developed modular, responsive interfaces using React.js, Bootstrap, and Material UI (MUI).',
                'Used Context API and Redux to manage global and local application state.',
                'Implemented frontend logic for critical features like login/sign-up workflows and dynamic user dashboards, secured with JWT authentication and Google Authentication using Google OAuth.',
                'Visualized complex data using ApexCharts and integrated dynamic UI elements.',
                'Connected frontends to both RESTful and GraphQL APIs for robust data handling.',
                'Designed UI components and flows using Figma to align with user experience standards.'
            ]
        },
        {
            title: 'Freelance Frontend Developer',
            company: 'Upwork.com',
            location: 'Sarai Alamgir, Gujrat',
            duration: '07/2021 to 10/2021',
            achievements: [
                'Delivered interactive websites based on client samples.',
                'Used HTML, CSS, and JavaScript.',
                'Met deadlines while exceeding client expectations.'
            ]
        },
        {
            title: 'Intern System Engineer',
            company: 'PROGOS TECH (Pvt) Ltd.',
            location: 'Islamabad',
            duration: '03/2019 to 08/2019',
            achievements: [
                'Maintained systems and ensured smooth performance.',
                'Assisted in resolving hardware, software, and networking issues.',
                'Keep records of hardware/software assets.'
            ]
        }
    ];

    return (
        <div id="experience" className="py-16">
            <div className="flex flex-col gap-8">
                {/* Section Header */}
                <div className="flex items-center gap-4">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                        <span className="text-primary">#</span>experience
                    </h2>
                    <div className="flex-1 h-px bg-gray"></div>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-l-2 border-primary pl-6 relative">
                            {/* Timeline dot */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                            
                            {/* Content */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg lg:text-xl text-white font-bold">{exp.title}</h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                                        <p className="text-primary font-semibold text-sm">{exp.company}</p>
                                        <span className="text-gray hidden sm:inline">•</span>
                                        <p className="text-gray text-sm">{exp.location}</p>
                                        <span className="text-gray hidden sm:inline">•</span>
                                        <p className="text-gray text-sm">{exp.duration}</p>
                                    </div>
                                </div>
                                
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, achievementIndex) => (
                                        <li key={achievementIndex} className="flex items-start gap-2 text-gray text-sm">
                                            <span className="text-primary mt-1">•</span>
                                            <span className="leading-relaxed">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection; 