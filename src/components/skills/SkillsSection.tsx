import dots from '../../assets/Dots.png';
import outline from '../../assets/Outline.png';

const SkillsSection = () => {
    const skillsData = {
        "Languages (Programming / Markup / Styles)": [
            "CSS",
            "HTML",
            "JavaScript",
            "Python",
            "SCSS",
            "TypeScript"
        ],
        "Runtime / Platform": [
            "Node.js"
        ],
        "Frameworks & Libraries": [
            "Bootstrap",
            "Express.js",
            "Nuxt",
            "React.js",
            "Tailwind CSS",
            "Vue.js"
        ],
        "State Management": [
            "Context API",
            "Pinia",
            "Redux",
            "Vuex"
        ],
        "APIs & Data Access": [
            "GraphQL",
            "REST API"
        ],
        "Headless CMS": [
            "Strapi"
        ],
        "Databases & Storage": [
            "Firestore",
            "MongoDB"
        ],
        "Cloud / BaaS": [
            "Firebase"
        ],
        "Design & Prototyping": [
            "Figma"
        ],
        "DevOps & Collaboration": [
            "Git",
            "GitHub"
        ],
        "Best Practices": [
            "Accessibility",
            "Performance Optimization",
            "Responsive Web Design"
        ]
    };



    return (
        <div id="skills" className="py-12 sm:py-16">
            <div className="flex flex-col gap-8">
                {/* Section Header */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold">
                        <span className="text-primary">#</span>skills
                    </h2>
                    <div className="flex-1 h-px bg-primary"></div>
                </div>

                                                                        {/* Content */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                                {Object.entries(skillsData).map(([category, skills]) => (
                                    <div key={category} className="space-y-3 sm:space-y-4">
                                        <h3 className="text-sm sm:text-base text-white font-bold">
                                            {category}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {skills.map((skill, index) => (
                                                <div 
                                                    key={index} 
                                                    className="bg-primary/20 text-white px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-mono border border-primary/30 hover:bg-primary/30 transition-all duration-200 cursor-pointer"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>


            </div>
        </div>
    );
};

export default SkillsSection; 